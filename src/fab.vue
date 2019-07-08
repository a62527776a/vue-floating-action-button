<template>
  <div ref="fab" class="fab-main-container">
    <transition :name="'fab-' + fabAutoHideAnimateModel">
      <fab-cantainer
          @click.native="openMenu"
          v-if="hidden"
          class="fab"
          data-outside="true"
          :class="'fab-size-' + size"
          :style="fabClass">
        <transition :name="activeIcon === icon ? 'fab-icon' : active ? 'fab-active-icon' : 'fab-icon'">
          <i
          v-if="iconType === 'MaterialDesign'"
          data-outside="true"
          :key="activeIcon === icon ? icon : active"
          :class="{ 'fab-active' : active }"
          class="vue-fab-material-icons material-icons">{{activeIcon === icon ? icon : active ? activeIcon : icon}}</i>
        </transition>
        <i v-if="iconType === 'iconfont'" @click.stop="openMenu"
           class="icons iconfont vue-fab-material-icons vue-fab-iconfont-icons"
           style="font-size: 15px"
           :class="[active ? 'fab-active' : '', icon ]"
           data-outside="true">
        </i>
      </fab-cantainer>
    </transition>
      <div v-click-outside="clickoutside"
          class="fab-item-container"
          :class="'fab-size-' + size">
          <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import handleClass from './util'

