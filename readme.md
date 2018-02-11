# Vue Float Action Button


##### 一个漂亮的 float action button
***

# API


## Props

| Option |  type  |  default  | Description |
| ------ | ------ | --------  | ----------  |
|  icon  | String |  'add' |  未激活的icon     |
| activeIcon | String | 'add' | 激活后的icon |
|hidden| Boolean | true | 是否隐藏Fab |
|menu| Array | [{key: 'add', icon: 'add'}, {key: 'https', icon: 'https'}] | 菜单项 |
|delay|Number|.05| 菜单项淡入淡出的延迟差 为上一个菜单项加该延迟的延迟 |
|spacing| Number|45|每个菜单项的间距 单位 px|
|fabAnimateBezier | String | liner | 主按钮显示消失(hidden)的贝塞尔曲线 如填入贝塞尔曲线 直接填入'n,n,n,n'或'liner'  |
|z-index|Number|5|fab的层级|
|shadow | Boolean | true | 主button的阴影|

## Event

|    Name   |   Param   | Description |
| ----      | -------  | ----------- |
| clickItem | 'add' | 当点击菜单项时，会返回该菜单项的Key值 该值由用户自定义 |

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

***
## LICENSE
MIT