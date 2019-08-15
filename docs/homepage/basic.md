<vue-fab :icon="icon">
</vue-fab>

<script>
export default {
  data () {
    return {
      icon: 'add'
    }
  }
}
</script>

# 基本使用

vue-fab 提供一系列自定义属性
## Vue-Fab

``` html
<vue-fab></vue-fab>
```

### options

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