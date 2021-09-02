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
            const response = this.$axios.post('venues', data, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                },
            })  // JSON responses are automatically parsed.
                console.log('Datab: ', data)
                commit('ADD_VENUE', response)
            
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
                commit('SET_VENUES', res.data.data)
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
        state.venues.push(venue)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}