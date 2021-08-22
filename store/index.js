export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}

export const actions = {
  // async getVenues() {
  //   let res = await this.$axios.get('/venues')
  //   return res;
  // }
}