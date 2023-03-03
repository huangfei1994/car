<template>
  <div id="car-showRoom">
    <div id="mount-point"></div>
    <div class="load-page">
      <span class="load-tip">随机走动，探索更多惊喜</span>
      <span class="loading">Loading...</span>
      <span class="load-progress">{{progressNum}}%</span>
      <div class="progress">
        <van-progress :percentage="progressNum" stroke-width="5" :show-pivot="false" track-color="rgba(0, 0, 0, 0.2)" color="rgba(251, 255, 254, 1)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progressNum: 0,
      loadTimer: null,
      loadCompletedTimer: null,
      ifLoadOver: false
    }
  },
  created() {},
  watch: {
    ifLoadOver: function (newValue, oldValue) {
      console.log(newValue, oldValue)
      if (newValue) {
        this.loadCompleted()
      }
    }
  },
  mounted() {
    this.loadTimer = setInterval(() => {
      if (this.progressNum < 90) {
        this.progressNum += 1
      }
      console.log('loadTimer')
    }, 100)
  },
  methods: {
    loadCompleted() {
      this.loadCompletedTimer = setInterval(() => {
        clearInterval(this.loadTimer)
        if (this.progressNum < 100) {
          this.progressNum += 1
        } else {
          clearInterval(this.loadCompletedTimer)
        }
        console.log('loadCompletedTimer')
      }, 50)
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
#car-showRoom {
  width: 100%;
  height: 100%;
  .load-page {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/car-bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    padding: 0 30px;
    font-size: 12px;
    font-family: Source Han Sans CN;
    font-weight: normal;
    letter-spacing: 0em;
    color: #ffffff;
    .load-tip {
      left: 30px;
      position: absolute;
      bottom: 45px;
    }
    .loading {
      right: 70px;
      position: absolute;
      bottom: 45px;
    }
    .load-progress {
      right: 30px;
      position: absolute;
      bottom: 45px;
    }
    .progress {
      left: 30px;
      right: 30px;
      position: absolute;
      bottom: 30px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 5px;
    }
  }
}
</style>
