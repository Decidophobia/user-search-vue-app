<template>
  <div id="app">
    <div class="search-panel">
      <input type="text" @keydown.enter="onSubmit()" v-model="inputValue" />
      <div class="users-list">
        <div v-for="user in usersPrev" :key="user.id" class="users-list-_item">
          {{ user.login }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import Search from './components/Search'
// import UserList from './components/UserList'

export default {
  name: 'App',
  components: {
    // Search,
    // UserList,
  },
  data() {
    return {
      inputValue: '',
      users: [],
      usersPrev: [],
    };
  },

  methods: {
    ...mapActions('users', ['fetchGetUsers']),
    async onSubmit() {
      this.users = await this.fetchGetUsers(this.inputValue);
      this.usersPrev = this.users.map((user) => {
        return {
          login: user.login,
          id: user.id,
        };
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
