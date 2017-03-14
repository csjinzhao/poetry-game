'use strict';

// 实例化vue

new Vue({
  el: '#award',
  data: {
    model: window.RenderModel,
    defaultImg: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
    showTypeIndex: 3,
    awardLists: [{
      nickname: '大大大',
      avatar_url: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
      nowdate: '03.15',
      score: '90',
      award_amount: '20'
    }, {
      nickname: '大大大大',
      avatar_url: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
      nowdate: '03.15',
      score: '90',
      award_amount: '20'
    }, {
      nickname: '大大大大大',
      avatar_url: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
      nowdate: '03.15',
      score: '90',
      award_amount: '20'
    }, {
      nickname: '大大大大大',
      avatar_url: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
      nowdate: '03.15',
      score: '90',
      award_amount: '20'
    }, {
      nickname: '大大大',
      avatar_url: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
      nowdate: '03.15',
      score: '90',
      award_amount: '20'
    }, {
      nickname: '大大大大',
      avatar_url: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
      nowdate: '03.15',
      score: '90',
      award_amount: '20'
    }, {
      nickname: '大大大大',
      avatar_url: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
      nowdate: '03.15',
      score: '90',
      award_amount: '20'
    }]
  },
  computed: {},
  ready: function ready() {
    this.nowData;
    // 今天24:00
    // 本周日24:00
    // 3月21日24:00
    // 2017年12月31日24:00
  },

  methods: {
    showAward: function showAward(index) {
      this.showTypeIndex = index;
      log(index);
      // this.$http.post('/someUrl', {
      //   // type: index
      //   _timeout: 100,
      //   onTimeout: (request) => {
      //   	console.log('timeout')
      //   }
      // }).then(function (response) {
      //   log('success', response)
      // }, function (response) {
      //   log('error', response)
      // });
    }
  }
});

(function () {})();
//# sourceMappingURL=award.js.map
