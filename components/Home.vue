<template>
    <div>
        <h1>Welcome to JB-App</h1>
        <div v-show="loggedIn">
            {{ $store.state.localStorage.token }}
            {{ username }}
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                token: {},
                username: null,
            }
        },
        async mounted() {
            try {
                this.token = await this.$store.state.localStorage.token
                const response = await this.$axios.get('user', {
                    headers: {
                        Authorization: `Bearer ${this.token}`
                    }
                })
                this.username = response.data.name
                console.log('response: ',response)
            } catch (err) {
                console.log('error: ',err)
            }
        },
        computed: {
            loggedIn() {
                if(this.$store.state.localStorage.token) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>