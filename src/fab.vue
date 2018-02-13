<template>
  <div ref="fab" class="fab-container">
    <transition name="fab">
      <fab-cantainer @click.native="active = !active"
          v-show="hidden"
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
            @click.native="clickItem(item)"
            :style="{ top: -50 - idx * spacing + 'px',
            transitionDelay: active ? idx * delay + 's' : '0s',
            background: item.color}"
            class="fab-child"
            :class="{ 'fab-shadow' : !item.color }">
          <div v-if="item.title" class="fab-item-title">
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
            icon: 'add',
            title: 'add'
          },
          {
            key: 'https',
            icon: 'https',
            title: 'https'
          }
        ]
      }
    },
    clickAutoHidden: {
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
        transitionTimingFunction: /,/.test(this.fabAnimateBezier) ? `cubic-bezier(${this.fabAnimateBezier})` : this.fabAnimateBezier,
        zIndex: this.zIndex
      }
    }
  },
  methods: {
    clickItem: function (item) {
      setTimeout(() => {
        this.active = !this.clickAutoHidden
      }, 300)
      this.$emit('clickItem', item.key)
    },
    clickoutside: function (e) {
      this.active = false
    }
  },
  created () {

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
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: #FF0088;
    display: flex;
    color: white;
    padding: 8px;
    transition: all .2s, opacity .5s;
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
      font-size: .8em;
    }
  }

  .fab-item-title {
    position: absolute;
    right: 4em;
    box-shadow: 0 1px .5px #CCC;
    color: #666;
    padding: 2px 5px;
    font-size: .6em;
    min-width: 3em;
    white-space:nowrap;
    border-radius: 2px;
    text-align: center;
  }

  .material-icons {
    transition: all .2s ease;
    position: absolute;
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
