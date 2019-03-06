import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let _movieApi = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=',
  timeout: 3000
})

export default new Vuex.Store({
  state: {//our applications single source of truth
    movies: []
  },
  mutations: {//allow us to update the state || commit references mutations
    setMovies(state, movies) {
      state.movies = movies
    }
  },
  actions: {//actions will make api requests and handle other logic || dispatch references actions
    getMovies({ commit, dispatch }, movieName) {
      _movieApi.get(movieName)
        .then(res => {
          console.log(res)
          let movies = res.data.results
          commit('setMovies', movies)
        })
        .catch(err => console.error(err))
    }
  }
})
