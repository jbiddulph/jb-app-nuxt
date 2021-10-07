<template>
    <div>
        <LayoutNavbar/>
        <VenuesSearch :venueSearch="venueSearch" />
        <EventsForm />
        <LayoutFooter/>
    </div>
</template>

<script>
    export default {
        props: {
            venueSearch: {
            type: Number,
            required: false,
            }
        },
        data() {
            return {
            }
        },
        methods: {
            selectVenue(venue_id) {
                console.log('VENUE ID xx: ',venue_id)
            },
        },
        mounted() {}
    }
</script>

<style lang="scss" scoped>

</style>