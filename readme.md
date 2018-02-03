# Vue Fab

***

# API

## Props

| Option |  type  |  default  | Description |
| ------ | ------ | --------  | ----------  |
|  icon  | String |  add |  未激活的icon     |
| activeIcon | String | add | 激活后的icon |
| fabClass | Object | —— | float action button 的样式 |
|hidden| Boolean | true | 是否隐藏Fab |
|menu| Array | [{key: 'add', icon: 'add'}, {key: 'https', icon: 'https'}] | 菜单项 |

## Event

|    Name   |   Param   | Description |
| ----      | -------  | ----------- |
| clickItem | 'add' | 当点击菜单项时，会返回该菜单项的Key值 该值由用户自定义 |

***