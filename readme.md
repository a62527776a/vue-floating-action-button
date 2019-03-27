# Vue Floating Action Button

##### a beautiful Floating Action Button 
##### 支持iconfont以及material icons
<p align="center">
	<a href="https://www.npmjs.com/package/vue-float-action-button">
		<img src="https://img.shields.io/npm/dm/vue-float-action-button.svg" alt="Monthly downloads">
	</a>
	<a href="https://www.npmjs.com/package/vue-float-action-button">
		<img src="https://img.shields.io/npm/v/vue-float-action-button.svg" alt="Version">
	</a>
	<img src="https://img.shields.io/badge/min+gzip-5.8_kB-blue.svg" alt="5.8 kB min+gzip">
  <a href="https://github.com/a62527776a/vue-floating-action-button/blob/master/LICENSE"><img
            src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License"></a>
  <br>
</p>

![8.gif](http://upload-images.jianshu.io/upload_images/5738345-8348ec8f54f0d160.gif?imageMogr2/auto-orient/strip)

![7.gif](http://upload-images.jianshu.io/upload_images/5738345-a13b5b7b511f8484.gif?imageMogr2/auto-orient/strip)

**[English Doc](https://github.com/a62527776a/vue-floating-action-button/blob/master/readme.en.md)**

**[live demo](http://htmlpreview.github.io/?https://github.com/a62527776a/vue-floating-action-button/blob/master/demo/dist/index.html)**

**[demo代码](https://github.com/a62527776a/vue-floating-action-button/blob/master/demo/App.vue)**

***

## Features

* **支持多种动画**
* **支持滚动/手势自动显示/隐藏**
* **支持Material Design ICON**
* **支持阿里巴巴iconfont.cn**
* **支持点击空白处自动隐藏**
* **动画流畅复刻Material Design**

***

## Installation and use

```
$ yarn add vue-float-action-button
$ npm install vue-float-action-button
```

```
import App from './App.vue'
import VueFab from 'vue-float-action-button'
import Vue from 'vue'

Vue.use(VueFab, /* {
  ----------------------
  // opitons 可选iconfont图标或MaterialIcons
  iconType: 'MaterialDesign'
  // iconType: 'iconfont'
} */)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

本组件支持两种图标 
一种为 Material Design 的图标 需要在网页中引入
```
// index.html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

// App.vue
<vue-fab mainBtnColor="#3599DB">
  <fab-item @clickItem="clickItem" :idx="0" title="add" icon="add" />
  <fab-item @clickItem="clickItem" :idx="1" title="https" icon="https" />
  <fab-item @clickItem="clickItem" :idx="2" title="edit" icon="edit" />
</vue-fab>

``` 
所有ICON皆可从 https://material.io/icons/ 中查找

如使用**阿里巴巴矢量图标库** https://www.iconfont.cn 则按提示引入
```
<vue-fab icon="icon-jia" 
  fabItemAnimate="default" 
  mainBtnColor="#16C2C2">
  <fab-item @clickItem="clickBABA" icon="icon-Rxing" :idx="0" title="iconfont.cn">
  </fab-item>
  <fab-item @clickItem="clickBABA" icon="icon-huanyihuan1" :idx="1" title="交换">
  </fab-item>
  <fab-item @clickItem="clickBABA" icon="icon-fangda1" :idx="2" title="聚焦">
  </fab-item>
</vue-fab>
```

#### Vue-Fab在底层已抹平两者使用区别 引入后仅需使用icon属性传入即可


***

## Examples


```
<template>
  <vue-fab
    :mainBtnColor="mainBtnColor"
    @clickMainBtn="clickMainBtn">
    <fab-item 
      v-for="(item, idx) in menu"
      :idx="idx"
      :title="item.title"
      :color="item.color"
      :icon="item.icon"
      @clickItem="clickItem" />
</template>

<script>
  export default {
    name: 'example',
    data () {
      return {
        menu: [
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
        mainBtnColor: '#FF0099'
      }
    },
    methods: {
      clickItem: function (idx) {
        console.log('idx: ' + idx)
      }
      clickMainBtn: function () {
        console.log('clickMainBtn')
      }
    }
  }
</script>

```

***

# API

## options

| Option |  Type  | Params | Description |
| ------ | --------  | ------ | ----------  |
|  iconType  | String |'MaterialDesign'/'iconfont' |  根据您的使用习惯或开发依赖来决定使用哪种图标     |

```
Vue.use(VueFab, /* {
  ----------------------
  // opitons 可选iconfont图标或MaterialIcons
  iconType: 'MaterialDesign'
  // iconType: 'iconfont'
} */)
```

**vue-fab API**

## Props

| Option |  Type  |  Default  | Params | Description |
| ------ | ------ | --------  | ------ | ----------  |
|  iconType  | String |  'MaterialDesign' | 'MaterialDesign'/'iconfont' |  根据您的使用习惯或开发依赖来决定使用哪种图标     |
|  icon  | String |  'add' | / |  未激活的icon     |
| activeIcon | String | 'add' | / | 激活后的icon |
| size | String | 'Normal' | 'big' / 'normal' / 'small' | 主Fab的尺寸 子菜单会随之变化 |
|mainBtnColor|String|'#E64C3B'| / | 主按钮颜色|
|hidden| Boolean | true | true / false | 是否隐藏Fab |
|fabAnimateBezier | String | linear | 'ease' / 'linear' / 'ease-in' / 'ease-out' / 'ease-in-out' / '.18,.89,.91,.17' | 主按钮显示消失(hidden)的贝塞尔曲线 如填入贝塞尔曲线 直接填入'n,n,n,n'或'liner'  |
| z-index|Number|5 | / |fab的层级|
| shadow | Boolean | true | true / false | 主button的阴影|
| clickAutoClose| Boolean | true | true / false | 点击子菜单项后是否关闭菜单 |
| scrollAutoHide | Boolean | true | true / false | 滚动是否触发自动隐藏 (PC端和Mobile端实现方式有所不同 分别根据scroll事件和touchmove事件实现) |
| autoHideThreshold | Number | 10 | / | 滚动触发自动隐藏的阈值 单位px |
| fabAutoHideAnimateModel | String | 'alive' | 'default' / 'alive' | fab滚动触发自动隐藏动画 分为 'default' ( 缩小隐藏 ) 以及 'alive' (向下滚动隐藏) |
| fabItemAnimate | String | 'default' | 'default' / 'alive' | 打开关闭子菜单时过渡动画 分为 'default' (各自过渡) 'alive' (分裂过渡) |
| fabAliveAnimateBezier | String' | '.16,1.01,.61,1.2' | 'ease' / 'linear' / 'ease-in' / 'ease-out' / 'ease-in-out' / '.18,.89,.91,.17' | 子菜单列表在alive动画模式下的贝塞尔曲线 注：仅fabMenuAnimate为alive时生效 |
| globalOptions | Object | {spacing: 40, delay: 0.05} | / | 每个fab-item的动画延迟和间距 |
* **delay**: 菜单项淡入淡出的延迟差 为上一个菜单项加该延迟的延迟(单位 s) (fabItemAnimate为alive情况下该值会自动 除以 3)
* **spacing** 每个菜单项的间距 单位 px

## Methods

| Name | Param | Type | Default | Description |
| ---- |   -------- | ------- | ------- | ----------- |
| onOffFab | True / False | Boolean | True | 显示或者隐藏Fab |

**fab-item API**

## Props

| Option |  Type  |  Default  | Params | Description |
| ------ | ------ | --------  | ------ | ----------  |
| idx | Number | 0 | / | 下标 决定了位置以及clickItem事件返回的值(必须) |
| title | String | '' | / | 菜单项标题 如果不填 将不显示title框 |
| icon | String | 'add' | / | Submenu item icon Supports [Material Icon] (https://material.io/icons/) and [iconfont](https://www.iconfont.cn/) icon |
| color | String | '#FFF' | / | 支持css颜色标准 默认为白色 不填写该值将自动拥有一个值为0px 2px 8px #666的阴影 |
| titleColor| String | #666 | / | 子菜单标题字体颜色 |
| titleBgColor | String | #FFF | / | 子菜单背景颜色 |

## Event

|    Name   |   Param   | Description |
| ----      | -------   | ----------- |
| clickItem | {idx} | 当菜单项不为空且点击菜单项时，会返回该菜单项传入的idx值 |

## 


## 注意

* 由于safari浏览器的事件传递机制 window、document、body 不响应click事件**
  如若出现**点击空白区域无法自动关闭子菜单的情况** 请检查html高度是否100% 
  如果没有100% 请单独给html标签设置css属性 min-height: 100%
  项目对safari浏览器做了单独处理 在safari浏览器中将点击事件挂载在了HTML标签上，除iOS系统外的浏览器挂载在window上

***
## LICENSE
MIT
