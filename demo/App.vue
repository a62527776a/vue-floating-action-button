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
    <a href="https://a62527776a.github.io/vue-fab/" target="_blank" class="btn btn-lg btn-block btn-sm btn-info">Api文档</a>
    <div class="btn btn-lg btn-block btn-sm btn-info" v-for="(code, idx) in democode" @click="showCode(code)">实例代码{{idx}}</div>
    <textarea ref="textarea" value="" style="position: absolute; top: -500px" />
    <div style="position: relative" v-for="code in democode" v-show="code.isShow">
      <button type="button" @click="copyCode(code.output)" class="btn btn-info btn-xs copy-code-btn">拷贝代码</button>
      <pre v-html="code.code">
      </pre>
    </div>
    </transition>
    <vue-fab 
      :style="{ transform: democode[2].isShow ? 'translateY(-30px)' : ''}"
      ref="vuefab"
      @clickMainBtn="clickMainBtn"
      icon="share"
      :mainBtnColor="mainBtnColor"
      style="transition: all .5s cubic-bezier(.18,.89,.58,1.26)"
      size="big"
      :activeIcon="activeIcon"
      :fabAnimateBezier="fabAnimateBezier"
      :fabAutoHideAnimateModel="'alive'"
      fabItemAnimate="alive">
      <!--<i slot="icon" style="color: white" class="iconfont icon-guanbi2fill" />-->
      <fab-item
        v-for="(item, idx) in menu"
        :idx="idx"
        :spacing="spacing"
        :title="item.title"
        :color="item.color"
        :icon="item.icon">
        <i v-if="idx === 1" slot="icon" style="color: white" class="iconfont icon-guanbi2fill" />
      </fab-item>
    </vue-fab>
    <vue-fab fabItemAnimate="default" fabAliveAnimateBezier="ease" :style="{ transform: democode[1].isShow ? 'translateY(-30px)' : ''}" size="normal" fabAnimateBezier=".24,.97,.81,1.2" :mainBtnColor="'#3599DB'" style="right: 40%;transition: all .5s cubic-bezier(.18,.89,.58,1.26)">
      <fab-item @clickItem="clickItem" :idx="0" title="add" icon="add" />
      <fab-item @clickItem="clickItem" :idx="1" title="https" icon="https" />
      <fab-item @clickItem="clickItem" :idx="2" title="edit" icon="edit" />
    </vue-fab>
    <vue-fab :style="{ transform: democode[0].isShow ? 'translateY(-30px)' : ''}" size="small" :mainBtnColor="'#ff9900'" :icon="'navigate_next'" @clickMainBtn="clickMainBtn" :menu="[]" style="right: 60%;transition: all .5s cubic-bezier(.18,.89,.58,1.26)">
    </vue-fab>
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
            title: '',
            icon: '',
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
        ],
        democode: [
          {
            isShow: false,
            code: `
&lt;template&gt;
  &lt;vue-fab
  size="normal" 
  fabAnimateBezier=".24,.97,.81,1.2" 
  :mainBtnColor="'#3599DB'" 
  @clickMainBtn="clickMainBtn"
  :menu="[]"  
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: 'example',
    methods: {
      clickMainBtn: function () {
        window.alert('主菜单为空时点击主Fab会触发clickMainBtn事件')
      },
    }
  }
&lt;/script&gt;
            `,
            output: `
<vue-fab
  size="normal" 
  fabAnimateBezier=".24,.97,.81,1.2" 
  :mainBtnColor="'#3599DB'" 
  @clickMainBtn="clickMainBtn"
  :menu="[]"
  />
methods: {
  clickMainBtn: function () {
    window.alert('主菜单为空时点击主Fab会触发clickMainBtn事件')
  },
}

            `
          },
          {
            isShow: false,
            code: `
&lt;template&gt;
  &lt;vue-fab
  size="small" 
  mainBtnColor="#ff9900" 
  icon="navigate_next" 
  @clickMainBtn="clickMainBtn" 
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: 'example',
    data () {
      return {
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
  }
&lt;/script&gt;
            `,
            output: `
<vue-fab 
  size="small" 
  mainBtnColor="#ff9900" 
  icon="navigate_next" 
  />
data () {
  return {
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
            `
          },
          {
            isShow: false,
            code: `
&lt;template&gt;
  &lt;vue-fab
    ref="vuefab"
    @clickItem="clickItem"
    @clickMainBtn="clickMainBtn"
    :icon="icon"
    :mainBtnColor="mainBtnColor"
    :spacing="spacing" 
    size="big"
    fabMenuAnimate="alive"
    :activeIcon="activeIcon"
    :fabAnimateBezier="fabAnimateBezier"
    fabAutoHideAnimateModel="alive"
    :menu="menu" /&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    name: 'example',
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
    },
    methods: {
      clickItem: function (params) {
        console.log('idx: ' + params.idx)
      }
      clickMainBtn: function () {
        console.log('clickMainBtn')
      }
    }
  }
&lt;/script&gt;
            `,
            output: `
<vue-fab 
  @clickMainBtn="clickMainBtn"
  :icon="icon"
  :mainBtnColor="mainBtnColor"
  size="big"
  :activeIcon="activeIcon"
  :fabAnimateBezier="fabAnimateBezier"
  fabAutoHideAnimateModel="alive"
  fabItemAnimate="alive"
  >
  <fab-item
    v-for="(item, idx) in menu"
    :color="item.color"
    :icon="item.icon"
    :idx="idx"
    :spacing="spacing"
    @clickItem="clickItem"
     />
</vue-fab>
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
},
methods: {
  clickItem: function (params) {
    console.log('idx: ' + params.idx)
  }
  clickMainBtn: function () {
    console.log('clickMainBtn')
  }
}
            `
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
        window.alert('idx: ' + params.idx)
      },
      clickMainBtn: function () {
        window.alert('主菜单为空时点击主Fab会触发clickMainBtn事件')
      },
      hidenFab: function () {
        this.$refs.vuefab.onOffFab(false)
      },
      copyCode: function (code) {
        this.$refs.textarea.value = code
        this.$refs.textarea.select()
        document.execCommand('Copy')
        this.$refs.textarea.value = ''
        window.alert('复制成功')
      },
      showCode: function (item) {
        if (item.isShow) {
          item.isShow = false
          return
        }
        this.democode.forEach((item) => {
          item.isShow = false
        })
        item.isShow = !item.isShow
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
.copy-code-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
