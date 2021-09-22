const state = () => ({
    venues: [],
    postcodes: [],
    pagination: {
        page: 1,
        limit: 10,
        totalPages: 0
    }
})

const getters = {
    getVenues: state => {
        return state.venues;
    },
    getTowns: state => {
        return state.towns;
    }
}

const actions = {
    async editVenue ({commit}, data) {
        try {
            const response = this.$axios.put(`venues/${data.id}`, data, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                },
            })  // JSON responses are automatically parsed.
                let savedVenue = response.data
                commit('EDIT_VENUE', savedVenue)
                return savedVenue
            
        } catch (error) {
            console.error('Error:', error)
        }
    },
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
            await this.$axios.get(`venues`, {  
            // await this.$axios.get(`venues?current_page=${pagination.page}&per_page=${pagination.limit}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            }).then((res) => {
                // JSON responses are automatically parsed.
                console.log('res: ', res.data)
                commit('SET_VENUES', res.data.data)
            })
        }
         catch (error) {
            console.log('Error:' ,error);
        }
    },
    async loadPostCodes ({commit}) {
        try {
            await this.$axios.get(`postcodes`, {  
            // await this.$axios.get(`venues?current_page=${pagination.page}&per_page=${pagination.limit}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            }).then((res) => {
                // JSON responses are automatically parsed.
                console.log('postcodes: ', res.data)
                commit('SET_POSTCODES', res.data.data)
            })
        }
         catch (error) {
            console.log('Error:' ,error);
        }
    },
    async deleteVenue({commit}, venue) {
        //delete venue on server
        await this.$axios.delete(`venues/${venue.id}`, {
            headers: {
                Authorization: `${window.localStorage.getItem('auth._token.local')}`
            }
        }).then((res) => {
            if(res.status == 200){
                //delete venue in state
                commit('DELETE_VENUE', venue.id)
            }
        })
    }
}


const mutations = {
    SET_POSTCODES (state, postcodes) {
        state.postcodes = postcodes
    },
    SET_VENUES (state, venues) {
        state.venues = venues
    },
    ADD_VENUE (state, venue) {
        state.venues.push(venue)
    },
    DELETE_VENUE (state, venueId) {
        let venues = state.venues.filter(v => v.id != venueId)
        state.venues = venues
    },
    EDIT_VENUE (state, venue) {
        state.venues.forEach(v => {
            if(v.id == venue.id) {
                v = venue
            }
        }) 
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}