<template>
    <div>
        <LayoutNavbar/>
        <div class="container start">
            <nuxt-link v-if="this.$route.params.venue" class="button is-warning is-small" :to="`/venues`">
                <svg style="width:24px;height:24px;margin-right:15px;" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12" />
                </svg>
                Back to Venues
            </nuxt-link>
            <h1>{{venue.data.data.venuename}}</h1>
            <h2>{{venue.data.data.address}}</h2>
        </div>
            <div v-if="venue.data.data.photo" class="bg-image" :style="`background-image: url('https://jwtapi.jbiddulph.com/'${venue.data.data.photo})`">
            <!-- <div v-if="venue.data.data.photo" class="bg-image" :style="`background-image: url(http://jwtapi.test/${venue.data.data.photo})`"> -->
            </div>
        <div class="container start">   
            <div>{{venue.data.data.postcode}}</div>
            <div>{{venue.data.data.telephone}}</div>
            <span>{{venue.data.data.latitude}}</span>
            <span>{{venue.data.data.longitude}}</span>
            <h2 v-if="venue.data.data.events">Events</h2>
            <div class="events">
                <div v-for="event in venue.data.data.events" :key="event.id" class="event">
                    <div class="event-holder">
                        <div class="event-pic">
                            <div v-if="event.eventPhoto" class="bg-image" :style="`background:linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url('/'${event.eventPhoto});`">
                                <div class="event-title">
                                    <span class="tag is-large">{{event.eventName}}</span>
                                </div>
                                <div class="cal-box mt-4">
                                    <div class="cal-month">{{$moment(event.eventDate).format('MMM')}}</div>
                                    <div class="cal-day is-size-3">{{$moment(event.eventDate).format('DD')}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="event-details is-light">
                            <div class="details my-4">{{event.eventDetails}}</div>
                            <!-- <p><span class="tag is-large">{{$moment(event.eventDate).format('dddd, MMMM Do YYYY')}}</span></p> -->
                            <div class="times">From: <span>{{event.eventTimeStart}}</span> to <span>{{event.eventTimeEnd}}</span></div>
                            <div class="type-cost mt-4">
                                <span class="tag is-warning is-uppercase is-size-7">
                                    <v-icon>mdi-account-music</v-icon>
                                    {{event.eventType}}
                                </span>
                                <span class="tag is-warning is-uppercase is-size-5">&pound;{{event.eventCost}}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <!-- <VenuesForm /> -->
            <!-- {{venue.data.data.data}} -->
        </div>
        <LayoutFooter/>
    </div>
</template>

<script>
import {mapState} from 'vuex';
    export default {
        mounted() {

        },
        computed: {
            
        },

        async asyncData({ params, $axios }) {
            const venue = await $axios.get(`/venues/${params.venue}`)
            return { venue }
        }
    }
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 600px) {
    .events {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .event {
        
        width:49%;
        flex-direction: row!important;
    }
}
.event {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}
.event-holder {
    flex-direction: column;
    
}
.type-cost {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}
.event-details {
    background: linear-gradient($primary-80, $primary);
    padding: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: $white;
    margin-bottom: 20px;
    .times {
        color: $white;
        span {
            font-weight: bold;
        }
    }
}
.event-pic {
    position:relative;
    .bg-image {
        background-size: cover!important;
    }
}
.event-title {
    position:absolute;
    bottom: -10px;
    left:-5px;
}
.cal-box {
    border-radius: 5px;
    background: $white;
    width:50px;
    text-align: center;
    position: absolute;
    right:10px;
    top:0px;
    z-index: 1;
    .cal-month {
        text-transform: uppercase;
        background-color: $darkred;
        color: $white;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .cal-day {
        // font-weight: bold;
        border-bottom: 2px solid $lightgrey;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}
.start {
    margin-top:60px;
}
hr {
    border: 1px solid $primary;
}
.bg-image {
    width:100%;
    height: 200px;
    background-size: cover;
    background-position: center;
}
</style>