export const state = () => ({
  venues: []
})

export const mutations = {
  SET_VENUES (state, venues) {
      state.venues = venues
  }
}

export const actions = {
  async loadVenues ({ commit }) {
      try {
            await this.$axios.get('venues', {
              headers: {
                  Authorization: `${localStorage.getItem('auth._token.local')}`
              }
          }).then((res) => {
              // JSON responses are automatically parsed.
              commit('SET_VENUES', res.data)
          })
      }
       catch (error) {
          console.log(error);
      }
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },

  venues: state => {
    return state.venues;
  }
}

