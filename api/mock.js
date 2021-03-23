// mock.js https://github.com/nuysoft/Mock/wiki/Mock.mock()
const Mock = require('mockjs')

// 直接返回数据模板
const list = Mock.mock('/user/test', {
  'list|1-10': [
    {
      'id|+1': 2,
    },
  ],
})


const obj = Mock.mock('/user/info', (options) => {
	return options;
})
// get
function ajaxHttpGet(url, type ) {
  const xmlhttp = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
  xmlhttp.open('GET', url, false)
  xmlhttp.send()
  return xmlhttp.responseText
}
const example = ajaxHttpGet('/user/test', 'get')
console.log('example', example)

// post
function ajaxHttpPost(url, type, params) {
  const xmlhttp = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP')
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      return xmlhttp.responseText
    }
  }
  xmlhttp.open('POST', url, true)
  xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
//   xmlhttp.send('fname=Bill&lname=Gates')
  xmlhttp.send(params);
  return xmlhttp.responseText
}




export {
	ajaxHttpGet,
	ajaxHttpPost
}