<template>
    <div>
        <LayoutNavbar/>
        <h2>Venues</h2>
        <button class="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true" @click="showModal">+ Add Venue</button>
        <div v-for="venue in venues" v-bind:key="venue.id" class="venue">
        <h2>{{ venue.venuename }}</h2>
        <p>{{ venue.address }}</p>
        </div>
        <LayoutFooter/>
        <div class="modal" :class="{'is-active': showModalFlag}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Add a new Venue</p>
                <button class="delete" aria-label="close" @click="cancelModal">></button>
                </header>
                <section class="modal-card-body">
                <p>{{ message }}</p>
                <p><VenuesAdd /></p>
                </section>
                <footer class="modal-card-foot">
                <button class="button is-success" @click="okModal">Ok</button>
                <button class="button" @click="cancelModal">Cancel</button>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
    export default {
        data() {
            return {
                showModalFlag: false,
                okPressed: false,
                message: "Press 'Ok' or 'Cancel'."
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
            }
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

<style lang="css" scoped>
.venue {
    border-bottom: 15px solid #990066;
    display: flex;
    flex-direction: row;
    width: 100%;
    color: #990066;
    font-weight: bold;
}
</style>