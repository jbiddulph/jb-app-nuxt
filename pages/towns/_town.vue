<template>
    <div>
        <LayoutNavbar/>
        <div class="container start">
            <nuxt-link v-if="this.$route.params.town" class="tag is-warning is-uppercase is-size-6" :to="`/venues`">
                <svg style="width:24px;height:24px;margin-right:15px;" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12" />
                </svg>
                Back to Venues
            </nuxt-link>
            <h1>{{this.$route.params.town}}</h1>
        </div>
        <div class="mt-6 mx-3" v-for="venue in venue.data.data" :key="venue.id">
            <VenuesCard 
                :venue="venue"
            />
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
            const venue = await $axios.get(`/venues/town/${params.town}`)
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
.postcode-phone {
    display: flex;
    justify-content: space-between;
}
.venue-image {
    width:100%;
    height: auto;
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