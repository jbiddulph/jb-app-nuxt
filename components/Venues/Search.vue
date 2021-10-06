<template>
    <div class="pc-search-holder">
        <div v-if="!selectedVenue" class="container">
            <div class="title-search">
                <h1 class="is-size-2 mr-4 text-center">Find venue by postcode</h1>
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
                <div class="modal" :class="{'is-active': showModalFlag}">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                        <p class="modal-card-title">Add a new Venue</p>
                        <button class="delete" aria-label="close" @click="cancelModal">></button>
                        </header>
                        <section class="modal-card-body">
                        <p>{{ message }}</p>
                        <p><VenuesForm /></p>
                        </section>
                        <footer class="modal-card-foot">
                        <button class="button" @click="cancelModal">Cancel</button>
                        </footer>
                    </div>
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
                showModalFlag: false,
                okPressed: false,
                message: "",
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
            showModal() {
                this.okPressed = false;
                this.showModalFlag = true;
            },
            okModal() {
                this.okPressed = true;
                this.showModalFlag = false;
            },
            cancelModal() {
                this.okPressed = false;
                this.showModalFlag = false;
            },
            deleteVenue(venue) {
                let response = confirm(`Are you sure you want to delete, ${venue.venuename}`)
                if(response) {
                    this.$store.dispatch('venues/deleteVenue', venue)
                }
            },
            searchVenues() {
                // this.$store.dispatch('venues/searchVenues', this.search);
                
                    try {
                        this.$axios.get(`venues/search/${this.search}`, {
                            headers: {
                                Authorization: `${window.localStorage.getItem('auth._token.local')}`
                            },
                        }).then(res => {
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
        computed: {
            ...mapGetters(
                'venues', {
                    venues: 'getVenues'
                },
            )
        },
        created() {
            // this.$store.dispatch('venues/searchVenues', this.search);
        },
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