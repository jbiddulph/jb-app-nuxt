<template>
<div class="container">
    <div v-if="venue_id && venuename != ''">
        <h2 class="is-size-2">{{ this.title }}</h2>
        <h3 class="is-size-3">VENUE: {{venuename}}</h3>
        <nuxt-link v-if="this.$route.params.event" class="button is-warning is-small" :to="`/admin/events`">
            <svg style="width:24px;height:24px;margin-right:15px;" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12" />
            </svg>
            Back to Events
        </nuxt-link>
        <div v-if="event.eventPhoto" class="image text-center">
            <img :src="`${$config.baseURL}/storage/${event.eventPhoto}`" height="100" />
        </div>
        <div class="add">
            <UploadImage :folder="'events'" :image.sync="event.eventPhoto" />
            <div class="field">
                <label class="label">Event Name</label>
                <div class="control">
                    <input type="text" v-model="event.eventName" placeholder="Event name" :class="{
                        'is-invalid':$v.event.eventName.$error, 'is-valid':!$v.event.eventName.$invalid}">
                    <div v-if="event.eventName" class="invalid-feedback">
                        <span v-if="!$v.event.eventName.required">Event name is required</span>
                        <span v-if="!$v.event.eventName.minLength">Event name must have at least {{ $v.event.eventName.$params.minLength.min }} characters</span>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Event Slug</label>
                <div class="control">
                    <input type="text" v-model="event.slug" placeholder="Event Slug" :class="{
                        'is-invalid':$v.event.slug.$error, 'is-valid':!$v.event.slug.$invalid}">
                    <div v-if="event.slug" class="invalid-feedback">
                        <span v-if="!$v.event.slug.required">Event slug is required</span>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Event Details</label>
                <div class="control">
                    <input type="text" v-model="event.eventDetails" placeholder="Event Type" :class="{
                        'is-invalid':$v.event.eventDetails.$error, 'is-valid':!$v.event.eventDetails.$invalid}">
                    <div v-if="event.eventDetails" class="invalid-feedback">
                        <span v-if="!$v.event.eventDetails.required">Event details is required</span>
                        <span v-if="!$v.event.eventDetails.minLength">Event details must have at least {{ $v.event.eventDetails.$params.minLength.min }} characters</span>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Event Type</label>
                <div class="control">
                    <input type="text" v-model="event.eventType" placeholder="Event Type" :class="{
                        'is-invalid':$v.event.eventType.$error, 'is-valid':!$v.event.eventType.$invalid}">
                    <div v-if="event.eventType" class="invalid-feedback">
                        <span v-if="!$v.event.eventType.required">Event type is required</span>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Event Date</label>
                <div class="control">
                    <v-date-picker :first-day-of-week="1" v-model="event.eventDate"></v-date-picker>
                    <input type="hidden" v-model="event.eventDate" placeholder="Event Date" :class="{
                        'is-invalid':$v.event.eventDate.$error, 'is-valid':!$v.event.eventDate.$invalid}">
                    <div v-if="event.eventDate" class="invalid-feedback">
                        <span v-if="!$v.event.eventDate.required">Event date is required</span>
                    </div>
                </div>
            </div>
            <!-- // Time pickers -->
            <v-row
            justify="space-around"
            align="center"
            >
                <v-col style="width: 350px; flex: 0 1 auto;">
                    <h2>Start:</h2>
                    <v-time-picker
                    v-model="event.eventTimeStart"
                    ></v-time-picker>
                </v-col>
                <v-col style="width: 350px; flex: 0 1 auto;">
                    <h2>End:</h2>
                    <v-time-picker
                    v-model="event.eventTimeEnd"
                    ></v-time-picker>
                </v-col>
            </v-row>                
            <div class="field">
                <label class="label">Event Time Start</label>
                <div class="control">
                    <input type="text" v-model="event.eventTimeStart" placeholder="Event Time Start" :class="{
                        'is-invalid':$v.event.eventTimeStart.$error, 'is-valid':!$v.event.eventTimeStart.$invalid}">
                    <div v-if="event.eventTimeStart" class="invalid-feedback">
                        <span v-if="!$v.event.eventTimeStart.required">Event time start is required</span>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Event Time End</label>
                <div class="control">
                    <input type="text" v-model="event.eventTimeEnd" placeholder="Event Time End" :class="{
                        'is-invalid':$v.event.eventTimeEnd.$error, 'is-valid':!$v.event.eventTimeEnd.$invalid}">
                    <div v-if="event.eventTimeEnd" class="invalid-feedback">
                        <span v-if="!$v.event.eventTimeEnd.required">Event date is required</span>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Event Photo</label>
                <div class="control">
                    <input type="text" readonly v-model="event.eventPhoto" placeholder="Event Photo" :class="{
                        'is-invalid':$v.event.eventPhoto.$error, 'is-valid readonly':!$v.event.eventPhoto.$invalid}">
                    <div v-if="event.eventPhoto" class="invalid-feedback">
                        <span v-if="!$v.event.eventPhoto.required">Event photo is required</span>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Event Cost</label>
                <div class="control">
                    <input type="text" v-model="event.eventCost" placeholder="Event Cost" :class="{
                        'is-invalid':$v.event.eventCost.$error, 'is-valid':!$v.event.eventCost.$invalid}">
                    <div v-if="event.eventCost" class="invalid-feedback">
                        <span v-if="!$v.event.eventCost.required">Event cost is required</span>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Venue</label>
                <!-- <div class="control" v-if="!venue_id">
                    <input type="number" v-model="event.venue_id" placeholder="Venue" :class="{
                        'is-invalid':$v.event.venue_id.$error, 'is-valid':!$v.event.venue_id.$invalid}">
                    <div v-if="event.venue_id" class="invalid-feedback">
                        <span v-if="!$v.event.venue_id.required">Venue is required</span>
                    </div>
                </div> -->
                <div class="control">
                    <input type="number" readonly v-model="venue_id" placeholder="Venue" class="is-valid readonly">
                </div>
            </div>
            <div class="field">
                <label class="label">Live</label>
                <div class="control">
                    <input type="checkbox" v-model="event.is_live" placeholder="Live">
                </div>
            </div>
            <div v-if="showNotification" class="notification is-success is-light">
            <button class="delete" @click="closeNotification()"></button>
                {{successMessage}}
            </div>
            <input v-if="this.$route.params.event" type="submit" @click="editEvent" :value="this.title" class="button secondary">
            <input v-else type="submit" @click="addNewEvent" :value="this.title" class="button secondary">
        </div>
    </div>
