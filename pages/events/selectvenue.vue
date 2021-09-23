<template>
    <div>
        <LayoutNavbar/>
        <div class="container">
            <h2>Select a venue</h2>
            <VenuesSearch />
        </div>
        <LayoutFooter/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                search: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>