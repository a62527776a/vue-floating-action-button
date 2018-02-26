# Vue Float Action Button


##### 一个漂亮的 float action button

![支持自定义二级菜单样式.gif](http://upload-images.jianshu.io/upload_images/5738345-b9c4a94efee18577.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![支持自定义二级菜单标题.gif](http://upload-images.jianshu.io/upload_images/5738345-757bf24e27c84b8f.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![支持自定义贝塞尔曲线动画.gif](http://upload-images.jianshu.io/upload_images/5738345-963113e1b2d33fa2.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![支持滚动自动隐藏.gif](http://upload-images.jianshu.io/upload_images/5738345-77255a56352ea2f8.gif?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


[在线预览](http://htmlpreview.github.io/?https://github.com/a62527776a/vue-fab/blob/master/demo/dist/index.html)

[doc page](https://a62527776a.github.io/vue-fab/)

***

# API


## Props

| Option |  type  |  default  | Description |
| ------ | ------ | --------  | ----------  |
|  icon  | String |  'add' |  未激活的icon     |
| activeIcon | String | 'add' | 激活后的icon |
|mainBtnColor|String|'#E64C3B'| 主按钮颜色|
|hidden| Boolean | true | 是否隐藏Fab |
|menu| Array | ``` [{key: 'add', icon: 'add', title: 'add', color: ''}, {key: 'https', icon: 'https', title: 'https', color: ''}] ``` | 菜单项 |
|delay|Number|.05| 菜单项淡入淡出的延迟差 为上一个菜单项加该延迟的延迟 |
|spacing| Number|45|每个菜单项的间距 单位 px|
|fabAnimateBezier | String | liner | 主按钮显示消失(hidden)的贝塞尔曲线 如填入贝塞尔曲线 直接填入'n,n,n,n'或'liner'  |
| z-index|Number|5|fab的层级|
| shadow | Boolean | true | 主button的阴影|
| clickAutoClose| Boolean | true | 点击子菜单项后是否关闭菜单 |
| titleColor| String | #666 | 子菜单标题字体颜色 |
| titleBg | String | #FFF | 子菜单背景颜色 |
| scrollAutoHide | Boolean | true | 滚动是否触发自动隐藏 (PC端和Mobile端实现方式有所不同 分别根据scroll事件和touchmove事件实现) |
| autoHideThreshold | Number | 10 | 滚动触发自动隐藏的阈值 单位px |
| fabAutoHideAnimateModel | String | 'alive' | fab滚动触发自动隐藏动画 分为 'default' ( 缩小隐藏 ) 以及 'alive' (向下滚动隐藏) |


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
## LICENSE
MIT