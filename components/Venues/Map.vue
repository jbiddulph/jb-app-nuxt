<template>
    <div>
        <GMap
        ref="gMap"
        language="en"
        :cluster="{options: {styles: clusterStyle}}"
        :center="{lat: parseFloat(venue.data.data.latitude), lng: parseFloat(venue.data.data.longitude)}"
        :options="{fullscreenControl: false, styles: mapStyle}"
        :zoom="16"
        >
        <GMapMarker
            v-for="location in locations"
            :key="location.id"
            :position="{lat: parseFloat(venue.data.data.latitude), lng: parseFloat(venue.data.data.longitude)}"
            :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
            @click="currentLocation = location"
        >
            <GMapInfoWindow :options="{maxWidth: 200}">
            <code>
                lat: {{ venue.data.data.latitude }},
                lng: {{ venue.data.data.longitude }}
            </code>
            </GMapInfoWindow>
        </GMapMarker>
        <!-- <GMapCircle :options="circleOptions"/> -->
        </GMap>
    </div>
</template>

<script>
    export default {
        props: {
            venue: Object,
        },
        data() {
            return {
                currentLocation: {
                    lat: 0,
                    lng: 0
                },
                // circleOptions: {
                // ...
                // },
                locations: [
                {
                    lat: 44.933076,
                    lng: 15.629058
                },
                {
                    lat: 44.933076,
                    lng: 15.629058
                }
                ],
                pins: {
                selected: "data:image/png;base64,iVBORw0KGgo...",
                notSelected: "data:image/png;base64,iVBORw0KGgo..."
                },
                mapStyle: ['road'],
                clusterStyle: [
                {
                    url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m4.png",
                    width: 76,
                    height: 76,
                    textColor: "#ff04ec"
                }
                ]
            }
        },
        async created() {
            // get users coordinates from Browser request
            await this.$getLocation({})
            .then(coordinates => {
                console.log('coords: ', coordinates)
                this.currentLocation.lat = coordinates.lat
                this.currentLocation.lng = coordinates.lng
            })
            .catch(error => alert(error))
        }
    }
</script>

<style lang="scss" scoped>

</style>