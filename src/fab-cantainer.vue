<template>
  <div @touchstart="startAnimate" 
       @touchend="endAnimate"
       @mousedown="startAnimate"
       @mouseup="endAnimate"
       @mouseleave="endAnimate"
       class="fab-cantainer">
    <div :class="{ 'touchStyle' : touching }" class="fabMask"></div>
    <slot></slot>
  </div>
</template>

<script>
import { Timeout } from './util'

export default {
  name: 'fab-cantainer',
  data () {
    return {
      touching: false,
      animating: false,
      mousedown: false,
      timeout: new Timeout()
    }
  },
  methods: {
    startAnimate: async function () {
      this.touching = true
      this.animating = true
      this.mousedown = true
      await this.timeout.handleTimeout()
      this.animating = false
      if (this.mousedown) return
      this.touching = false
    },
    endAnimate: function () {
      this.mousedown = false
      if (this.animating) return
      this.touching = false
      this.timeout.handleClearTimeout()
    }
  }
}
</script>

<style lang="less" scoped>
@import './styles/index.less';

.fabMask {
  .absolute();
  height: 100%;
  width: 100%;
  border-radius: 50%;
  background: #FFF;
  opacity: 0;
  transition: all .3s;
}

.touchStyle {
  opacity: .2 !important;
}
</style>
