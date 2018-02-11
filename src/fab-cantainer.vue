<template>
  <div @touchstart="touching = true" @touchend="touching = false" class="fab-cantainer" :class="{ 'touchStyle' : touching }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'fab-cantainer',
  data () {
    return {
      touching: false
    }
  }
}
</script>

<style lang="less">
.touchStyle {
  opacity: .8;
}
</style>
