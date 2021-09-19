<template>
    <div>
        <LayoutNavbar/>
        <div class="container">
            <div class="title-button">
                <h1>Events</h1>
                <button class="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true" @click="showModal">+ Add Event</button>
            </div>
            <div class="event-list">
                <div v-for="event in events" v-bind:key="event.id" class="event" @click="showEvent(event.id)">
                    <span>&nbsp;</span>
                    <nuxt-link class="navbar-item" :to="`events/edit/${event.id}`">
                        <h2>{{ event.eventName }}</h2>
                        <p>{{ event.eventDetails }}</p>
                    </nuxt-link>
                </div>
                <div class="modal" :class="{'is-active': showModalFlag}">
                    <div class="modal-background"></div>
                    <div class="modal-card">
                        <header class="modal-card-head">
                        <p class="modal-card-title">Add a new Event</p>
                        <button class="delete" aria-label="close" @click="cancelModal">></button>
                        </header>
                        <section class="modal-card-body">
                        <p>{{ message }}</p>
                        <p><EventsForm /></p>
                        </section>
                        <footer class="modal-card-foot">
                        <button class="button is-success" @click="okModal">Ok</button>
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
                showModalFlag: false,
                okPressed: false,
                message: "Press 'Ok' or 'Cancel'."
            }
        },
        methods: {
            showEvent(id) {
                console.log('Here is the event', id)
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
            }
            // ...mapActions([
            //     'venues/loadVenues', 
            // ])
        },
        computed: {
            ...mapGetters('events', {
                events: 'getEvents'
            }),
        },
        created() {
            this.$store.dispatch('events/loadEvents');
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
.event-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin:  30px 0px 60px 0px;
    p {
        font-weight: 300;
    }
}

.event {
    cursor: pointer;
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
}
</style>