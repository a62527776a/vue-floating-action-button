<template>
  <div class="main">
    <svg style="margin-bottom: 50px" height="120px" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" version="1.1">
      <text stroke-dasharray="2000" stroke-dashoffset="-200" opacity="0" x="0" y="50"  fill="rgb(255, 153, 0)" stroke="rgb(255, 153, 0)" stroke-width="1" font-size="55" transform="">F
        <animate fill="freeze" attributeName="opacity" values="0; 1" begin="0s" dur="3s" repeatCount="1" /> 
        <animate fill="freeze" attributeName="stroke-dashoffset" values="-200; 0" begin="1s" dur="3s" repeatCount="1" />      
        <animate fill="freeze" attributeName="stroke-dasharray" values="2000; 0" begin="1s" dur="3s" repeatCount="1" />      
      </text>
      <text stroke-dasharray="2000" stroke-dashoffset="-200" opacity="0" x="35" y="50" fill="rgb(53, 153, 219)" stroke="rgb(53, 153, 219)" stroke-width="1" font-size="55" transform="">A
        <animate fill="freeze" attributeName="opacity" values="0; 1" begin="0s" dur="3s" repeatCount="1" /> 
        <animate fill="freeze" attributeName="stroke-dashoffset" values="-200; 0" begin="1s" dur="3s" repeatCount="1" />
        <animate fill="freeze" attributeName="stroke-dasharray" values="2000; 0" begin="1s" dur="3s" repeatCount="1" />
      </text>
      <text stroke-dasharray="2000" stroke-dashoffset="-200" opacity="0" x="75" y="50" fill="rgb(230, 76, 59)" stroke="rgb(230, 76, 59)" stroke-width="1" font-size="55" transform="">B
        <animate fill="freeze" attributeName="opacity" values="0; 1" begin="0s" dur="3s" repeatCount="1" /> 
        <animate fill="freeze" attributeName="stroke-dashoffset" values="-200; 0" begin="1s" dur="3s" repeatCount="1" />
        <animate fill="freeze" attributeName="stroke-dasharray" values="2000; 0" begin="1s" dur="3s" repeatCount="1" />
      </text>
    </svg>
    <a href="https://github.com/a62527776a/vue-fab" target="_blank" class="btn btn-lg btn-block btn-sm btn-info">View on GitHub</a>
    <div class="btn btn-lg btn-block btn-sm btn-info" @click="isEdit = !isEdit">配置项</div>
    <p style="margin-top: 55px;padding: 2px;text-align: center">向下来回滑动查看自动隐藏演示</p>
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
    <div class="btn btn-lg btn-block btn-sm btn-info" @click="hidenFab">隐藏Fab</div>
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
    <div v-else style="height: 1500px"></div>
    </transition>
    <vue-fab 
      ref="vuefab"
      @clickItem="clickItem"
      @clickMainBtn="clickMainBtn"
      :icon="icon"
      :mainBtnColor="mainBtnColor"
      :spacing="spacing" 
      size="big"
      :activeIcon="activeIcon"
      :fabAnimateBezier="fabAnimateBezier"
      :fabAutoHideAnimateModel="'alive'"
      :menu="menu"  />
    <vue-fab size="normal" v-show="!isEdit" fabAnimateBezier=".24,.97,.81,1.2" :mainBtnColor="'#3599DB'" style="right: 40%"  />
    <vue-fab size="small" v-show="!isEdit" :mainBtnColor="'#ff9900'" :icon="'navigate_next'" @clickMainBtn="clickMainBtn" :menu="[]" style="right: 70%"  />
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
        spacing: 50,
        fabAnimateBezier: 'ease-out',
        isEdit: false,
        isAddChildMenuBtn: true,
        addChildMenuTiming: null,
        menu: [
          {
            key: 'done',
            icon: 'done',
            title: '',
            color: '#ff9900'
          },
          {
            key: 'toc',
            icon: 'toc',
            title: '',
            color: '#999'
          },
          {
            key: 'home',
            icon: 'home',
            title: ''
          },
          {
            key: 'create',
            icon: 'create',
            title: '',
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
      },
      hidenFab: function () {
        this.$refs.vuefab.onOffFab(false)
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