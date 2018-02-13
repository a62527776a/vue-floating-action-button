<template>
  <div @touchstart="startAnimate" 
       @touchend="endAnimate"
       class="fab-cantainer" :class="{ 'touchStyle' : touching }">
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
.touchStyle {
  opacity: .6;
}
</style>
