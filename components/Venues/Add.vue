<template>
    <div>
        <h2>Add Venue</h2>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="venue.venuename" placeholder="Add Venue">
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                venue: {
                    venuename: ''
                }
            }
        },
        methods: {
            ...mapActions({
                addVenue: 'venues/addVenue'
            }),
            onSubmit(e) {
                e.preventDefault()
                this.addVenue(this.venuename)
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
    }
    input[type="text"] {
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
</style>