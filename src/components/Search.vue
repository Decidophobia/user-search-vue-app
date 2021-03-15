<template>
  <div class="search-panel">
    <div class="search-panel_input">
      <input
        type="text"
        @keydown.enter="onSubmit()"
        v-model="inputValue"
        placeholder="Введите имя пользователя"
      />
      <button @click="onSubmit()">Поиск</button>
    </div>
    <div class="search-panel_sort-btn">
      <span>Показывать на странице:</span>
      <select v-model="itemsPerPage" >
        <option v-for="page in resultCountOptions" :key="page">{{page}}</option>
      </select>
      <div class="search-panel_sort-btn_img">
        <span>Сортировать по количеству репозиториев</span>
        <img
          :src="sortImg"
          @click="
            changeOrder();
            onSubmit();
          "/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      inputValue: '',
      //search params
      sortType: 'repositories',
      order: 'desc',
      itemsPerPage: 10,
      pageNumber: 1,
      //sort btn img
      sortImg: '/src/img/sort-desc.png',
      resultCountOptions: [10, 25, 50, 100],
    };
  },
  methods: {
    ...mapActions('users', ['fetchGetUsers']),

    async onSubmit() {
      await this.fetchGetUsers({
        name: this.inputValue,
        sortType: this.sortType,
        order: this.order,
        itemsPerPage: this.itemsPerPage,
        pageNumber: this.pageNumber,
      });
    },

    changeOrder() {
      if (this.order === 'desc') {
        this.order = 'asc';
        this.sortImg = '/src/img/sort-asc.png';
      } else {
        this.order = 'desc';
        this.sortImg = '/src/img/sort-desc.png';
      }
    },
  },
};
</script>

<style scoped>
.search-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
.search-panel_sort-btn_img {
  display: flex;
  justify-content: space-between;
}
.search-panel_sort-btn_img img {
  width: 30px;
  border-radius: 3px;
  padding: 2px;
  cursor: pointer;
  border: 1px solid rgba(44, 62, 80, 0.67);
}
</style>
