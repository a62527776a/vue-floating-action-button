<ClientOnly>
<vue-fab
  style="top: 170px"
  :unfoldDirection="unfoldDirectionType"
  :fabAutoHideAnimateModel="fabAutoHideAnimateModel"
  :fabItemAnimate="fabItemAnimate">
  <fab-item v-for="idx in 4" :idx="idx - 1" />
</vue-fab>
</ClientOnly>

<script>
export default {
  data () {
    return {
      unfoldDirectionType: "down",
      fabAutoHideAnimateModel: "default",
      fabItemAnimate: "default"
    }
  }
}
</script>

# 配置展开方向

VueFab提供多样的动画配置  

通过修改unfoldDirection参数 来改变向上或者向下展示  

<template>
<button @click="unfoldDirectionType === 'down' ? unfoldDirectionType = 'up' : unfoldDirectionType = 'down'" class="button">
  点我切换
</button>

当前模式 {{unfoldDirectionType}}

</template>

| Option |  Type  | Default | Params | Description |
| ------ | --------  | ------ | ----------  | ------ |
| unfoldDirection  | String | 'up'	 | 'down' / 'up' | 向上展开或者向下展开 |
