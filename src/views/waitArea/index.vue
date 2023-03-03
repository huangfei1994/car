<template>
  <div class="wait-container">
    <div class="progress-bar">
      <div class="desc">
        <span class="tips">随机走动，探索更多惊喜</span>
        <!-- <van-button size="small" type="primary" @click="jumpParent">回跳车贷小程序页面</van-button> -->
        <span class="rank-info">排队中，前方还有10人</span>
      </div>
      <van-progress :percentage="60" :show-pivot="false" color="#FBFFFE" />
    </div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
export default {
  data() {
    return {}
  },
  methods: {
    jumpParent() {
      wx &&
        wx.miniProgram.navigateTo({
          url: '/pages/testJump'
        })
    }
  }
}
</script>

<style lang="less" scope>
div.wait-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/img/wait-banner.png') no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  .progress-bar {
    width: 88%;
    left: 6%;
    height: 28px;
    position: absolute;
    z-index: 10;
    bottom: 40px;
    color: #fbfffe;

    .desc {
      font-size: 12px;
      line-height: 16px;
      height: 16px;
      overflow: hidden;
      margin-bottom: 10px;
      span.tips {
        float: left;
      }
      span.rank-info {
        float: right;
      }
    }
    .van-progress {
      height: 10px;
      background: none;
      border: 1px solid #eee;
      padding: 1px 0;
      box-sizing: border-box;
      .van-progress__portion {
        height: calc(100% - 2px);
      }
    }
  }
}
</style>
