<template>
    <div class="text-center mt-4 mb-4">
        <h2 class="mb-2">Upload Image</h2>
        <form @submit.prevent="upload()">
            <input @change="handleOnChange" type="file">
            <button class="button secondary mt-2">Upload</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'UploadImage',
        props: {
            folder: {
            type: String,
            required: false,
            }
        },
        data() {
            return {
                image: ''
            }
        },
        methods: {
            handleOnChange(e) {
                this.image = e.target.files[0]
            },
            upload() {
                const formData = new FormData
                formData.set('image', this.image)
                
                this.$axios.post('/upload', formData).then(res => {
                    this.$emit('update:image', res.data)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.secondary {
    background-color: $secondary;
    color: #fff;
    font-weight: bold;
}
</style>