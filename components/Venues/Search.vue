<template>
    <div class="pc-search-holder">
        <div v-if="!selectedVenue" class="container">
            <div class="title-search">
                <p class="is-size-5">Adding an event?</p>
                <h1 class="is-size-2 mr-4 text-center">Find <span>venue</span> by <span>postcode</span></h1>
                <input class="postcode-search input is-large" @keyup="searchVenues" v-model="search" type="text" maxlength="8" placeholder="Start typing post code">
            </div>
            <div class="searched-venue-list">
                <div v-for="venue in venues" v-bind:key="venue.id">
                    <button @click="selectVenue(venue)">
                        <VenuesSearched 
                            :venue="venue"
                        />
                    </button>
                </div>
            </div>
        </div>
        <div v-if="selectedVenue" class="mt-4 text-center">
            <button class="button m-4" @click="reselectVenue()">Select a different venue</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
    export default {
        data() {
            return {
                venues: [],
                venuename: '',
                search: '',
                selectedVenue: false
            }
        },
        methods: {
            selectVenue(venue) {
                console.log('Selected venue: ',venue)
                this.search = ''
                this.selectedVenue = true
                this.$store.commit('venues/VENUE_CHANGED', venue)
            },
            reselectVenue() {
                this.selectedVenue = false
            },
            searchVenues() {
                // this.$store.dispatch('venues/searchVenues', this.search);
                
                    try {
                        this.$axios.get(`venues/search/${this.search}`).then(res => {
                            console.log('res: ', res)
                            this.venues = res.data
                        })
                        
                    } catch (error) {
                        console.error('Error:', error)
                    }
                
            }

            // ...mapActions([
            //     'venues/loadAdminVenues', 
            // ])
        },
        // computed: {
        //     ...mapGetters(
        //         'venues', {
        //             venues: 'getVenues'
        //         },
        //     )
        // }
    }
</script>

<style lang="scss" scoped>
h1 {
    color: $white;
    font-weight: lighter;
    line-height: 2.5rem;
}
.pc-search-holder {
    background: linear-gradient($primary-80, $primary);
    // background-color: $primary-80!important;
}
.postcode-search {
    width: 300px !important;
    background-color: $primary-20;
    border: 1px solid $white;
    color: $white;
    font-weight: 300;
}
.title-search {
    margin-top:80px;
    display: flex;
    flex-direction: row;
    justify-content:flex-start;
    align-items: center;
    h1 span {
        font-weight:300;
    }
}
.searched-venue-list {
    display: flex;
    
    flex-direction: column;
    flex-wrap: wrap;
    margin:  30px 0px 60px 0px;
    text-align: center;
    p {
        font-weight: 300;
    }
}
@media only screen and (max-width: 600px) {
    h1 {
        margin-bottom: 20px;
    }
    .title-search {
        flex-direction: column;
    }
}
</style>