<vue-fab mainBtnColor="#3eaf7c">
  <fab-item @clickItem="clickItem" :idx="0" color="#ff9900" title="good job!" icon="done" />
  <fab-item @clickItem="clickItem" color="#999" :idx="1" icon="toc" />
</vue-fab>

<script>
export default {
  data () {
    return {
      currentSource: 'iconfont'
      MaterialDesign: [
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
      iconfont: [

      ]
    }
  },
  methods: {
    clickItem (item) {
      window.alert(item.idx)
    }
  }
}
</script>

# 支持iconfont

对于使用阿里巴巴iconfont作为图标库的项目，我们提供参数以配置支持

## options

| Option |  Type  | Params | Description |
| ------ | --------  | ------ | ----------  |
|  iconType  | String |'MaterialDesign'/'iconfont' |  根据您的使用习惯或开发依赖来决定使用哪种图标     |

<button class="button">点击切换图标库来源</button>

``` js
Vue.use(VueFab, /* {
  ----------------------
  // opitons 可选iconfont图标或MaterialIcons
  iconType: 'MaterialDesign'
  // iconType: 'iconfont'
} */)
```
