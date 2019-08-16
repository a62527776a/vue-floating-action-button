<ClientOnly>
<vue-fab 
  :autoHideDirection="autoHideDirection"
  :autoHideThreshold="autoHideThreshold">
</vue-fab>
</ClientOnly>

<script>
export default {
  data () {
    return {
      autoHideDirection: 'up',
      autoHideThreshold: 10
    }
  }
}
</script>

# 滚动配置

滚动相关的配置

## 控制自动隐藏的方向

默认是从下滚动上面隐藏
改成down为从上滚动到下面隐藏

<template>
<button class="button" @click="autoHideDirection === 'up' ? autoHideDirection = 'down' : autoHideDirection = 'up'">点我修改滚动自动隐藏的方向</button>
</template>

当前值 {{autoHideDirection}}

| Option |  Type  | Default | Params | Description |
| ------ | --------  | ------ | ----------  | ------ |
| autoHideDirection  | String | 'up' | 'up' / 'down' | 默认关闭 |


## 自动隐藏的阈值

滚动超过这个值才会触发自动隐藏

<template>
<input class="form-input" type="number" v-model="autoHideThreshold"></button>
</template>


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