<template>
    <div>
        <LayoutNavbar/>
        <div class="container start">
            <nuxt-link v-if="this.$route.params.venue" class="button is-warning is-small" :to="`/venues`">
                <svg style="width:24px;height:24px;margin-right:15px;" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12" />
                </svg>
                Back to Venues
            </nuxt-link>
            <h1>{{venue.data.data.venuename}}</h1>
            <h2>{{venue.data.data.address}}</h2>
            <div v-if="venue.data.data.photo" class="bg-image" :style="`background-image: url(http://jwtapi.test/${venue.data.data.photo})`">
            </div>
            <div>{{venue.data.data.postcode}}</div>
            <div>{{venue.data.data.telephone}}</div>
            <span>{{venue.data.data.latitude}}</span>
            <span>{{venue.data.data.longitude}}</span>
            <!-- <VenuesForm /> -->
            <!-- {{venue.data.data}} -->
        </div>
        <LayoutFooter/>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        mounted() {

        },
        computed: {
            
        },

        async asyncData({ params, $axios }) {
            const venue = await $axios.get(`/venues/${params.venue}`)
            return { venue }
        }
    }
</script>

<style lang="scss" scoped>
.start {
    margin-top:60px;
}
.bg-image {
    width:100%;
    height: 200px;
    background-size: cover;
}
</style>