<vue-fab :icon-type="currentSource" :icon="mainIcon[currentSource]" mainBtnColor="#3eaf7c">
  <fab-item v-for="(item, idx) in menu[currentSource]" :idx="idx" :color="item.color" :title="item.title" :icon="item.icon" />
</vue-fab>

<script>
export default {
  data () {
    return {
      currentSource: 'iconfont',
      mainIcon: {
        iconfont: 'icon-jia',
        MaterialDesign: 'add'
      },
      menu: {
        MaterialDesign: [
          {
            icon: 'done',
            title: 'good job!',
            color: '#ff9900'
          },
          {
            icon: 'toc',
            title: '',
            color: '#999'
          }
        ],
        iconfont: [
          {
            icon: 'icon-Rxing',
            title: 'iconfont.cn',
            color: '#483218'
          },
          {
            icon: 'icon-huanyihuan1',
            title: '',
            color: '#c8d'
          },
          {
            icon: 'icon-fangda1',
            title: '',
            color: '#3DB'
          }
        ]
      }
    }
  },
  methods: {
    handleSource () {
      this.currentSource === 'iconfont' ? this.currentSource = 'MaterialDesign' : this.currentSource = 'iconfont'
    }
  }
}
</script>

# 支持iconfont

对于使用阿里巴巴iconfont作为图标库的项目，我们提供参数以配置支持

默认使用MaterialDesign的图标库

##### Vue-Fab在底层已抹平两者使用区别 引入后仅需使用icon属性传入即可


## options

| Option |  Type  | Params | Description |
| ------ | --------  | ------ | ----------  |
|  iconType  | String |'MaterialDesign'/'iconfont' |  根据您的使用习惯或开发依赖来决定使用哪种图标     |

<template>
  <button class="button" @click="handleSource">点击切换图标库来源</button>
</template>

当前图标库来源: {{currentSource}}


``` js
Vue.use(VueFab, /* {
  ----------------------
  // opitons 可选iconfont图标或MaterialIcons
  iconType: 'MaterialDesign'
  // iconType: 'iconfont'
} */)
```
