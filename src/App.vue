<template>
  <div id="app">
    <h1>Поиск пользователей GitHub</h1>
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
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
