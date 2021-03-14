<template>
  <div id="app">
    <Search/>
    <user-list/>
    </div>
  </div>
</template>

<script>

import Search from './components/Search.vue';
import UserList from './components/UserList.vue';

export default {
  name: 'App',
  components: {
    Search,
    UserList,
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 600px;
  margin: 0 auto;
}
</style>
