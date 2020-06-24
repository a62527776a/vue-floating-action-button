<ClientOnly>
<vue-fab icon="add" size="normal" >
  <fab-item @clickItem="clickItem" :idx="0" icon="edit">
  </fab-item>
  <fab-item @clickItem="clickItem" :idx="1" icon="edit">
    <img src="http://ued.rr.tv/hqdefault (20).jpg" style="width: 100%;height: 100%;border-radius: 50%" />
  </fab-item>
  <fab-item @clickItem="clickItem" :idx="2" icon="edit">
    <img src="http://ued.rr.tv/hqdefault (4).jpg"  style="width: 100%;height: 100%;border-radius: 50%" />
  </fab-item>
  <fab-item @clickItem="clickItem" :idx="3" title="自定义图标，得自己配置好border-radius以及width,height" icon="edit">
    <img src="http://ued.rr.tv/0.96058651790303660.png"  style="width: 100%;height: 100%;border-radius: 50%" />
  </fab-item>
</vue-fab>
</ClientOnly>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

# 使用slot自定义图片

VueItem提供slot已供配置图片自定义图标  
需要自己配置好slot元素的宽高以及border-radius！！


``` vue
<vue-fab icon="add" size="normal" >
  <fab-item @clickItem="clickItem" :idx="0" icon="edit">
  </fab-item>
  <fab-item @clickItem="clickItem" :idx="1" icon="edit">
    <img src="http://ued.rr.tv/hqdefault (20).jpg" style="width: 100%;height: 100%;border-radius: 50%" />
  </fab-item>
  <fab-item @clickItem="clickItem" :idx="2" icon="edit">
    <img src="http://ued.rr.tv/hqdefault (4).jpg"  style="width: 100%;height: 100%;border-radius: 50%" />
  </fab-item>
  <fab-item @clickItem="clickItem" :idx="3" title="自定义图标，得自己配置好border-radius以及width,height" icon="edit">
    <img src="http://ued.rr.tv/0.96058651790303660.png"  style="width: 100%;height: 100%;border-radius: 50%" />
  </fab-item>
</vue-fab>

```