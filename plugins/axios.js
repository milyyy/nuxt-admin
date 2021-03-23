import Vue from 'vue'
import api from '@/api'
import Cookie from 'js-cookie'
import { Message, Loading } from 'element-ui';

let loading;
function startLoading() {
loading = Loading.service({
    lock: true,
    text: '拼命加载中...',
    background: 'rgba(0,0,0,.333)',
  })
};

function closeLoading() {
  loading.close();
};

export default function ({ app, $axios, store, redirect, error }, inject) {
  $axios.defaults.timeout = 5000;
//   startLoading();
  $axios.onRequest((config) => {
    if (Cookie.get('token')) {
      config.headers.Authorization = Cookie.get('token');
    }
    return config;
  }, err => {
	  closeLoading();
	  return Promise.reject(err);
  })

  $axios.onResponse((response) => {
	closeLoading();
	return response; // 看后台返回结构
  }, err => {
	  closeLoading();
	  const status = err.response && err.response.status;
	  switch (status) {
		case 400:
			Message.error('请求错误');
			break;
		case 401:
			//   localStorage.removeItem('user');
			Message.error('登录过期,请重新登录');
			redirect('/login');
			break;
		default:
			Message.error(`抱歉，出了一点小问题/(ㄒoㄒ)/~~`)
			break;
	  }
  })
}
