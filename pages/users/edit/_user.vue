<template>
    <div>
        <LayoutNavbar/>
        <div class="container">
            <UsersForm />
        </div>
        <LayoutFooter/>
    </div>
</template>

<script>
    export default {
        async asyncData({ params, $axios }) {
            const user = await $axios.get(`/users/${params.user}`, {
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