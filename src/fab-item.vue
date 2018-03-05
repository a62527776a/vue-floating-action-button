<template>
  <transition
    :name="'fab-item-' + $parent.fabItemAnimate">
    <fab-cantainer
      @click.native="clickItem"
      class="fab-item"
      v-show="($parent.fabMenuAnimate === 'alive' || $parent.active) && $parent.hidden"
      :style="fabItemStyle"
      :class="{ 'fab-shadow' : !color }">
        <div v-if="title" :style="titleStyle" class="fab-item-title">
          {{title}}
        </div>
        <i v-if="icon" class="material-icons"
          :style="{
            color: color ? 'white' : '#999'
      }">{{icon}}</i>
        <i class="icons">
          <slot name="icon"></slot>
        </i>
    </fab-cantainer>
  </transition>
</template>

<script>
export default {
  name: 'fab-item',
  props: {
    idx: {
      type: Number,
      default: 0,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'add'
    },
    color: {
      type: String,
      default: null
    },
    titleColor: {
      type: String,
      default: '#666'
    },
    titleBgColor: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    /**
     * 根据不同的动画模式处理不同的css
     */
    fabItemStyle: function () {
      let animateModel = {
        default: {
          top: -40 - this.idx * this.$parent.globalOptions.spacing + 'px',
          transitionDelay: this.$parent.active ? this.idx * this.$parent.globalOptions.delay + 's' : '0s',
          background: this.color ? this.color : '#FFF'
        },
        alive: {
          transition: 'all .4s',
          transitionTimingFunction: 'cubic-bezier(.16,1.01,.61,1.2)',
          top: 0,
          transitionDelay: this.$parent.active ? this.idx * (this.$parent.globalOptions.delay / 3) + 's' : '0s',
          opacity: this.$parent.active ? 1 : 0,
          background: this.color ? this.color : '#FFF',
          transform: this.$parent.active ? 'translate3D(0, -' + (this.idx + 1) * this.$parent.globalOptions.spacing + 'px, 0)' : 'translate3D(0, 0, 0)',
          zIndex: -this.idx
        }
      }
      return animateModel[this.$parent.fabItemAnimate]
    },
    titleStyle: function () {
      return {
        color: this.titleColor,
        background: this.titleBgColor
      }
    }
  },
  methods: {
    clickItem: function () {
      if (this.$parent.clickAutoClose) {
        setTimeout(() => {
          this.$parent.active = false
        }, 300)
      }
      this.$emit('clickItem', {idx: this.idx})
    }
  }
}
</script>

<style lang="less">
@import './styles/index.less';

.fab-item {
  .flex-center();
  .transition();
  position: absolute;
  cursor: pointer;
  top: -50px;
  width: 80%;
  height: 80%;
  margin-left: 10%;
  border-radius: 50%;
  overflow: inherit;
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
</style>