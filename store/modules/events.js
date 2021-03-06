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
    // ADD
    async addEvent ({commit}, data) {
        try {
            const response = this.$axios.post('events', data)  // JSON responses are automatically parsed.
                commit('ADD_EVENT', response)
            
        } catch (error) {
            console.error('Error:', error)
        }
    },
    // EDIT
    async editEvent ({commit}, data) {
        try {
            const response = this.$axios.put(`events/${data.id}`, data, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                },
            })  // JSON responses are automatically parsed.
                let savedEvent = response.data
                // console.log('savedEvent: ',savedEvent)
                commit('EDIT_EVENT', savedEvent)
                return savedEvent
            
        } catch (error) {
            console.error('Error:', error)
        }
    },
    // GET
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
    },
    // DELETE
    async deleteEvent({commit}, event) {
        //delete event on server
        await this.$axios.delete(`events/${event.id}`, {
            headers: {
                Authorization: `${window.localStorage.getItem('auth._token.local')}`
            }
        }).then((res) => {
            if(res.status == 200){
                //delete event in state
                commit('DELETE_EVENT', event.id)
            }
        })
    }
}


const mutations = {
    SET_EVENTS (state, events) {
        state.events = events
    },
    ADD_EVENT (state, event) {
        state.event.push(event)
    },
    DELETE_EVENT (state, eventId) {
        let events = state.events.filter(e => e.id != eventId)
        state.events = events
    },
    EDIT_EVENT (state, event) {
        state.events.forEach(e => {
            if(e.id == event.id) {
                e = event
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