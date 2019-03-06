<template>
    <div class="results container-fluid">
        <div class="row">
            <div class="col-6">
                <div v-for="movie in movies">
                    <div @click="setTargetMovie(movie)" :class="{'bg-info': targetMovie == movie}" class="card m-1">
                        <div class="card-header">
                            <h2>{{movie.title}}</h2>
                        </div>
                        <div class="card-body">
                            <h5>Movie Rating: {{movie.vote_average}}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <detailz v-if="targetMovie.title" :movie="targetMovie" />
            </div>
        </div>
    </div>
</template>

<script>
import Detailz from '@/components/Details.vue'

export default {
    name: "results",
    props: [],
    data() {
        return {
            targetMovie: {}
        }
    },
    computed: {
        movies() {
            return this.$store.state.movies
        }
    },
    methods: {
        setTargetMovie(movie) {
            this.targetMovie = movie
        }
    },
    components: {
        Detailz
    }
}
</script>

