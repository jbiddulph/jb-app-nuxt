<template>
    <div>
        <LayoutNavbar/>
        <div class="container">
            <VenuesSearch />
            <EventsForm />
        </div>
        <LayoutFooter/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedvenue: null
            }
        },
        methods: {
            // selectVenue(id) {
            //     console.log('Selected venue: ',id)
            //     this.$emit('selectedVenue', id)
            // }
        },
        mounted() {}
    }
</script>

<style lang="scss" scoped>

</style>