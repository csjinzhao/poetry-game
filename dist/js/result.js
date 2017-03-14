'use strict';

// 实例化vue

new Vue({
  el: '#result',
  data: {
    model: window.RenderModel,
    defaultImg: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
    gameResult: {
      score: 90,
      date: 1000
    },
    rankResult: {
      day_rank: {
        day_rank_index: 1,
        day_rank_win: 34
      },
      week_rank: {
        week_rank_index: 2,
        week_rank_win: 340
      },
      month_rank: {
        month_rank_index: 3,
        month_rank_win: 3400
      },
      year_rank: {
        year_rank_index: 4,
        year_rank_win: 34000
      }
    },
    award: {
      day_award: 12,
      week_award: 23,
      month_award: 122,
      year_award: 1234
    }
  },
  computed: {},
  ready: function ready() {},

  methods: {
    // 分享
    shareResult: function shareResult() {}
  }
});

(function () {});
//# sourceMappingURL=result.js.map
