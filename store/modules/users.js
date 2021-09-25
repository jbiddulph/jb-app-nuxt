const state = () => ({
    users: [],
    pagination: {
        page: 1,
        limit: 10,
        totalPages: 0
    }
})

const getters = {
    getUsers: state => {
        return state.users;
    }
}

const actions = {
    // ADD
    async addUser ({commit}, data) {
        try {
            const response = this.$axios.post('users', data, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                },
            })  // JSON responses are automatically parsed.
                commit('ADD_USER', response)
            
        } catch (error) {
            console.error('Error:', error)
        }
    },
    // EDIT
    async editUser ({commit}, data) {
        try {
            const response = this.$axios.put(`users/${data.id}`, data, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                },
            })  // JSON responses are automatically parsed.
                let savedUser = response.data
                commit('EDIT_USER', savedUser)
                return savedUser
            
        } catch (error) {
            console.error('Error:', error)
        }
    },
    // GET
    async loadUsers ({commit}) {
        try {
            await this.$axios.get(`users`, {  
            // await this.$axios.get(`users?current_page=${pagination.page}&per_page=${pagination.limit}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            }).then((res) => {
                // JSON responses are automatically parsed.
                console.log('res: ', res.data)
                commit('SET_USERS', res.data.data)
            })
        }
         catch (error) {
            console.log('Error:' ,error);
        }
    },
    async loadUser ({commit}, id) {
        try {
            await this.$axios.get(`users/${id}`, {  
            // await this.$axios.get(`users?current_page=${pagination.page}&per_page=${pagination.limit}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            }).then((res) => {
                // JSON responses are automatically parsed.
                console.log('res: ', res.data)
                commit('SET_USERS', res.data.data)
            })
        }
         catch (error) {
            console.log('Error:' ,error);
        }
    },
    // DELETE
    async deleteUser({commit}, user) {
        //delete user on server
        await this.$axios.delete(`users/${user.id}`, {
            headers: {
                Authorization: `${window.localStorage.getItem('auth._token.local')}`
            }
        }).then((res) => {
            if(res.status == 200){
                //delete user in state
                commit('DELETE_USER', user.id)
            }
        })
    }
}


const mutations = {
    SET_USERS (state, users) {
        state.users = users
    },
    ADD_USER (state, user) {
        state.user.push(user)
    },
    DELETE_USER (state, userId) {
        let users = state.users.filter(u => u.id != userId)
        state.users = users
    },
    EDIT_USER (state, user) {
        state.users.forEach(u => {
            if(u.id == user.id) {
                u = user
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