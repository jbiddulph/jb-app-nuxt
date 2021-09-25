<template>
    <div>
        <h2>This user</h2>
        {{user.data[0].name}}
    </div>
</template>

<script>
    export default {
        async asyncData({ params, $axios }) {
            const user = await $axios.get(`/users/${params.users}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            })
            return { user }
        }
    }
</script>

<style lang="scss" scoped>

</style>