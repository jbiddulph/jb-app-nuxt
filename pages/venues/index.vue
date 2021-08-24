<template>
    <div>
        <LayoutNavbar/>
        <h2>Venues</h2>
        <div v-for="venue in venues.data" v-bind:key="venue.id">
        <h2>{{ venue.venuename }}</h2>
        <p>{{ venue.address }}</p>
        </div>
        <LayoutFooter/>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
    export default {
        computed: {
            venues() {
                return this.$store.getters.venues;
            },
        },
        created() {
            this.$store.dispatch('loadVenues');
        },
    }
</script>

<style lang="scss" scoped>

</style>