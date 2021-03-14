<template>
  <div id="app">
    <div class="search-panel">
      <button
        @click="
          changeOrder();
          onSubmit();
        "
      >
        Order: {{ this.order }}
      </button>
      <br />
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
import { mapActions } from 'vuex';
import Search from './components/Search.vue';

// import UserList from './components/UserList'


export default {
  name: 'App',
  components: {
    Search
   
  },
  data() {
    return {
      inputValue: '',
      users: [],
      usersPrev: [],
      //search params
      sortType: 'repositories',
      order: 'desc',
      itemsPerPage: 10,
      pageNumber: 1,
    };
  },

  methods: {
    ...mapActions('users', ['fetchGetUsers']),
    async onSubmit() {
      this.users = await this.fetchGetUsers({
        name: this.inputValue,
        sortType: this.sortType,
        order: this.order,
        itemsPerPage: this.itemsPerPage,
        pageNumber: this.pageNumber,
      });

      this.usersPrev = this.users.map((user) => {
        return {
          login: user.login,
          id: user.id,
        };
      });
    },
    changeOrder() {
      this.order = this.order === 'desc' ? 'asc' : 'desc';
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
