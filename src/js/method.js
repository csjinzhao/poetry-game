// 配置信息
var config = {
  DEBUG: true
}

// 通用函数
function getQueryString (name) { // 解析链接参数
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = decodeURI(window.location.search).substr(1).match(reg)
  if (r !== null) return unescape(r[2])
  return null
}

function addUrlString (name, value) {  // 增加链接参数
  var currentUrl = window.location.href.split('#')[0]
  if (/\?/g.test(currentUrl)) {
    if (/name === [-\w]{4,25}/g.test(currentUrl)) {
      currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + '=' + value)
    } else {
      currentUrl += '&' + name + '=' + value
    }
  } else {
    currentUrl += '?' + name + '=' + value
  }
  if (window.location.href.split('#')[1]) {
    window.location.href = currentUrl + '#' + window.location.href.split('#')[1]
  } else {
    window.location.href = currentUrl
  }
}

function log (a, b) { // 打印console.log
  if (config.DEBUG) {
    if (b || b === 0 || b === false || b === 'null') { // 第一类：无提示文字log，如log(a)
      console.log(a, b)
    } else { // 第二类：有提示文字log，如log('a', a)
      console.log(a)
    }
  }
}

function error (a, b) { // 打印console.error
  if (config.DEBUG) {
    if (b || b === 0 || b === false || b === 'null') { // 第一类：无提示文字error，如error(a)
      console.error(a, b)
    } else { // 第二类：有提示文字log，如error('a', a)
      console.error(a)
    }
  }
}

function isEmpty (obj) {// 判断对象是否为空
  for (let name in obj) return false
  return true
}

function toast (msg='', ms="2000") { // 生成toast
  log('111')
  var $toast = $(`<div class="toastbox" flex="main:center cross:center"><div class="toast">${msg}</div></div>`)
  $('body').append($toast)
  setTimeout(() => $toast.remove(), ms)
}


// vue方法
// 截取nickname
Vue.filter('splitNickName', function (value) {
  if (value == null) return 'null';
  return value.length <= 4 ? value : value.substr(0, 3) + '...';
});

// 添加时超时处理
Vue.http.interceptors.push((request, next) => {
  var timeout;
  // 這裡改用 _timeout ，就不會觸發原本的
  if (request._timeout) {
	  // 一樣綁定一個定時器，但是這裡是只要觸發了，就立即返回 response ， 並且這邊自定義了 status 和 statusText
    timeout = setTimeout(() => {
      if(request.onTimeout) request.onTimeout(request)
	    request.abort()
    }, request._timeout);
  }
  next((response) => {
    clearTimeout(timeout);
  });
})

// 添加vue-resource
Vue.use(VueResource);
