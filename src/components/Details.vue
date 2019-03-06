<template>
   <div class="detailz row">
      <div class="card">
          <div class="card-header">
              <h1>{{movie.title}}</h1>
          </div>
          <img class="card-img-top" :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="movie poster">

      </div>
   </div>
</template>

<script>
export default {
   name: "detailz",
   props: ["movie"],
   data() {
      return {}
   },
   computed: {},
   methods: {},
   components: {}
}
</script>