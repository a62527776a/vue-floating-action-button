<template>
  <div class="main">
    <div class="form-group">
      <h6 for="mainIcon">主ICON</h6>
      <input v-model="icon" class="form-control" id="mainIcon">
    </div>
    <div class="form-group">
      <h6 for="mainIcon">主按钮颜色</h6>
      <input v-model="mainBtnColor" class="form-control" id="mainBtnColor">
    </div>
    <div class="form-group">
      <h6 for="spacing">子菜单间距</h6>
      <input v-model="spacing" class="form-control" id="spacing">
    </div>
    <div class="form-group">
      <h6 for="fabAnimateBezier">主按钮显示隐藏动画曲线</h6>
      <input v-model="fabAnimateBezier" class="form-control" id="fabAnimateBezier">
    </div>
    <div class="btn btn-lg btn-block btn-sm btn-info" @click="hidden = !hidden">是否隐藏: {{hidden}}</div> <br />
    <form v-for="(item, idx) in menu" class="form-horizontal">
      <label for="inputEmail3" class="control-label btn-block">子菜单{{idx}}
        <button type="button" @click="menu.splice(idx, 1)" class="btn btn-danger btn-xs pull-right">DELETE</button>
      </label>
      <div class="form-group" v-for="(value, key) in item">
        <h6 for="inputEmail3" class="col-xs-2 control-label">{{key}}</h6>
        <div class="col-xs-10">
          <input v-model="item[key]" class="form-control" id="inputEmail3" :placeholder="key">
        </div>
      </div>
    </form>
    <div class="btn btn-lg btn-block btn-sm btn-info" 
         @click="menu.push({
           key: '',
           icon: '',
           title: '',
           color: ''
         })">新增子菜单</div> <br />
    <vue-fab 
      @clickItem="clickItem"
      :hidden="!hidden"
      :icon="icon"
      :mainBtnColor="mainBtnColor"
      :spacing="spacing"
      :activeIcon="activeIcon"
      :fabAnimateBezier="fabAnimateBezier"
      :menu="menu"  />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hidden: false,
        icon: 'share',
        activeIcon: 'add',
        mainBtnColor: '#E64C3B',
        spacing: 45,
        fabAnimateBezier: 'liner',
        menu: [
          {
            key: 'add',
            icon: 'add',
            title: 'add',
            color: '#3599DB'
          },
          {
            key: 'https',
            icon: 'https',
            title: 'https',
            color: '#9B5BB6'
          }
        ]
      }
    },
    methods: {
      clickItem: function (params) {
        // window.alert('idx: ' + params.idx + ' key: ' + params.key)
      }
    },
    created () {

    }
  }
</script>

<style lang="less" scoped>
.main {
  padding: 15px;
}
</style>