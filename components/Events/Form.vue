<template>
    <div>
        <h2>Add Event</h2>
        <div class="add">
            <form @submit="postData" method="post">
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
                    <label class="label">Live</label>
                    <div class="control">
                        <input type="text" v-model="event.is_live" placeholder="Live">
                    </div>
                </div>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>
<script>
import { required, minLength, maxLength, between} from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
    export default {
        props: {
            eventName: {
                type: String,
                required: false,
            },
            eventDetails: {
                type: String,
                required: false,
            },
            eventDate: {
                type: String,
                required: false,
            },
            eventType: {
                type: String,
                required: false,
            },
            is_live: {
                type: Boolean,
                required: false,
            }
        },
        data() {
            return { 
                event: {
                    eventName: '',
                    eventDetails: '',
                    slug: '',
                    eventPhoto: '',
                    eventDate: '',
                    eventTimeStart: '',
                    eventTimeEnd: '',
                    eventType: '',
                    eventCost: '',
                    is_live: 0
                }
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
            }
        },
        mounted() {
            if (this.$route.params.event) {
                this.event.eventName = this.eventName
                this.event.eventDetails = this.eventDetails
                this.event.eventDate = this.eventDate
                this.event.eventType = this.eventType
                this.event.slug = this.slug
                this.event.eventPhoto = this.eventPhoto
                this.event.eventTimeStart = this.eventTimeStart
                this.event.eventTimeEnd = this.eventTimeEnd
                this.event.eventCost = this.eventCost
                this.event.is_live = this.is_live
            }
        },
        methods: {
            ...mapActions({
                addEvent: 'events/addEvent'
            }),
            postData(e) {
                
                e.preventDefault()
                // this.$v.$validate()
                // if(!this.$v.$error){
                    console.log('e: ', e.eventDetails)
                    this.addEvent(this.event)
                // } else {
                //     alert('form failed validation')
                // }
            }
        },
        // created() {
        //     this.$store.dispatch('venues/addVenue');
        // },
    }
</script>

<style scoped>
    form {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    input[type="text"], input[type="number"] {
        border: 1px solid #990066;
        padding:10px;
        flex: 10;
        outline: 0;
    }
    input[type="submit"] {
        flex: 2;
        cursor: pointer;
        background-color: #990066;
        color: #fff;
    }
    input[type="text"], input[type="number"] {
        width: 100%;
    }
    .is-valid {
        border: 1px solid #20aa27!important;
    }
</style>