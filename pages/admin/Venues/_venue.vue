<template>
    <div>
        <LayoutNavbar/>
        <div class="container">
            <VenuesForm />
        </div>
        <LayoutFooter/>
    </div>
</template>

<script>
    export default {
        async asyncData({ params, $axios }) {
            const venue = await $axios.get(`/venues/${params.venue}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            })
            return { venue }
        }
    }
</script>

<style lang="scss" scoped>

</style>