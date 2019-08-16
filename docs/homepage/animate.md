<ClientOnly>
<vue-fab 
  :fabAutoHideAnimateModel="fabAutoHideAnimateModel"
  :fabItemAnimate="fabItemAnimate">
  <fab-item v-for="idx in 4" :idx="idx - 1" />
</vue-fab>
</ClientOnly>

<script>
export default {
  data () {
    return {
      fabAutoHideAnimateModel: "default",
      fabItemAnimate: "default"
    }
  }
}
</script>

# 动画配置

VueFab提供多样的动画配置

## 滚动自动隐藏动画

<template>
<button @click="fabAutoHideAnimateModel === 'alive' ? fabAutoHideAnimateModel = 'default' : fabAutoHideAnimateModel = 'alive'" class="button">
  点我切换
</button>

当前模式 {{fabAutoHideAnimateModel}}

</template>

| Option |  Type  | Default | Params | Description |
| ------ | --------  | ------ | ----------  | ------ |
| fabAutoHideAnimateModel  | String | 'default'	 | 'default' / 'alive'	 | fab滚动触发自动隐藏动画 分为 'default' ( 缩小隐藏 ) 以及 'alive' (向下滚动隐藏) |

## FabItem展开动画

<template>
<button @click="fabItemAnimate === 'alive' ? fabItemAnimate = 'default' : fabItemAnimate = 'alive'" class="button">
  点我切换
</button>
</template>

当前模式 {{fabItemAnimate}}

| Option |  Type  | Default | Params | Description |
| ------ | --------  | ------ | ----------  | ------ |
| fabItemAnimate  | String | 'default'	 | 'default' / 'alive'	 | 打开关闭子菜单时过渡动画 分为 'default' (各自过渡) 'alive' (分裂过渡) |


我<br />
是<br />
占<br />
位<br />
符<br />
我<br />
是<br />
占<br />
位<br />
符<br />
我<br />
是<br />
占<br />
位<br />
符<br />
我<br />
是<br />
占<br />
位<br />
符<br />
我<br />
是<br />
占<br />
位<br />
符<br />
我<br />
是<br />
占<br />
位<br />
符<br />