<template>
  <div class="main">
    <div class="btn btn-lg btn-block btn-sm btn-info" @click="isEdit = !isEdit">配置项</div>
    <transition name="fade">
    <div v-if="isEdit">
    <div class="form-group">
      <h6 for="mainIcon">主ICON (本组件所有ICON皆可从https://material.io/icons/中查找)</h6>
      <input v-model="icon" class="form-control" id="mainIcon">
    </div>
    <div class="form-group">
      <h6 for="mainIcon">主按钮颜色</h6>
      <input v-model="mainBtnColor" class="form-control" id="mainBtnColor">
    </div>
    <div class="form-group">
      <h6 for="spacing">子菜单间距</h6>
      <input v-model="spacing" class="form-control" id="spacing">
    </div>
    <div class="form-group">
      <h6 for="fabAnimateBezier">主按钮显示隐藏动画曲线(可根据http://cubic-bezier.com自由配置 注意如果为自定义曲线 只需填入n, n, n, n格式如.12,.6,.49,1.29即可</h6>
      <input v-model="fabAnimateBezier" class="form-control" id="fabAnimateBezier">
    </div>
    <div class="btn btn-lg btn-block btn-sm btn-info" @click="hidden = !hidden">是否隐藏: {{hidden}}</div>
    <br />
    <transition-group name="list-complete" tag="div">
      <form v-for="(item, idx) in menu" :key="idx" class="form-horizontal">
        <b style="margin-bottom: 15px" class="text-primary btn-block">子菜单{{idx}}
          <button type="button" @click="menu.splice(idx, 1)" class="btn btn-danger btn-xs pull-right">DELETE</button>
        </b>
        <div class="form-group" v-for="(value, key) in item">
          <h6 class="col-xs-2 col-lg-1 text-left">{{key}}</h6>
          <div class="col-xs-10 col-lg-11">
            <input v-model="item[key]" class="form-control" :placeholder="key">
          </div>
        </div>
      </form>
    </transition-group>
    <transition name="fade">
      <div v-show="isAddChildMenuBtn" class="btn btn-lg btn-block btn-sm btn-info" 
          @click="menu.push({
            key: '',
            icon: '',
            title: '',
            color: ''
          })">新增子菜单
      </div>
    </transition>
    <br />
    </div>
    </transition>
    <vue-fab 
      @clickItem="clickItem"
      @clickMainBtn="clickMainBtn"
      :icon="icon"
      :mainBtnColor="mainBtnColor"
      :spacing="spacing"
      :activeIcon="activeIcon"
      :fabAnimateBezier="fabAnimateBezier"
      :menu="menu"  />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hidden: false,
        icon: 'share',
        activeIcon: 'add',
        mainBtnColor: '#E64C3B',
        spacing: 45,
        fabAnimateBezier: 'ease',
        isEdit: false,
        isAddChildMenuBtn: true,
        addChildMenuTiming: null,
        menu: [
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
    watch: {
      "menu.length": function (val) {
        if (this.addChildMenuTiming) return
        this.isAddChildMenuBtn = false
        this.addChildMenuTiming = setTimeout(() => {
          this.isAddChildMenuBtn = true
          clearTimeout(this.addChildMenuTiming)
          this.addChildMenuTiming = null
        }, 1000)
      }
    },
    methods: {
      clickItem: function (params) {
        window.alert('idx: ' + params.idx + ' key: ' + params.key)
      },
      clickMainBtn: function () {
        window.alert('主菜单为空时点击主Fab会触发clickMainBtn事件')
      }
    },
    created () {

    }
  }
</script>

<style lang="less" scoped>
.main {
  padding: 15px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.list-complete-item {
  transition: all 1s;
  display: block;
  margin-right: 10px;
}
.list-complete-enter {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.form-horizontal {
  transition: all 1s;
  display: block;
  margin-right: 10px;
}
</style>