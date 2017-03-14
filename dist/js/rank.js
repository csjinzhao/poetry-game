'use strict';

// 实例化vue

new Vue({
  el: '#rank',
  data: {
    model: window.RenderModel,
    showTypeIndex: 1,
    rankLists: [{
      rank: 15000,
      nickname: '大大大',
      score: '90',
      time: '120',
      complete_time: '2017.01.01 12:30:45'
    }, {
      rank: 1,
      nickname: '大大大',
      score: '90',
      time: '120',
      complete_time: '2017.01.01 12:30:45'
    }, {
      rank: 2,
      nickname: '大大大',
      score: '90',
      time: '120',
      complete_time: '2017.01.01 12:30:45'
    }, {
      rank: 3,
      nickname: '大大大',
      score: '90',
      time: '120',
      complete_time: '2017.01.01 12:30:45'
    }]
  },
  computed: {},
  ready: function ready() {},

  methods: {
    showRank: function showRank(index) {
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
//# sourceMappingURL=rank.js.map
