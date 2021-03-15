<template>
  <div class="users-list">
    <div v-for="user in usersPrev" :key="user.id" class="users-list_item">
      <user-card :user="user" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserCard from './UserCard.vue';

export default {
  name: 'UserList',
  components: {
    UserCard,
  },

  computed: {
    ...mapGetters({
      usersPrev: 'users/getUsersPrev',
    }),
  },
};
</script>

<style scoped>
.users-list_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  margin-top: 36px;
}
.users-list_item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.6);
  transform: scale(1.02);
  border-radius: 8px;
}
</style>
