<template>
    <div>
        <LayoutNavbar/>
        <h2>Venues</h2>
        {{venues}}
        <!-- <div v-for="venue in venues" v-bind:key="venue.id">
        <h2>{{ venue.venuename }}</h2>
        <p>{{ venue.address }}</p>
        </div> -->
        <LayoutFooter/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
    export default {
        methods: {
            // ...mapActions([
            //     'venues/loadVenues', 
            // ])
        },
        computed: {
            ...mapGetters('venues', {
                venues: 'getVenues'
            }),
        },
        created() {
            this.$store.dispatch('venues/loadVenues');
        },
    }
</script>

<style lang="scss" scoped>

</style>