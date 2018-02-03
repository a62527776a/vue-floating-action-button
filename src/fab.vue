<template>
  <div class="fab-container">
    <transition name="fab">
      <div @click="active = !active"
          v-show="hidden"
          class="fab fab-shadow"
          :style="fabClass">
        <transition :name="activeIcon === icon ? 'fab-icon' : active ? 'fab-icon' : 'fab-active-icon'">
          <i :key="activeIcon === icon ? icon : active"
          :class="{ 'fab-active' : active }"
          class="material-icons">{{activeIcon === icon ? icon : active ? activeIcon : icon}}</i>
        </transition>
      </div>
    </transition>
    <transition v-for="(item, idx) in menu"
      :key="item.key"
      name="fab-child">
      <div v-show="active"
           @click.native="$emit(clickItem, item.key)"
           :style="{ top: -50 - idx * spacing + 'px',
           transitionDelay: active ? idx * delay + 's' : '0s'}"
           class="fab-child fab-shadow">
        <i class="material-icons">{{item.icon}}</i>
      </div>
    </transition>
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
    activeIcon: {
      type: String,
      default: 'add'
    },
    spacing: {
      type: Number,
      default: 45
    },
    hidden: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: .05
    },
    menu: {
      type: Array,
      default: () => {
        return [
          {
            key: 'add',
            icon: 'add'
          },
          {
            key: 'https',
            icon: 'https'
          }
        ]
      }
    },
    fabAnimateBezier: {
      type: String,
      default: 'liner'
    }
  },
  data () {
    return {
      active: false
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
        transitionTimingFunction: /,/.test(this.fabAnimateBezier) ? `cubic-bezier(${this.fabAnimateBezier})` : this.fabAnimateBezier
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .fab-container {
    position: fixed;
    right: 10%;
    bottom: 10%;
    overflow: initial;
  }

  .fab {
    z-index: 9999;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: #FF0088;
    display: flex;
    color: white;
    padding: 8px;
    transition: all .2s;
  }

  .fab-shadow {
    box-shadow: 0px 2px 8px #666;
  }

  .fab-active {
    transform: rotate(45deg)
  }

  .fab-child {
    position: absolute;
    top: -50px;
    width: 80%;
    height: 80%;
    margin-left: 10%;
    background: white;
    border-radius: 50%;
    transition: all .2s;
  }

  .fab-child > i {
    color: #999;
  }

  .material-icons {
    font-size: 22px;
    position: absolute;
    top: 50%;
    margin-top: -11px;
    margin-left: -11px;
    left: 50%;
    transition: all .2s ease;
  }

  .fab-leave-to {
    transform: scale(0);
  }

  .fab-enter {
    transform: scale(0) rotate(-45deg);
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
