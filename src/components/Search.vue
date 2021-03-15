<template>
  <!-- test vuetify -->
  <v-card>
    <v-card-title>
      Поиск пользователей GitHub
    </v-card-title>
    <v-spacer />
    <v-col>
      <v-text-field
        v-model="inputValue"
        @keydown.enter="onSubmit()"
        append-icon="mdi-magnify"
        label="Введите имя пользователя"
        single-line
        hide-details
      ></v-text-field>
    </v-col>
    <v-spacer />
    <div class="search-panel_sort-btn">
      <v-container>
        <v-col>
          <v-select
            v-model="itemsPerPage"
            :items="[10, 25, 50, 100]"
            label="Показывать на странице:"
          >
          </v-select>
        </v-col>
        <v-col>
          <div class="search-panel_sort-btn_img">
            <span>Сортировать по количеству репозиториев</span>
            <img
              :src="sortImg"
              @click="
                changeOrder();
                onSubmit();
              "
            />
          </div>
        </v-col>
      </v-container>
    </div>
  
  </v-card>
  

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
