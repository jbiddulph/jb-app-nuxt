const state = () => ({
    venues: []
})

const getters = {
    getVenues: state => {
        return state.venues;
    }
}

const actions = {
    async loadVenues ({commit}) {
        try {
              await this.$axios.get('venues', {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            }).then((res) => {
                // JSON responses are automatically parsed.
                commit('SET_VENUES', res.data)
            })
        }
         catch (error) {
            console.log('Error:' ,error);
        }
    }
}


const mutations = {
    SET_VENUES (state, venues) {
        state.venues = venues
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}