export default {
  name: 'vue-fab',
  props: {
    icon: {
      type: String,
      default: 'add'
    },
    mainBtnColor: {
      type: String,
      default: '#E64C3B'
    },
    activeIcon: {
      type: String,
      default: 'add'
    },
    iconType: {
      type: String,
      default: 'MaterialDesign'
    },
    shadow: {
      type: Boolean,
      default: true
    },
    autoHideThreshold: { // 滚动触发自动隐藏阈值
      type: Number,
      default: 50
    },
    fabAutoHideAnimateModel: {
      type: String,
      default: 'default'
    },
    fabItemAnimate: {
      type: String,
      default: 'default'
    },
    size: { // 尺寸 big/normal/small
      type: String,
      default: 'normal'
    },
    clickAutoClose: {
      type: Boolean,
      default: true
    },
    fabAnimateBezier: {
      type: String,
      default: 'linear'
    },
    fabAliveAnimateBezier: {
      type: String,
      default: '.16,1.01,.61,1.2'
    },
    zIndex: {
      type: Number,
      default: 5
    },
    scrollAutoHide: {
      type: Boolean,
      default: true
    },
    globalOptions: {
      type: Object,
      default: () => {
        return {
          spacing: 40,
          delay: 0.1
        }
      }
    },
    autoHideDirection: {
      type: String,
      default: 'up'
    }
  },
  data () {
    return {
      handleClass: handleClass,
      active: false,
      scrollTop: 0,
      hidden: true,
      scrollDirection: null, // 滚动方向 up/down
      changeDirectionScrollTop: 0, // 改变滚动方向时距离顶部的位置
      touchEventInfo: {
        startY: 0,
        offsetY: 0
      }
    }
  },
  watch: {
    hidden: function (val) {
      if (!val && this.active) {
        this.active = false
      }
    }
  },
  computed: {
    overflowThreshold: function () {
      // 滑动不超过阈值
      return (Math.abs(this.touchEventInfo.offsetY) > this.autoHideThreshold)
    },
    fabClass: function () {
      return {
        transitionTimingFunction: /,/.test(this.fabAnimateBezier) ? `cubic-bezier(${this.fabAnimateBezier})` : this.fabAnimateBezier,
        zIndex: this.zIndex,
        background: this.mainBtnColor,
        boxShadow: this.shadow ? '0px 2px 8px #666' : ''
      }
    },
    // 是否无需改变隐藏状态
    notChangeHideStatus: function () {
      if (this.autoHideDirection === 'up') {
        return (this.scrollDirectionUpAndHidden || this.scrollDirectionDownAndShow)
      } else {
        return (this.scrollDirectionUpAndShow || this.scrollDirectionDownAndHidden)
      }
    },
    scrollDirectionUpAndHidden: function () {
      return this.scrollDirection === 'up' && this.hidden === true
    },
    scrollDirectionDownAndShow: function () {
      return this.scrollDirection === 'down' && this.hidden === false
    },
    scrollDirectionUpAndShow: function () {
      return this.scrollDirection === 'up' && this.hidden === false
    },
    scrollDirectionDownAndHidden: function () {
      return this.scrollDirection === 'down' && this.hidden === true
    }
  },
  methods: {
    clickoutside: function (e) {
      this.active = false
    },
    /**
     * @method testPCMobile 判断用户设备信息 PC/Mobile
     * @return { Boolean } true(Mobile)/false(PC)
     */
    testPCMobile: function () {
      if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true
      } else {
        return false
      }
    },
    /**
     * @method onOffFab 显示隐藏Fab
     * @param { Boolean } onOff 是否显示Fab
     */
    onOffFab: function (onOff) {
      this.hidden = onOff
    },
    /**
     * @method openMenu 打开或关闭菜单
     */
    openMenu: function () {
      this.$children.length > 1 ? this.active = !this.active : this.$emit('clickMainBtn')
    },
    recordScrollTopByChangeDirection: function (_scrollTop) {
      let direction = this.checkDirection(_scrollTop)
      this.scrollTop = _scrollTop
      if (this.scrollDirection !== direction) {
        this.changeDirectionScrollTop = _scrollTop
        this.scrollDirection = direction
      }
    },
    /**
     * @method scrollerEventListener 监听滚动事件
     */
    scrollerEventListener: function () {
      let _scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.recordScrollTopByChangeDirection(_scrollTop)
      // 偏移量等于当前距离顶部距离与改变方向时记录距离顶部距离值的差
      let offset = Math.abs(_scrollTop - this.changeDirectionScrollTop)
      if (this.computedOffsetOver(offset)) return false
      if (this.notChangeHideStatus) return false
      // 偏移量
      this.hidden = this.computedShowHideByOffset()
      return true
    },
    computedOffsetOver: function (offset) {
      return (offset < this.autoHideThreshold)
    },
    computedShowHideByOffset () {
      return this.scrollDirection === this.autoHideDirection
    },
    /**
     * @method checkDirection 检测滚动方向
     * @return { String } up/down
     */
    checkDirection: function (_scrollTop) {
      return _scrollTop > this.scrollTop ? 'up' : 'down'
    },
    removeScrollAutoHideListener: function () {
      document.removeEventListener('scroll', this.scrollerEventListener)
    },
    listenTouchEvent: function () {
      document.addEventListener('touchstart', this.listenTouchStart)
      document.addEventListener('touchmove', this.listenTouchMove)
    },
    removeTouchEvent: function () {
      document.removeEventListener('touchstart', this.listenTouchStart)
      document.removeEventListener('touchmove', this.listenTouchMove)
    },
    listenTouchStart: function (e) {
      this.touchEventInfo.startY = e.touches[0].clientY
    },
    listenTouchMove: function (e) {
      this.touchEventInfo.offsetY = e.touches[0].clientY - this.touchEventInfo.startY
      if (!this.overflowThreshold) return
      if (this.touchEventInfo.offsetY > 0) {
        this.hidden = this.autoHideDirection !== 'up'
      } else {
        this.hidden = this.autoHideDirection === 'up'
      }
      this.touchEventInfo.offsetY = 0
    },
    // 根据PC还是移动端以及是否启用自动 隐藏来卸载不同的事件监听函数
    unloadEvent: function () {
      if (this.scrollAutoHide) {
        if (this.testPCMobile()) {
          this.removeTouchEvent()
        } else {
          this.removeScrollAutoHideListener()
        }
      }
    },
    initTouchEvent: function () {
      // 区分PC和移动端 使用不同的动画交互方式
      if (this.scrollAutoHide) {
        if (this.testPCMobile()) {
          this.listenTouchEvent()
        } else {
          document.addEventListener('scroll', this.scrollerEventListener)
        }
      }
    }
  },
  mounted () {
    this.initTouchEvent()
  },
  activated () {
    this.initTouchEvent()
  },
  destroyed () {
    this.unloadEvent()
  },
  deactivated () {
    this.unloadEvent()
  }
}
</script>

<style lang="less" scoped>
  @import './styles/index.less';

  * {
    user-select: none
  }
  .fab-main-container {
    position: fixed;
    right: 20%;
    z-index: 9999;
    bottom: 10%;
    overflow: initial;
    box-sizing: border-box;
  }

  .fab {
    box-sizing: border-box;
    .flex-center();
    .absolute();
    border-radius: 50%;
    color: white;
    cursor: pointer;
    padding: 8px;
    .transition();
    i {
      font-size: 1.5em;
    }
  }

  .fab-active {
    transform: rotate(45deg)
  }

  .fab-item-container {
    box-sizing: border-box;
    .absolute();
  }

</style>
