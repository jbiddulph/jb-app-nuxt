<template>
    <div>
        <LayoutNavbar/>
        <div class="container">
            <VenuesForm
                :venuename="venue.data[0].venuename"
                :fsa_id="venue.data[0].fsa_id"
                :user_id="venue.data[0].user_id"
                :email="venue.data[0].email"
                :slug="venue.data[0].slug"
                :venuetype="venue.data[0].venuetype"
                :address="venue.data[0].address"
                :address2="venue.data[0].address2"
                :town="venue.data[0].town"
                :county="venue.data[0].county"
                :postcode="venue.data[0].postcode"
                :postalsearch="venue.data[0].postalsearch"
                :telephone="venue.data[0].telephone"
                :easting="venue.data[0].easting"
                :northing="venue.data[0].northing"
                :latitude="venue.data[0].latitude"
                :longitude="venue.data[0].longitude"
                :local_authority="venue.data[0].local_authority"
                :website="venue.data[0].website"
                :photo="venue.data[0].photo"
                :is_live="venue.data[0].is_live"
             />
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