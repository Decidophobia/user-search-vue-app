<template>
  <div id="app">
    <v-app>
      <Search />
      <user-list />
      <v-spacer />
      <Pagination />
    </v-app>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import UserList from './components/UserList.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    Search,
    UserList,
    Pagination,
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
