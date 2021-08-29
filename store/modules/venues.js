const state = () => ({
    venues: []
})

const getters = {
    getVenues: state => {
        return state.venues;
    }
}

const actions = {
    async addVenue ({commit}, data) {
        try {
            await this.$axios.post('venues', {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                },
                data,
            }).then((res) => {
                // JSON responses are automatically parsed.
                console.log('Data: ', data)
                commit('ADD_VENUE', res.data)
            })
        } catch (error) {
            console.error('Error:', error)
        }
    },
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
    },
    ADD_VENUE (state, venue) {
        state.venue.unshift(venue)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}