<template>
  <div class="search-panel">
    <input type="text" v-model="inputValue">
  </div>
</template>

<script>


export default{
  name: 'Search',
  data(){
    return {
      inputValue: '',
    }
  },
  watch: {
    inputValue(value){
      console.log(value);
    }
  }
}

</script>

<style scoped>

</style>
