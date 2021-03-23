// axios请求示例
export default request => ({
	login: params => {
		request({ url: '/api/user/login', method: 'post', data})
	},
	logout: params => {// 根据实际情况修改
		request({ url: '/api/user/logout', method: 'post'})
	},
	getUserInfo: params => {
		request({ url: '/api/user/info', method: 'get', params})
	}
})