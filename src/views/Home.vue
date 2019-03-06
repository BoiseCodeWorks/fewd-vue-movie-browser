<template>
  <div class="home">
    <h1>Mo<span><img alt="Vue logo" src="../assets/logo.png"></span>ies</h1>
    <form @submit.prevent="search">
      <input v-model="movieSearch" type="text">
      <button type="submit" :disabled="!movieSearch.length" class="btn btn-primary">Search</button>  
    </form> 
    <results />
  </div>
</template>

<script>
import Results from '@/components/Results.vue'
export default {
  name: 'home',
  data() {
    return {
      movieSearch: ''
     }
  },
  methods: {
    search() {
      this.$store.dispatch('getMovies', this.movieSearch)
    }
  },
  components: {
    Results
  }
}
</script>
