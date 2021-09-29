<template>
    <div>
        <LayoutNavbar/>
        <div class="container">
            <VenuesSearch :venueSearch="venueSearch" />
            <EventsForm  />
        </div>
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
                console.log('VENUE ID: ',venue_id)
            },
        },
        mounted() {}
    }
</script>

<style lang="scss" scoped>

</style>