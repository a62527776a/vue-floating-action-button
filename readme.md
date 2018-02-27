# Vue Float Action Button


##### 一个漂亮的 float action button

![7.gif](http://upload-images.jianshu.io/upload_images/5738345-a13b5b7b511f8484.gif?imageMogr2/auto-orient/strip)

![6.gif](https://i.loli.net/2018/02/26/5a93e1fc49b77.gif)


[在线预览](http://htmlpreview.github.io/?https://github.com/a62527776a/vue-fab/blob/master/demo/dist/index.html)

[doc page](https://a62527776a.github.io/vue-fab/)


***

## Installation and use

```
$ yarn add vue-float-action-button
$ npm install vue-float-action-button
```

```
import VueFab from 'vue-float-action-button'

Vue.use(VueFab)
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
    :menu="menu"
    :mainBtnColor="mainBtnColor"
    @clickItem="clickItem"
    @clickMainBtn="clickMainBtn">
</template>

<script>
  export default {
    name: 'example',
    data () {
      return {
        menu: [
          {
            key: 'done',
            icon: 'done',
            title: 'good job!',
            color: '#ff9900'
          },
          {
            key: 'toc',
            icon: 'toc',
            title: '',
            color: '#999'
          }
        ],
        mainBtnColor: '#FF0099'
      }
    },
    methods: {
      clickItem: function (params) {
        console.log('idx: ' + params.idx + ' key: ' + params.key)
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


## Props

| Option |  Type  |  Default  | Params | Description |
| ------ | ------ | --------  | ------ | ----------  |
|  icon  | String |  'add' | / |  未激活的icon     |
| activeIcon | String | 'add' | / | 激活后的icon |
| size | String | 'Normal' | 'big' / 'normal' / 'small' | 主Fab的尺寸 子菜单会随之变化 |
|mainBtnColor|String|'#E64C3B'| / | 主按钮颜色|
|hidden| Boolean | true | true / false | 是否隐藏Fab |
|menu| Array | ``` [{key: 'add', icon: 'add', title: 'add', color: ''}, {key: 'https', icon: 'https', title: 'https', color: ''}] ``` | / | 菜单项 |
|delay|Number|.05| / | 菜单项淡入淡出的延迟差 为上一个菜单项加该延迟的延迟(单位 s) |
|spacing| Number|45 | / |每个菜单项的间距 单位 px|
|fabAnimateBezier | String | linear | 'ease' / 'linear' / 'ease-in' / 'ease-out' / 'ease-in-out' / '.18,.89,.91,.17' | 主按钮显示消失(hidden)的贝塞尔曲线 如填入贝塞尔曲线 直接填入'n,n,n,n'或'liner'  |
| z-index|Number|5 | / |fab的层级|
| shadow | Boolean | true | true / false | 主button的阴影|
| clickAutoClose| Boolean | true | true / false | 点击子菜单项后是否关闭菜单 |
| titleColor| String | #666 | / | 子菜单标题字体颜色 |
| titleBg | String | #FFF | / | 子菜单背景颜色 |
| scrollAutoHide | Boolean | true | true / false | 滚动是否触发自动隐藏 (PC端和Mobile端实现方式有所不同 分别根据scroll事件和touchmove事件实现) |
| autoHideThreshold | Number | 10 | / | 滚动触发自动隐藏的阈值 单位px |
| fabAutoHideAnimateModel | String | 'alive' | 'default' / 'alive' | fab滚动触发自动隐藏动画 分为 'default' ( 缩小隐藏 ) 以及 'alive' (向下滚动隐藏) |
| fabMenuAnimate | String | 'default' | 'default' / 'alive' | 打开关闭子菜单时过渡动画 分为 'default' (各自过渡) 'alive' (分裂过渡) |

## Event

|    Name   |   Param   | Description |
| ----      | -------   | ----------- |
| clickItem | {idx, key} | 当菜单项不为空且点击菜单项时，会返回该菜单项的下标以及Key值 key值由用户自定义 |
| clickMainBtn | / | 当菜单项为空时点击主fab 会触发该事件 |  

## Methods

| Name | Param | Type | Default | Description |
| ---- |   -------- | ------- | ------- | ----------- |
| onOffFab | True / False | Boolean | True | 显示或者隐藏Fab |



***
## LICENSE
MIT