<template>    
    <div>
        <div class="venue">
            <div class="text">
                <h2 class="is-size-3">{{ venue.venuename }}</h2>
                <p>{{ venue.address }}</p>
            </div>
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
.text {
    padding:10px;
}
.button {
    width: 100%;
    padding:10px;
}
.bg-image {
    display: flex;
    height:200px;
    background-size: cover;
    background-position: center;
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
        line-height: 34px;
    }
    width: 100%;
    height: auto;
    color: $offwhite;
    flex-wrap: wrap;
    align-content: center;
    border-bottom: 2px dashed $offwhite;
    a {
        display: flex;
        flex-direction: column;
    }
    a.navbar-item {
        flex-direction: column;
    }
}

</style>