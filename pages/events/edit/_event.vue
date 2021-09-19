<template>
    <div>
        <LayoutNavbar/>
        <div class="container">
            <EventsForm
                :eventName="event.data[0].eventName"
                :eventDetails="event.data[0].eventDetails"
                :venue_id="event.data[0].venue_id"
                :slug="event.data[0].slug"
                :eventPhoto="event.data[0].eventPhoto"
                :eventDate="event.data[0].eventDate"
                :eventTimeStart="event.data[0].eventTimeStart"
                :eventType="event.data[0].eventType" 
                :eventCost="event.data[0].eventCost"
                :is_live="event.data[0].is_live"  
             />
        </div>
        <LayoutFooter/>
    </div>
</template>

<script>
    export default {
        async asyncData({ params, $axios }) {
            const event = await $axios.get(`/events/${params.event}`, {
                headers: {
                    Authorization: `${window.localStorage.getItem('auth._token.local')}`
                }
            })
            return { event }
        }
    }
</script>

<style lang="scss" scoped>

</style>