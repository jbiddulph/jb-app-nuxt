<template>
    <div>
        <LayoutNavbar/>
        <!-- <VenuesSearch :venueSearch="venueSearch" /> -->
        <EventsForm />
        <LayoutFooter/>
    </div>
</template>

<script>
    export default {
        async asyncData({ params, $axios }) {
            const event = await $axios.get(`/events/${params.event}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            })
            return { event }
        }
    }
</script>

<style lang="scss" scoped>

</style>