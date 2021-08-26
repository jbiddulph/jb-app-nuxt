const state = () => ({
    venues: []
})

const getters = {
    getVenues: state => {
        console.log('xxs',state.venues)
        return state.venues;
    }
}

const actions = {
    async loadVenues () {
        try {
              await this.$axios.get('venues', {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                    // Authorization: `${this.state.localStorage.token}`
                }
            }).then((res) => {
                // JSON responses are automatically parsed.
                console.log('venues: ', res)
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