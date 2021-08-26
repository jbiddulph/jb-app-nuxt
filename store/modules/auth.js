const state = () => ({
    venues: []
})

const getters = {
    isAuthenticated(state) {
        return state.loggedIn
    },

    loggedInUser(state) {
        return state.user
    },
}

export default {
    namespaced: true,
    state,
    getters,

}