<template>
    <div>
        <div class="title-button">
            <h1 class="is-size-2">Towns</h1>
            <button v-if="isAuthenticated" class="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true" @click="showModal">+ Add Venue</button>
        </div>
        <div class="towns-list">
            <div v-for="town in towns" v-bind:key="town.id" class="town">
                <nuxt-link class="button is-warning is-size-4" :to="`/towns/${town.town}`">
                    {{ town.town }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
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
        }
    }
</script>

<style lang="scss" scoped>
.container {
    max-width: 1140px;
    margin: 0 auto;
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
.towns-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin:  30px 0px 60px 0px;
    p {
        font-weight: 300;
    }
}
@media only screen and (max-width: 600px) {
    .towns-list {
        flex-direction: row;
    }
    .town {
        margin: 0 15px 15px 0;
    }
}

</style>