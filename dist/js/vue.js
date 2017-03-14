'use strict';

// vue 方法
//
// 截取nickname
Vue.filter('splitNickName', function (value) {
  if (value == null) return 'null';
  return value.length <= 4 ? value : value.substr(0, 3) + '...';
});

// 添加vue-resource
Vue.use(VueResource);

// 添加时超时处理
Vue.http.interceptors.push(function (request, next) {
  var timeout;
  // 這裡改用 _timeout ，就不會觸發原本的
  if (request._timeout) {
    // 一樣綁定一個定時器，但是這裡是只要觸發了，就立即返回 response ， 並且這邊自定義了 status 和 statusText
    timeout = setTimeout(function () {
      if (request.onTimeout) request.onTimeout(request);
      request.abort();
    }, request._timeout);
  }
  next(function (response) {
    clearTimeout(timeout);
  });
});
//# sourceMappingURL=vue.js.map
