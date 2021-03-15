<template>
  <div id="app">
    <v-app>
      <Search />
      <user-list />
      <v-spacer />

      <v-btn
        @click="toTop"
        class="scroll-btn"
        large
        fixed
        absolute
        right
        bottom
        color="blue lighten-1"
        >UP</v-btn
      >
    </v-app>
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
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    },
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
.scroll-btn {
  margin-bottom: 30px;
  margin-right: 30px;
  text-align: center;
  font-size: 20px;
}
</style>
