const state = () => ({
    events: [],
    pagination: {
        page: 1,
        limit: 10,
        totalPages: 0
    }
})

const getters = {
    getEvents: state => {
        return state.events;
    }
}

const actions = {
    async addEvent ({commit}, data) {
        try {
            const response = this.$axios.post('events', data, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                },
            })  // JSON responses are automatically parsed.
                console.log('Datab: ', data)
                commit('ADD_EVENT', response)
            
        } catch (error) {
            console.error('Error:', error)
        }
    },
    async loadEvents ({commit}) {
        try {
            await this.$axios.get(`events`, {  
            // await this.$axios.get(`events?current_page=${pagination.page}&per_page=${pagination.limit}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            }).then((res) => {
                // JSON responses are automatically parsed.
                console.log('res: ', res.data)
                commit('SET_EVENTS', res.data.data)
            })
        }
         catch (error) {
            console.log('Error:' ,error);
        }
    },
    async loadEvent ({commit}, id) {
        try {
            await this.$axios.get(`events/${id}`, {  
            // await this.$axios.get(`events?current_page=${pagination.page}&per_page=${pagination.limit}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            }).then((res) => {
                // JSON responses are automatically parsed.
                console.log('res: ', res.data)
                commit('SET_EVENTS', res.data.data)
            })
        }
         catch (error) {
            console.log('Error:' ,error);
        }
    }
}


const mutations = {
    SET_EVENTS (state, events) {
        state.events = events
    },
    ADD_EVENT (state, event) {
        state.event.push(event)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}