<template>
  <div class="users-list">
    <div v-for="user in usersPrev" :key="user.id" class="users-list_item">
      <div class="user-list_prev" @click="showMoreInfo()">
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
        <div class="users-list_full-info" v-show="isClicked">
          <div class="users-list_full-info_label">
            Перейти на профиль
          </div>
          <div class="users-list_full-info_text">
            <a :href="user.gitHub">gitHub</a>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserList',
  data(){
    return{
      isClicked: false,
      id: ''
    }
  },
  computed: {
    ...mapGetters({
      usersPrev: 'users/getUsersPrev',
    }),
  },
  methods: {
    showMoreInfo(){
      this.isClicked = !this.isClicked
      console.log(this.isClicked);
    }
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
.user-list_prev{
  display: flex;
    flex-grow: 1;
    align-items: center;
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
