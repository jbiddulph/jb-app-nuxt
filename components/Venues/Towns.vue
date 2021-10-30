<template>
    <div class="pc-search-holder">
        <div class="container">
            <div class="towns-title-search">
                <h1 class="is-size-2 mr-4 text-center">Find <span>venue</span> by <span>town</span></h1>
                <div class="towns-list">
                    <div v-for="town in towns" v-bind:key="town.id" class="mr-2">
                        <nuxt-link class="tag is-warning is-uppercase is-size-6" :to="`/towns/${town.town}`">
                            {{town.town}}
                        </nuxt-link>
                    </div>
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
                towns: []
            }
        },
        methods: {
            getTowns() {
                try {
                    this.$axios.get(`venue/towns`).then(res => {
                        console.log('res: ', res)
                        this.towns = res.data
                    })
                    
                } catch (error) {
                    console.error('Error:', error)
                }  
            }
        },
        mounted() {
            this.getTowns()
        },
        computed: {
            ...mapGetters(
                'venues', {
                    venues: 'getVenues'
                },
            )
        }
    }
</script>

<style lang="scss" scoped>
h1 {
    color: $white;
    font-weight: lighter;
    line-height: 2.5rem;
}
.pc-search-holder {
    background: linear-gradient($secondary-80, $secondary);
    // background-color: $primary-80!important;
}
.postcode-search {
    width: 300px !important;
    background-color: $primary-20;
    border: 1px solid $white;
    color: $white;
    font-weight: 300;
}
.towns-title-search {
    justify-content:flex-start;
    align-items: center;
    h1 {
        width: auto;
        span {
        font-weight:300;
        }
    }
}
.towns-list {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
}
.searched-venue-list {
    display: flex;
    
    flex-direction: column;
    flex-wrap: wrap;
    margin:  30px 0px 60px 0px;
    text-align: center;
    p {
        font-weight: 300;
    }
}
@media only screen and (max-width: 600px) {
    h1 {
        margin-bottom: 20px;
    }
    .title-search {
        flex-direction: column;
    }
}
</style>