</div>
</template>
<script>
import { required, minLength, maxLength, between} from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'
    export default {
        data() {
            return { 
                defaultEvent: {
                    eventName: '',
                    eventDetails: '',
                    slug: '',
                    eventPhoto: '',
                    eventDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                    eventTimeStart: '',
                    eventTimeEnd: '',
                    eventType: '',
                    eventCost: '',
                    venue_id: this.venue_id,
                    is_live: 0
                },
                title: '', 
                showNotification: false,
                successMessage: '' 
            }
        },
        validations: {
            event: {
                eventName: {
                    required,
                    minLength: minLength(3),
                },
                eventDate: {
                    required,
                },
                eventType: {
                    required,
                },
                eventDetails: {
                    required,
                    minLength: minLength(3),
                },
                slug: {
                    required,
                },
                eventTimeStart: {
                    required,
                },
                eventTimeEnd: {
                    required,
                },
                eventPhoto: {
                    required,
                },
                eventCost: {
                    required,
                },
                venue_id: {
                    required,
                },
            }
        },
        mounted() {
            if (this.$route.params.event) {
                this.title = 'Edit Event'
            } else {
                this.title = 'Add Event'
            }
            this.defaultEvent.venue_id = this.venue_id
        },
        methods: {
            ...mapActions({
                addEvent: 'events/addEvent'
            }),
            addNewEvent() { 
                this.event.venue_id = this.venue_id
                this.addEvent(this.event)
                this.showNotification = true
                this.successMessage = 'You have added a new event!'
                setTimeout(() => {  
                    this.$router.push('/admin/events')
                }, 3000);
                
            },
            async editEvent() {
                await this.$store.dispatch('events/editEvent', this.event);
                this.$router.push('/admin/events')
            },
            closeNotification() {
                this.showNotification = false
                console.log('close')
            }  
        },
        mounted() {
            console.log('defaultEvent: ',this.defaultEvent)
            this.$store.state.venues.venue_id == this.venue_id
            
        },
        computed: {
            ...mapGetters('events', {
                events: 'getEvents'
            }),
            event() {
                return this.events.find(e => e.id == this.$route.params.event) ?? this.defaultEvent
            },
            venue_id() {
                return this.$store.state.venues.venue_id ?? this.defaultEvent.venue_id
            },
            venuename() {
                return this.$store.state.venues.venuename
            }
        }
    }
</script>

<style scoped lang="scss">
.image img {
    height: auto;
    width: auto;
}
.readonly {
    color: $lightgrey;
}
form {
    display: flex;
    width: 100%;
    flex-direction: column;
}
input[type="text"], input[type="number"] {
    border: 1px solid $secondary;
    padding:10px;
    flex: 10;
    outline: 0;
}
input[type="submit"] {
    flex: 2;
    cursor: pointer;
    background-color: $secondary;
    color: #fff;
}
input[type="text"], input[type="number"] {
    width: 100%;
}
.is-valid {
    border: 1px solid #20aa27!important;
}
.v-btn--active {
    color: #ff9966!important;
}

.v-time-picker-clock__hand {
    background-color: $primary!important;
}
.v-time-picker-clock__hand:before {
    background-color: $primary!important;
}
.accent {
    background-color: $primary!important;
}
.theme--light.v-card {
    background-color: $primary!important;
}
.add {
    margin-bottom: 40px;
}
</style>