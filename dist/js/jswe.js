'use strict';

!function (e, t) {
  var config = {
    wxconfig: 'http://www.qianbaoxia.com/system/request.action'
  },
      wxData = {
    debug: false,
    imgUrl: '',
    link: '',
    desc: '',
    title: '',
    timeLine: ''
  },
      wxConfig = {
    hide: false,
    close: false
  },
      jsApiList = ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem', 'translateVoice', 'startRecord', 'stopRecord', 'onRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'getNetworkType', 'openLocation', 'getLocation', 'hideOptionMenu', 'showOptionMenu', 'closeWindow', 'scanQRCode', 'chooseWXPay', 'openProductSpecificView', 'addCard', 'chooseCard', 'openCard'],
      wxApiFun;

  function isOpenOnPC() {
    // 判断当前网页是否在 PC 浏览器中打开
    var ua = navigator.userAgent;
    return (/windows nt/i.test(ua) || /macintosh/i.test(ua) || /linux x86_64/i.test(ua)
    );
  }

  function isOpenInWeixin() {
    // 判断当前网页是否在微信内置浏览器中打开
    return (/micromessenger/i.test(navigator.userAgent)
    );
  }

  function getWeixinVersion() {
    var ua = navigator.userAgent,
        mt = ua.match(/micromessenger\/([\d.]+)/i);
    return mt ? mt[1] : '';
  }

  // This function checks whether Wechat is the appointed version or not
  // Cmp: http://jsperf.com/regexp-test-vs-indexof-ignore-upper-and-lower
  function isWeixinVersion(version) {
    // return new RegExp('micromessenger/' + version , 'i').test(navigator.userAgent)
    return navigator.userAgent.toLowerCase().indexOf('micromessenger/' + version) !== -1;
  }

  function hideOptionMenu() {
    wxConfig.hide = true;
    update();
  }

  function showOptionMenu() {
    wxConfig.hide = false;
    update();
  }

  function closeWindow() {
    wxConfig.close = true;
    update();
  }

  function wxReady(data) {
    wx.config({
      debug: wxData.debug,
      appId: data.result.appId,
      timestamp: data.result.timestamp,
      nonceStr: data.result.nonceStr,
      signature: data.result.signature,
      jsApiList: jsApiList
    });

    var callbacks = {
      trigger: function trigger(res) {
        // alert('用户点击发送给朋友')
        if (JSWE.wxTrigger) {
          JSWE.wxTrigger();
        }
      },
      success: function success(res) {
        // alert('已分享')
        if (JSWE.wxSuccess) {
          JSWE.wxSuccess();
        }
      },
      cancel: function cancel(res) {
        // alert('已取消')
        if (JSWE.wxCancel) {
          JSWE.wxCancel();
        }
      },
      fail: function fail(res) {
        // alert(JSON.stringify(res))
        if (JSWE.wxFail) {
          JSWE.wxFail();
        }
      }
    },
        shareInfo = function shareInfo(flag) {
      var _share = {
        title: flag ? wxData.title : wxData.timeLine || wxData.desc,
        link: wxData.link,
        imgUrl: wxData.imgUrl,
        trigger: callbacks.trigger,
        success: callbacks.success,
        cancel: callbacks.cancel,
        fail: callbacks.fail
      };
      if (flag) _share.desc = wxData.desc;
      return _share;
    },
        wxApi = function wxApi() {
      // 2. 分享接口
      // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareAppMessage(shareInfo(1));
      // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareTimeline(shareInfo(0));
      // 2.3 监听“分享到QQ”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareQQ(shareInfo(1));
      // 2.4 监听“分享到微博”按钮点击、自定义分享内容及分享结果接口
      wx.onMenuShareWeibo(shareInfo(1));
      // 8 界面操作接口
      // 8.1 隐藏右上角菜单
      // 8.2 显示右上角菜单
      if (wxConfig.hide) {
        wx.hideOptionMenu();
      } else {
        wx.showOptionMenu();
      }
      // 8.7 关闭当前窗口
      if (wxConfig.close) {
        wx.closeWindow();
      }
    };

    wx.ready(wxApi);

    return wxApiFun = wxApi;
  }

  if (isOpenInWeixin() || isOpenOnPC()) {
    $.ajax({
      url: config.wxconfig,
      type: 'get',
      dataType: 'jsonp',
      callback: 'callback',
      data: {
        data: JSON.stringify({
          method: "getJsapiSignature",
          params: {
            url: window.location.href.split('#')[0]
          }
        })
      },
      success: wxReady
    });
  }

  function initWxData(data, flag) {
    for (var d in data) {
      if (d in wxData) wxData[d] = data[d];
    }
    if (flag) fixedWxData();
  }

  function changeWxData(key, value, flag) {
    if (key in falDwxDataata) wxData[key] = value;
    if (flag) fixedWxData();
  }

  function fixedWxData() {
    if (typeof wxApiFun !== 'undefined') wxApiFun();
  }

  var v = {
    version: '1.0.0',

    // Basic Vars
    config: config,
    wxData: wxData,
    jsApiList: jsApiList,

    // Weixin Function
    isOpenInWeixin: isOpenInWeixin,
    getWeixinVersion: getWeixinVersion,
    isWeixinVersion: isWeixinVersion,

    // Menu Function
    hideOptionMenu: hideOptionMenu,
    showOptionMenu: showOptionMenu,
    closeWindow: closeWindow,

    // Share Function
    initWxData: initWxData,
    changeWxData: changeWxData,
    fixedWxData: fixedWxData
  };
  e.JSWE = e.V = v;
}(window);
//# sourceMappingURL=jswe.js.map
