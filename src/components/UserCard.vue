<template>
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
     <div class="users-list_full-info" v-show="isClicked">
      <div class="users-list_full-info_label">
        Перейти на профиль
      </div>
      <div class="users-list_full-info_text">
        <a :href="user.gitHub" target="_blank">gitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isClicked: false,
    };
  },
  methods: {
    showMoreInfo() {
      this.isClicked = !this.isClicked ? true : false;
    },
  },
};
</script>

<style scoped>
.user-list_prev {
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
.users-list_full-info_text{
  text-align: center;
}
</style>
