<template>
    <div>
        <div class="title-button">
            <h1 class="is-size-2">Venues</h1>
        </div>
        <input class="input is-large" @keyup="searchVenues" v-model="search" type="text" placeholder="Search postcode">
        <div class="venue-list">
            <div v-for="venue in venues" v-bind:key="venue.id">
                <VenuesCard 
                    :name="venue.venuename"
                    :address="venue.address"
                />
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
                search: ''
            }
        },
        methods: {
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
            //     'venues/loadVenues', 
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
.container {
    max-width: 1140px;
    margin: 0 auto;
    min-height: 100vh;
    min-height: -webkit-fill-available;
}
h1 {
    font-size: 2.3rem;
    font-weight: bold;
}
h2 {
    font-size: 1.6rem;
    line-height: 28px;
}
.title-button {
    margin-top:30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.venue-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin:  30px 0px 60px 0px;
    p {
        font-weight: 300;
    }
}

</style>