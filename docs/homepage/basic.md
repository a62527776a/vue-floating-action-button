<ClientOnly>
<vue-fab :mainBtnColor="mainBtnColor" :zIndex="zIndex" :icon="icon" :size="size" :activeIcon="activeIcon">
  <fab-item :idx="0" @clickItem="clickItem" />
  <fab-item 
    :idx="fabItem.idx" 
    :title="fabItem.title" 
    :icon="fabItem.icon" 
    @clickItem="clickItem"
    :color="fabItem.color" 
    :titleColor="fabItem.titleColor" 
    :titleBgColor="fabItem.titleBgColor" />
</vue-fab>
</ClientOnly>

<script>
export default {
  data () {
    return {
      icon: 'add',
      activeIcon: 'add',
      size: 'normal',
      mainBtnColor: '#E64C3B',
      zIndex: 5,
      fabItem: {
        idx: 1,
        title: '这是一个演示的标题',
        icon: 'toc',
        color: '#C7D23B',
        titleColor: '#666',
        titleBgColor: '#FFF'
      }
    }
  },
  methods: {
    clickItem (item) {
      window.alert(item.idx)
    }
  }
}
</script>

# 基本使用

vue-fab 提供一系列自定义属性
## VueFab

``` html
<vue-fab 
  :mainBtnColor="mainBtnColor" 
  :zIndex="zIndex" 
  :icon="icon" 
  :size="size" 
  :activeIcon="activeIcon">
  <fab-item 
    @clickItem="clickItem"
    :idx="fabItem.idx" 
    :title="fabItem.title" 
    :icon="fabItem.icon" 
    :color="fabItem.color" 
    :titleColor="fabItem.titleColor" 
    :titleBgColor="fabItem.titleBgColor" />
</vue-fab>
<script>
export default {
  data () {
    return {
      icon: 'add',
      activeIcon: 'add',
      size: 'normal',
      mainBtnColor: '#E64C3B',
      zIndex: 5,
      fabItem: {
        idx: 1,
        title: '这是一个演示的标题',
        icon: 'toc',
        color: '#C7D23B',
        titleColor: '#666',
        titleBgColor: '#FFF'
      }
    }
  },
  methods: {
    clickItem (item) {
      window.alert(item.idx)
    }
  }
}
</script>
```

### Props

| Option |  Type  |  Default  | Params | Description |
| ------ | ------ | --------  | ------ | ----------  |
|  icon  | String |  'add' | / |  未激活的icon （如果用alibaba iconfont则必填）    |
| activeIcon | String | 'add' | / | 激活后的icon |
| size | String | 'Normal' | 'big' / 'normal' / 'small' | 主Fab的尺寸 子菜单会随之变化 |
|mainBtnColor|String|'#E64C3B'| / | 主按钮颜色|
| z-index|Number|5 | / |fab的层级|

### icon

没有展开的vue-fab展示的图标

<template>
  <input class="form-input" v-model="icon">
</template>

### activeIcon

展开之后的vue-fab展示的图标

<template>
  <input class="form-input" v-model="activeIcon">
</template>

### size

展开之后的vue-fab展示的图标

<template>
  <div>
    <label>小<input type="radio" v-model="size" value="small" ></label>
    <label>中<input type="radio" v-model="size" value="normal"></label>
    <label>大<input type="radio" v-model="size" value="big"></label>
  </div>
</template>

### mainBtnColor

主按钮的颜色

<template>
  <div>
    <input type="color" v-model="mainBtnColor">
  </div>
</template>

### z-index

z-index

<template>
  <div>
    <input class="form-input" type="number" v-model="zIndex">
  </div>
</template>

## FabItem

### Props

| Option |  Type  |  Default  | Params | Description |
| ------ | ------ | --------  | ------ | ----------  |
| idx | Number | 0 | / | 下标 决定了位置以及clickItem事件返回的值(必须) |
| title | String | '' | / | 菜单项标题 如果不填 将不显示title框 |
| icon | String | 'add' | / | Submenu item icon Supports [Material Icon] (https://material.io/icons/) and [iconfont](https://www.iconfont.cn/) icon |
| color | String | '#FFF' | / | 支持css颜色标准 默认为白色 不填写该值将自动拥有一个值为0px 2px 8px #666的阴影 |
| titleColor| String | #666 | / | 子菜单标题字体颜色 |
| titleBgColor | String | #FFF | / | 子菜单背景颜色 |


### idx

必填项 影响UI以及后续一些返回值

<template>
<input type="number" v-model="fabItem.idx" class="form-input">
</template>

### title

作为该fabItem的标题
默认为空

<template>
  <input v-model="fabItem.title" class="form-input">
</template>

### icon

作为该fabItem的图标

<template>
  <input v-model="fabItem.icon" class="form-input">
</template>

### color
子按钮的颜色

<template>
  <div>
    <input type="color" v-model="fabItem.color">
  </div>
</template>


### titleColor

标题的颜色

<template>
  <div>
    <input type="color" v-model="fabItem.titleColor">
  </div>
</template>

### titleBgColor

标题栏的背景颜色

<template>
  <div>
    <input type="color" v-model="fabItem.titleBgColor">
  </div>
</template>

## FabItem Event

### clickItem

点击子菜单时将触发clickItem事件，

|    Name |  type |   Param   | Description |
| ----    |  ---  | -------   | ----------- |
| clickItem | Object | { idx } | 当菜单项不为空且点击菜单项时，会返回该菜单项传入的idx值 |

``` html

<template>
  <vue-fab>
    <fab-item @clickItem="clickItem" />
  </vue-fab>
</template>

<script>
export default {
  methods: {
    clickItem (item) {
      window.alert(item.idx)
    }
  }
}
</script>

```

