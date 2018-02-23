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
export default {
  name: 'fab-cantainer',
  data () {
    return {
      touching: false,
      timing: null,
      animating: false,
      mousedown: false
    }
  },
  methods: {
    startAnimate: function () {
      this.touching = true,
      this.animating = true
      this.mousedown = true
      this.timing = setTimeout(() => {
        this.animating = false
        if (this.mousedown) return
        this.touching = false
        clearTimeout(this.timing)
      }, 300)
    },
    endAnimate: function () {
      this.mousedown = false
      if (this.animating) return
      this.touching = false
      clearTimeout(this.timing)
    }
  }
}
</script>

<style lang="less">
.fabMask {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: #FFF;
  opacity: 0;
  transition: all .3s;
}
.touchStyle {
  opacity: .2 !important;
}
</style>
