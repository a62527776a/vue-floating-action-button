# Vue Floating Action Button


##### a beautiful Floating Action Button

![8.gif](http://upload-images.jianshu.io/upload_images/5738345-8348ec8f54f0d160.gif?imageMogr2/auto-orient/strip)

![7.gif](http://upload-images.jianshu.io/upload_images/5738345-a13b5b7b511f8484.gif?imageMogr2/auto-orient/strip)

[在线预览](http://htmlpreview.github.io/?https://github.com/a62527776a/vue-fab/blob/master/demo/dist/index.html)

[doc page](https://a62527776a.github.io/vue-fab/)


求职 有意者查看简历
https://github.com/a62527776a/jianli/blob/master/readme.md

***

## Features

* **支持多种动画**
* **支持自定义贝塞尔曲线**
* **动画流畅复刻Material Design**
* **支持滚动/手势自动显示/隐藏**
* **支持点击空白处自动隐藏**
* **支持自定义ICON**

## TODO List

* **支持子菜单标题hover click切换显示**

***

## 注意

* 由于safari浏览器的事件传递机制 window、document、body 不响应click事件**
  如若出现**点击空白区域无法自动关闭子菜单的情况** 请检查html高度是否100% 
  如果没有100% 请单独给html标签设置css属性 min-height: 100%
  项目对safari浏览器做了单独处理 在safari浏览器中将点击事件挂载在了HTML标签上，除iOS系统外的浏览器挂载在window上

## Installation and use

```
$ yarn add vue-float-action-button
$ npm install vue-float-action-button
```

```
import VueFab from 'vue-float-action-button'

Vue.use(VueFab, /* {
  // default global options
  spacing: 40, // 子菜单间距
  delay: 0.1 // 子菜单动画延迟
} */)
```

本组件使用了 Material Design 的图标 需要在网页中引入   

本组件所有ICON皆可从https://material.io/icons/中查找
```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
``` 


***

## Examples

注意 仅支持 [Material Icon](https://material.io/icons/)

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

**vue-fab API**

## Props

| Option |  Type  |  Default  | Params | Description |
| ------ | ------ | --------  | ------ | ----------  |
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

## Slot
| Option | Description |
| ------ | ----------- 
|  icon  | 用来放置自定义的icon 推荐使用iconfont |

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
| icon | String | 'add' | / | 子菜单项icon 仅支持[Material Icon](https://material.io/icons/)的icon |
| color | String | '#FFF' | / | 支持css颜色标准 默认为白色 不填写该值将自动拥有一个值为0px 2px 8px #666的阴影 |
| titleColor| String | #666 | / | 子菜单标题字体颜色 |
| titleBgColor | String | #FFF | / | 子菜单背景颜色 |

## Slot
| Option | Description |
| ------ | ----------- 
|  icon  | 用来放置自定义的icon 推荐使用iconfont |

## Event

|    Name   |   Param   | Description |
| ----      | -------   | ----------- |
| clickItem | {idx} | 当菜单项不为空且点击菜单项时，会返回该菜单项传入的idx值 |

## 

***
## LICENSE
MIT
