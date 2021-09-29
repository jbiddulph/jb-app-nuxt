<template>
    <div>
        <div class="title-button">
                <h1 class="is-size-2">Venues</h1>
                <button class="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true" @click="showModal">+ Add Venue</button>
            </div>
            <div class="venue-list">
                <div v-for="venue in venues" v-bind:key="venue.id">
                    <VenuesCard 
                        :venue="venue"
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

            // ...mapActions([
            //     'venues/loadAdminVenues', 
            // ])
        },
        computed: {
            ...mapGetters(
                'venues', {
                    venues: 'getVenues'
                },
                // 'postcodes', {
                //     postcodes: 'getPostCodes'
                // }
            ),
        },
        created() {
            this.$store.dispatch('venues/loadVenues');
            // this.$store.dispatch('venues/loadPostCodes');
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

</style>