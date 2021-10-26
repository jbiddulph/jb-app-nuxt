<template>
    <div>
        <h1>Your Coordinates</h1>
        <p>Lat: {{currentLocation.lat}} Lng:{{currentLocation.lng}}</p>
        <GMap
        ref="gMap"
        language="en"
        :cluster="{options: {styles: clusterStyle}}"
        :center="currentLocation"
        :options="{fullscreenControl: false, styles: mapStyle}"
        :zoom="12"
        >
        <GMapMarker
            v-for="location in locations"
            :key="location.id"
            :position="{lat: location.lat, lng: location.lng}"
            :options="{icon: location === currentLocation ? pins.selected : pins.notSelected}"
            @click="currentLocation = location"
        >
            <GMapInfoWindow :options="{maxWidth: 200}">
            <code>
                lat: {{ currentLocation.lat }},
                lng: {{ currentLocation.lng }}
            </code>
            </GMapInfoWindow>
        </GMapMarker>
        <!-- <GMapCircle :options="circleOptions"/> -->
        </GMap>
    </div>
</template>

<script>
    export default {
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
                    lat: 45.815,
                    lng: "15.9819"
                },
                {
                    lat: "45.12",
                    lng: "16.21"
                }
                ],
                pins: {
                selected: "data:image/png;base64,iVBORw0KGgo...",
                notSelected: "data:image/png;base64,iVBORw0KGgo..."
                },
                mapStyle: ['road'],
                clusterStyle: [
                {
                    url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
                    width: 56,
                    height: 56,
                    textColor: "#fff"
                }
                ]
            }
        },
        created() {
            // get users coordinates from Browser request
            this.$getLocation({})
            .then(coordinates => {
                this.currentLocation = coordinates
            })
            .catch(error => alert(error))
        }
    }
</script>

<style lang="scss" scoped>

</style>