<template>
    <div>
        <div class="title-button">
            <h1 class="is-size-2">Events</h1>
            <button v-if="isAuthenticated" class="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true" @click="showModal">+ Add Event</button>
        </div>
        <div class="event-list">
            <div v-for="event in events" v-bind:key="event.id" @click="showEvent(event.id)">
                <EventsCard 
                    :event="event"
                />
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
                    <VenuesSearch :venueSearch="venueSearch" />
                    <EventsForm />
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
                showModalFlag: false,
                okPressed: false,
                message: ""
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
            },
            
            // ...mapActions([
            //     'venues/loadAdminVenues', 
            // ])
        },
        computed: {
            ...mapGetters('events', {
                    events: 'getEvents'
                },
                {
                    isAuthenticated : 'auth/isAuthenticated',
                }
            ),
        },
        created() {
            this.$store.dispatch('events/loadEvents');
        },
    }
</script>

<style lang="scss" scoped>
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
</style>