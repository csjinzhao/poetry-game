'use strict';

// 实例化vue

new Vue({
  el: '#index',
  data: {
    model: window.RenderModel,
    defaultImg: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
    hasWin: true,
    showBindWeixin: false,
    showQrcode: false,
    payQrcode: 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_x2_9d645d9.png',
    winType: ['日', '周', '月', '年度'],
    winRank: ['冠军', '亚军', '季军', '第4', '第5', '第6', '第7', '第8', '第9', '第10']
  },
  computed: {},
  ready: function ready() {
    this.hasWin = isEmpty(this.model.winner_info);
    // this.winY = moment(this.model.winner_info.win_date).format('YYYY年')
    // this.winYM = moment(this.model.winner_info.win_date).format('YYYY年MM月')
    // this.winYMD = moment(this.model.winner_info.win_date).format('YYYY年MM月DD日')
  },

  methods: {
    joinGame: function joinGame() {
      // 开始走微信支付流程
      console.log('微信支付');
    }
  }
});

(function () {});
//# sourceMappingURL=index.js.map
