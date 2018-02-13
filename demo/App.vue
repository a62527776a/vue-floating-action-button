<template>
  <div>
    <button @click="hidden = !hidden">hidden: {{hidden}}</button> <br />
    icon: <input v-model="icon" /> <br />
    activeIcon: <input v-model="activeIcon" /> <br />
    <hr />
    menu:
    <p v-for="(item, idx) in menu">
      key<input v-model="item.key" /> <br />
      icon<input v-model="item.icon" /> <br />
      title<input v-model="item.title" /> <br />
      <button @click="menu.splice(idx, 1)">删除</button>
    </p>
    <button @click="menu.push({key: '', icon: '', title: 'default'})">新增</button>
    <vue-fab 
      :hidden="!hidden"
      :icon="icon"
      :activeIcon="activeIcon"
      :menu="menu"  />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hidden: false,
        icon: 'https',
        activeIcon: 'add',
        menu: [
          {
            key: 'add',
            icon: 'add',
            title: 'add'
          },
          {
            key: 'https',
            icon: 'https',
            title: 'https'
          }
        ]
      }
    },
    created () {

    }
  }
</script>