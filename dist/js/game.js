'use strict';

// 实例化vue

new Vue({
  el: '#game',
  data: {
    model: window.RenderModel,
    defaultImg: 'http://7xi5uc.com1.z0.glb.clouddn.com/khb_default_pic.png',
    questionInfo: window.RenderModel.question_info,
    singleChoiceIndex: ['A', 'B', 'C', 'D'],
    currentIndex: 1, // 题号索引，答完一道 + 1
    currentAnswer: '', // 当前题的答案
    aaa: [{
      question_ask2: '床前明月光，疑似地上#。举头望明月，低头思故乡。'
    }, {
      question_ask2: '金沙水拍云#暖，大渡桥横铁索寒。更喜岷山千里雪，三军过后尽开颜。'
    }],
    gameResult: [] // 答完一道push一道
  },
  computed: {},
  watch: {
    currentIndex: function currentIndex(val) {
      if (val > this.questionNumAdd(this.questionInfo.question_typenum, 1) && val < this.questionNumAdd(this.questionInfo.question_typenum, 2)) {
        $('.question2-aw-box').eq($('.question2-aw-box').text().indexOf('？')).addClass('bg-grey');
      }
    }
  },
  ready: function ready() {
    this.currentIndex = 2;
  },

  methods: {
    questionNumAdd: function questionNumAdd(arr, num) {
      // 返回某个数组的前几项之和
      var numadd = 0;
      for (var i = 0; i < num; i++) {
        numadd += arr[i];
      }
      return numadd;
    },
    selectSingle: function selectSingle(index) {
      // 单选题点击选项
      $('.question1-ss-box').removeClass('bg-grey').eq(index).addClass('bg-grey');
      this.currentAnswer = $('.question1-sc-box').eq(index).text();
    },

    // 回答问题时：已答曾变成下一题，未答则提示您未答题
    sureAnswer: function sureAnswer(index) {
      // 确认回答
      log(this.currentAnswer);
      if (this.currentAnswer === '') {
        toast('请先答题，再确认！');
        return false;
      }
      this.toNext();
    },

    // 放弃回答时：已答提示是否放弃，未答则变成下一题
    giveupAnswer: function giveupAnswer(index) {
      // if (this.currentAnswer !== '') {
      //   log('确认放弃么！')
      //   return false
      // }
      this.toNext();
    },
    toNext: function toNext() {
      this.gameResult.push(this.currentAnswer);
      this.currentIndex++;
      // this.$nextTick(function(){
      //
      // })
      log('index', this.currentIndex);
      log('1', this.questionInfo.questions[this.currentIndex - 1].question_ask2);
      log('2', this.questionInfo.questions[this.currentIndex - 1].question_ask2.split(''));
    }
  }
});

(function () {})();
//# sourceMappingURL=game.js.map
