<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    
    <div class="v-bind-demo">
    <input v-model="newItem" v-on:keyup.enter="addNew" type="" name="">
      <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    </div>
    <p>child tell me :{{childwords}}</p>
    <ComponentA msgfromfather="you die!" v-on:child-tell-me-something="listenToMyBoy"></ComponentA>
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/ComponentA'

export default {
/*  name: 'app'
  },*/
    data: function () {
    return {
      title: 'this is a todo list',
      items: [
        {
          label: 'coding',
          isFinished: false
        },
        {
          label: 'walking',
          isFinished: true
        }
      ],
      newItem: '', 
      childwords: ''
    }
  },
  components: {
    ComponentA
  },
  watch: {
    items: {
      handler: function (val, oldVal) {
        Store.save(items)
      },
      deep: true
    }
  },
  events: {
    'onAddnew': function (items) {
      console.log
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished;
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = '' 
      Store.save()
      this.$broadcast('onAddnew', this.items)
    },
    listenToMyBoy： function (msg) {
      this.childwords = msg;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
  margin-top: 60px;
}
.v-bind-demo{width: 200px;}
.finished{text-decoration: line-through;} 
</style>
