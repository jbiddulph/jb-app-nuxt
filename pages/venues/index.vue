<template>
    <div>
        <LayoutNavbar/>
        <h2>Venues</h2>
        <LayoutFooter/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        // mounted() {
        //     this.getVenues()
        // },
        computed: {
            ...mapGetters(['getVenues'])
        }

    }
</script>

<style lang="scss" scoped>

</style>