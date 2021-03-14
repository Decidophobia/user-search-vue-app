<template>
  <div class="users-list">
    <div v-for="user in usersPrev" :key="user.id" class="users-list_item">
      <div class="users-list_image">
        <img :src="user.avatar" :alt="user.login" />
      </div>
      <div class="users-list_login">
        <div class="users-list_login-label">
          Пользователь:
        </div>
        <div class="users-list_login-text">
          {{ user.login }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserList',
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
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
  border-radius: 8px;
}
.users-list_image,
img {
  width: 100px;
  border-radius: 50%;
  
}
.users-list_login {
  flex-grow: 1;
  margin-left: 16px;
}
</style>
