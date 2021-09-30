<template>    
    <div>
        <div v-if="!isAuthenticated" class="venue">
            <nuxt-link class="button is-warning is-small" :to="`/venues/${venue.id}`">
                <h2>{{ venue.venuename }}</h2>
                <p>{{ venue.address }}</p>
            </nuxt-link>
        </div>
        <div v-else class="venue">
            <h2>{{ venue.venuename }}</h2>
            <p>{{ venue.address }}</p>
            <nuxt-link class="button is-warning is-small" :to="`/admin/venues/${venue.id}`">
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
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        props: {
            venue: {
            type: Object,
            required: false,
            },
        },
        methods: {
            deleteVenue(venue) {
                let response = confirm(`Are you sure you want to delete, ${venue.venuename}`)
                if(response) {
                    this.$store.dispatch('venues/deleteVenue', venue)
                }
            }
        },
        computed: {
            ...mapGetters({
                isAuthenticated : 'auth/isAuthenticated',
            })
        }
    }
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
    .venue {
        width: 100% !important;
        flex: auto;
        display: flex;
        flex-direction: column;
    }
}
.box {
    display: flex;
}
.venueholder {
    display: flex;
    flex: auto;
}
.venue {
    h2 {
        font-size: 1.6rem;
        line-height: 28px;
    }
    color: #990066;
    flex-wrap: wrap;
    border: 1px solid #e2e2e2;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-bottom: 30px;
    padding:5px;
    justify-content: space-evenly;
    background-color: #fff8dc;
    a {
        display: flex;
        flex-direction: column;
    }
    a.navbar-item {
        flex-direction: column;
    }
}

</style>