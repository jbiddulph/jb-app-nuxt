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
                            <span v-if="!$v.event.eventType.minLength">Event type must have at least {{ $v.event.eventType.$params.minLength.min }} characters</span>
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
                eventType: {
                    required,
                },
                eventDetails: {
                    required,
                },
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