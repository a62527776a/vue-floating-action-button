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
          v-if="icon"
          data-outside="true"
          :key="activeIcon === icon ? icon : active"
          :class="{ 'fab-active' : active }"
          class="material-icons">{{activeIcon === icon ? icon : active ? activeIcon : icon}}</i>
        </transition>
        <i v-if="!icon" @click.stop="openMenu"
           class="icons material-icons"
           :class="{ 'fab-active' : active }"
           data-outside="true">
          <slot name="icon"></slot>
        </i>
      </fab-cantainer>
    </transition>
    <div v-click-outside="clickoutside"
         class="fab-item-container"
         :class="'fab-size-' + size">
          <slot></slot>
      </transition>
    </div>
  </div>
</template>

<script>
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
    }
  },
  data () {
    return {
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
    fabClass: function () {
      return {
        transitionTimingFunction: /,/.test(this.fabAnimateBezier) ? `cubic-bezier(${this.fabAnimateBezier})` : this.fabAnimateBezier,
        zIndex: this.zIndex,
        background: this.mainBtnColor,
        boxShadow: this.shadow ? '0px 2px 8px #666' : ''
      }
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
    /**
     * @method scrollerEventListener 监听滚动事件
     */
    scrollerEventListener: function () {
      let _scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let direction = this.checkDirection()
      this.scrollTop = _scrollTop
      // 如果方向发生改变 则记录改变时滚动距离
      if (this.scrollDirection !== direction) {
        this.changeDirectionScrollTop = _scrollTop
        this.scrollDirection = direction
      }
      // 偏移量等于当前距离顶部距离与改变方向时记录距离顶部距离值的差
      let offset = Math.abs(_scrollTop - this.changeDirectionScrollTop)
      // 偏移量
      if ((this.scrollDirection === 'up' && this.hidden === true) ||
      (this.scrollDirection === 'down' && this.hidden === false)) return
      if (offset > this.autoHideThreshold) {
        this.scrollDirection === 'up' ? this.hidden = true : this.hidden = false
      }
    },
    /**
     * @method checkDirection 检测滚动方向
     * @return { String } up/down
     */
    checkDirection: function () {
      let _scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      return _scrollTop > this.scrollTop ? 'up' : 'down'
    },
    removeScrollAutoHideListener: function () {
      document.removeEventListener(this.scrollerEventListener)
    },
    listenTouchEvent: function () {
      document.addEventListener('touchstart', this.listenTouchStart)
      document.addEventListener('touchmove', this.listenTouchMove)
    },
    removeTouchEvent: function () {
      document.removeEventListener(this.listenTouchStart)
      document.removeEventListener(this.listenTouchMove)
    },
    listenTouchStart: function (e) {
      this.touchEventInfo.startY = e.touches[0].clientY
    },
    listenTouchMove: function (e) {
      this.touchEventInfo.offsetY = e.touches[0].clientY - this.touchEventInfo.startY
      if (this.touchEventInfo.offsetY > this.autoHideThreshold) {
        this.hidden = false
        this.touchEventInfo.offsetY = 0
      } else if (this.touchEventInfo.offsetY < -this.autoHideThreshold) {
        this.hidden = true
        this.touchEventInfo.offsetY = 0
      }
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
    }
  },
  mounted () {
    // 区分PC和移动端 使用不同的动画交互方式
    if (this.scrollAutoHide) {
      if (this.testPCMobile()) {
        this.listenTouchEvent()
      } else {
        document.addEventListener('scroll', this.scrollerEventListener)
      }
    }
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
    bottom: 10%;
    overflow: initial;
  }

  .fab {
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
    .absolute()
  }

</style>
