<ClientOnly>
<vue-fab
  :mainBtnColor="mainBtnColor">
  <fab-item 
    v-for="(item, idx) in menu"
    :idx="idx"
    :title="item.title"
    :color="item.color"
    :icon="item.icon"
    @clickItem="clickItem" />
</vue-fab>
</ClientOnly>

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
        mainBtnColor: '#3eaf7c'
      }
    },
    methods: {
      clickItem: function (item) {
        window.alert(item.idx)
      }
    }
  }
</script>


# 介绍

vue-float-action-button是一个美观、动画流畅、自定义内容丰富的一个Vue FAB组件

<p align="center">
	<a href="https://www.npmjs.com/package/vue-float-action-button">
		<img src="https://img.shields.io/npm/dm/vue-float-action-button.svg" alt="Monthly downloads">
	</a>
	<img src="https://img.shields.io/badge/min+gzip-5.8_kB-blue.svg" alt="5.8 kB min+gzip">
  <a href="https://github.com/a62527776a/vue-floating-action-button/blob/master/LICENSE"><img
            src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License"></a>
  <a href="https://travis-ci.org/a62527776a/vue-floating-action-button">
    <img src="https://img.shields.io/travis/a62527776a/vue-floating-action-button.svg">
  </a>
  <a href='https://coveralls.io/github/a62527776a/vue-floating-action-button?branch=master'><img src='https://coveralls.io/repos/github/a62527776a/vue-floating-action-button/badge.svg?branch=master' alt='Coverage Status' /></a>
  <br>
  <a href="https://github.com/a62527776a/vue-floating-action-button/issues">
    <img src="https://img.shields.io/github/issues-closed-raw/a62527776a/vue-floating-action-button.svg" />
  </a>
  <a href="https://github.com/a62527776a/vue-floating-action-button">
    <img src="https://img.shields.io/github/stars/a62527776a/vue-floating-action-button.svg?style=social" />
  </a>
</p>


## Features

* **支持多种动画**
* **支持滚动/手势自动显示/隐藏**
* **支持Material Design ICON**
* **支持阿里巴巴iconfont.cn**
* **支持点击空白处自动隐藏**
* **动画流畅复刻Material Design**
* **0依赖 体积小 min + gzip打包后 仅5.8KB**

***

## Installation and use

``` sh
$ yarn add vue-float-action-button
$ npm install vue-float-action-button
```

``` js
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
``` html
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
``` html
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


``` html
<template>
<vue-fab
  :mainBtnColor="mainBtnColor">
  <fab-item 
    v-for="(item, idx) in menu"
    :idx="idx"
    :title="item.title"
    :color="item.color"
    :icon="item.icon"
    @clickItem="clickItem" />
</vue-fab>
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
        mainBtnColor: '#3eaf7c'
      }
    },
    methods: {
      clickItem: function (item) {
        window.alert(item.idx)
      }
    }
  }
</script>

```
