<template>
    <div>
        <LayoutNavbar/>
        <div class="container">
            <div class="title-button">
                <h1 class="is-size-2">Venues</h1>
                <button class="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true" @click="showModal">+ Add Venue</button>
            </div>
            <div class="venue-list">
                <div v-for="venue in venues" v-bind:key="venue.id" class="venue">
                    <span>
                        &nbsp;
                    </span>
                    <h2>{{ venue.venuename }}</h2>
                    <p>{{ venue.address }}</p>
                <div>
                    <nuxt-link class="button is-warning is-small" :to="`venues/edit/${venue.id}`">
                        Edit
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z" />
                        </svg>
                    </nuxt-link>
                    <button class="button is-danger is-small" @click="deleteVenue(venue)">
                        Delete
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
                        </svg>
                    </button>
                </div>
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
        <LayoutFooter/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
    export default {
        data() {
            return {
                venuename: '',
                showModalFlag: false,
                okPressed: false,
                message: ""
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
                'postcodes', {
                    postcodes: 'getPostCodes'
                }
            ),
        },
        created() {
            this.$store.dispatch('venues/loadVenues');
            this.$store.dispatch('venues/loadPostCodes');
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
    justify-content: space-between;
    margin:  30px 0px 60px 0px;
    p {
        font-weight: 300;
    }
}
@media only screen and (max-width: 600px) {
    .venue {
        width: 100% !important;;    
    }
}
.venue {
    position: relative;
    width:200px;
    display: flex;
    flex-direction: column;
    color: #990066;
    font-weight: bold;
    flex-wrap: wrap;
    border: 1px dashed #e2e2e2;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-bottom: 30px;
    padding:5px;
    justify-content: space-evenly;
    background-color: #fff8dc;
    span {
        position: absolute;
        top: 10px;
        right: 10px;
        border: 1px solid #e2e2e2;
        border-radius: 12px;
        height: 12px;
        width: 12px;
        background-color: #ffffff;
    }
    a.navbar-item {
        flex-direction: column;
    }
}
</style>