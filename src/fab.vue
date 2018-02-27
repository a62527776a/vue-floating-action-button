<template>
  <div ref="fab" class="fab-container">
    <transition :name="'fab-' + fabAutoHideAnimateModel">
      <fab-cantainer 
          @click.native="openMenu"
          v-if="hidden"
          class="fab"
          data-outside="true"
          :class="{ 'fab-shadow' : shadow }"
          :style="fabClass">
        <transition :name="activeIcon === icon ? 'fab-icon' : active ? 'fab-icon' : 'fab-active-icon'">
          <i
          data-outside="true"
          :key="activeIcon === icon ? icon : active"
          :class="{ 'fab-active' : active }"
          class="material-icons">{{activeIcon === icon ? icon : active ? activeIcon : icon}}</i>
        </transition>
      </fab-cantainer>
    </transition>
    <div v-click-outside="clickoutside">
      <transition v-for="(item, idx) in menu"
        :key="item.key"
        name="fab-child">
        <fab-cantainer 
            v-show="active"
            @click.native="clickItem(idx, item)"
            :style="{ top: -50 - idx * spacing + 'px',
            transitionDelay: active ? idx * delay + 's' : '0s',
            background: item.color ? item.color : '#FFF'}"
            class="fab-child"
            :class="{ 'fab-shadow' : !item.color }">
          <div v-if="item.title" :style="titleStyle" class="fab-item-title">
            {{item.title}}
          </div>
          <i class="material-icons"
            :style="{
              color: item.color ? 'white' : '#999'
            }">{{item.icon}}</i>
        </fab-cantainer>
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
    spacing: {
      type: Number,
      default: 45
    },
    shadow: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 0.05
    },
    titleColor: {
      type: String,
      default: '#666'
    },
    titleBg: {
      type: String,
      default: '#FFF'
    },
    autoHideThreshold: { // 滚动触发自动隐藏阈值
      type: Number,
      default: 10
    },
    fabAutoHideAnimateModel: {
      type: String,
      default: 'default'
    },
    size: { // 尺寸 big/normal/small
      type: String,
      default: 'normal'
    },
    menu: {
      type: Array,
      default: () => {
        return [
          {
            key: 'add',
            icon: 'add',
            title: 'add',
            color: '#3599DB'
          },
          {
            key: 'https',
            icon: 'https',
            title: 'https',
            color: '#9B5BB6'
          }
        ]
      }
    },
    clickAutoClose: {
      type: Boolean,
      default: true
    },
    fabAnimateBezier: {
      type: String,
      default: 'liner'
    },
    zIndex: {
      type: Number,
      default: 5
    },
    scrollAutoHide: {
      type: Boolean,
      default: true
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
      },
      fabSize: {
        big: 48,
        normal: 40,
        small: 32
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
        height: this.fabSize[this.size] + 'px',
        width: this.fabSize[this.size] + 'px'
      }
    },
    titleStyle: function () {
      return {
        color: this.titleColor,
        background: this.titleBg
      }
    }
  },
  methods: {
    /**
     * @method onOffFab 显示隐藏Fab
     * @param { Boolean } onOff 是否显示Fab
     */
    onOffFab: function (onOff) {
      this.hidden = onOff
    },
    clickItem: function (idx, item) {
      if (this.clickAutoClose) {
        setTimeout(() => {
          this.active = false
        }, 300)
      }
      this.$emit('clickItem', {idx, 'key': item.key})
    },
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
     * @method openMenu 打开菜单
     * 当当前子菜单项为空时 则传递一个clickMainBtn事件
     * 当当前子菜单不为空时 则打开或关闭子菜单
     */
    openMenu: function () {
      this.menu.length > 0 ? this.active = !this.active : this.$emit('clickMainBtn')
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
  * {
    user-select: none
  }
  .fab-container {
    position: fixed;
    right: 10%;
    bottom: 10%;
    overflow: initial;
  }

  .fab {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    display: flex;
    color: white;
    padding: 8px;
    transition: all .2s, opacity .5s;
    justify-content: center;
    align-items: center;
    i {
      font-size: 1.5em;
    }
  }

  .fab-shadow {
    box-shadow: 0px 2px 8px #666;
  }

  .fab-active {
    transform: rotate(45deg)
  }

  .fab-child {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -50px;
    width: 80%;
    height: 80%;
    margin-left: 10%;
    border-radius: 50%;
    transition: all .2s;
    overflow: inherit;
    i {
      font-size: 1em;
    }
  }

  .fab-item-title {
    position: absolute;
    right: 4em;
    box-shadow: 0 1px .5px #CCC;
    padding: 2px 5px;
    font-size: .8em;
    min-width: 3em;
    white-space:nowrap;
    border-radius: 2px;
    text-align: center;
  }

  .material-icons {
    transition: all .2s ease;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
  }

  .fab-default-leave-to {
    transform: scale(0);
  }

  .fab-default-enter {
    transform: scale(0) rotate(-45deg);
  }

  .fab-alive-leave-to {
    transform: translateY(60px);
    opacity: 0;
  }

  .fab-alive-leave-active, .fab-alive-enter-active {
    transition: all .3s;
  }

  .fab-alive-enter {
    transform: translateY(60px);
    opacity: 0;
  }

  /* 如果激活菜单的icon和未激活的icon不一样时切换icon的动画 */
  .fab-active-icon-leave, .fab-icon-enter-to {
    transform: rotate(45deg);
  }

  .fab-icon-leave-to, .fab-active-icon-enter {
    transform: rotate(90deg);
  }

  .fab-icon-leave, .fab-icon-enter, .fab-active-icon-enter-to, .fab-active-icon-leave-to {
    transform: rotate(0deg)
  }

  .fab-icon-enter, .fab-icon-leave-to, .fab-active-icon-enter, .fab-active-icon-leave-to {
    opacity: 0;
  }
  .fab-icon-enter-to, .fab-icon-leave, .fab-active-icon-to, .fab-active-icon-leave {
    opacity: 1;
  }
  
  .fab-child-enter {
    opacity: 0;
    transform: translate3D(0, 5px, 0) scale(.8);
  }

  .fab-child-leave-to {
    opacity: 0;
  }

</style>
