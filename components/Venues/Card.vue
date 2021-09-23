<template>    
    <div class="venue">
        <span>
            &nbsp;
        </span>
        <h2>{{ name }}</h2>
        <p>{{ address }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
            type: String,
            required: false,
            },
            address: {
            type: String,
            required: false,
            },
        }
    }
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 600px) {
    .venue {
        width: 100% !important;
        flex: auto;
        display: flex;
        flex-direction: row;
    }
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
    position: relative;
    width:200px;
    display: flex;
    flex-direction: column;
    color: #990066;
    font-weight: bold;
    flex-wrap: wrap;
    border: 1px dashed #e2e2e2;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-bottom: 30px;
    padding:5px;
    justify-content: space-evenly;
    background-color: #fff8dc;
    span {
        position: absolute;
        top: 10px;
        right: 10px;
        border: 1px solid #e2e2e2;
        border-radius: 12px;
        height: 12px;
        width: 12px;
        background-color: #ffffff;
    }
    a.navbar-item {
        flex-direction: column;
    }
}
</style>