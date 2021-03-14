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
      <button
        @click="
          changeOrder();
          onSubmit();
        "
      >
        Order: {{ this.order }}
      </button>
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
      this.order = this.order === 'desc' ? 'asc' : 'desc';
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
</style>
