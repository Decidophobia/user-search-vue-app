<template>
  <div class="text-center" @click="onClick($event)">
    <v-pagination
      v-model="currentPage"
      :length="5"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    onClick(e) {
      this.currentPage = +e.target.innerText
      console.log('click' ,this.currentPage);
    },
  },
};
</script>
