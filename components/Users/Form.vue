<template>
    <div>
        <h2 class="is-size-2">{{ this.title }}</h2>
        <nuxt-link v-if="this.$route.params.user" class="button is-warning is-small" :to="`/users`">
            <svg style="width:24px;height:24px;margin-right:15px;" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.31,21 7,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12" />
            </svg>
            Back to Users
        </nuxt-link>
        <div v-if="user.photo" class="image">
            <img :src="`http://jwtapi.test/${user.photo}`" height="100" />
        </div>
        <div class="add">
            <UploadImage :folder="'users'" :image.sync="user.photo" />
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input type="text" v-model="user.name" placeholder="user name" :class="{
                        'is-invalid':$v.user.name.$error, 'is-valid':!$v.user.name.$invalid}">
                    <div v-if="user.name" class="invalid-feedback">
                        <span v-if="!$v.user.name.required">Name is required</span>
                        <span v-if="!$v.user.name.minLength">Name must have at least {{ $v.user.name.$params.minLength.min }} characters</span>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input type="text" v-model="user.email" placeholder="Event Type" :class="{
                        'is-invalid':$v.user.email.$error, 'is-valid':!$v.user.email.$invalid}">
                    <div v-if="user.email" class="invalid-feedback">
                        <span v-if="!$v.user.email.required">Email details is required</span>
                        <span v-if="!$v.user.email.minLength">Email details must have at least {{ $v.event.eventDetails.$params.minLength.min }} characters</span>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Photo</label>
                <div class="control">
                    <input type="text" readonly v-model="user.photo" placeholder="User Photo" :class="{
                        'is-invalid':$v.user.photo.$error, 'is-valid readonly':!$v.user.photo.$invalid}">
                    <div v-if="user.photo" class="invalid-feedback">
                        <span v-if="!$v.user.photo.required">User photo is required</span>
                    </div>
                </div>
            </div>
            <input v-if="this.$route.params.user" type="submit" @click="editUser" :value="this.title" class="button secondary">
            <input v-else type="submit" @click="addNewUser" :value="this.title" class="button secondary">
        </div>
    </div>
</template>
<script>
import { required, minLength, maxLength, between} from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'
    export default {
        data() {
            return { 
                defaultUser: {
                    name: '',
                    email: '',
                    photo: '',
                },
                title: '',   
            }
        },
        validations: {
            user: {
                name: {
                    required,
                    minLength: minLength(3),
                },
                email: {
                    required,
                },
                photo: {
                    required,
                }
            }
        },
        mounted() {
            if (this.$route.params.user) {
                this.title = 'Edit User'
            } else {
                this.title = 'Add User'
            }
        },
        methods: {
            ...mapActions({
                addUser: 'users/addUser'
            }),
            
            addNewUser() { 
                this.addUser(this.user)
                this.$router.push('/users')
            },
            async editUser() {
                await this.$store.dispatch('users/editUser', this.user);
                this.$router.push('/users')
            }   
        },
        computed: {
            ...mapGetters('users', {
                users: 'getUsers'
            }),
            user() {
                return this.users.find(u => u.id == this.$route.params.user) ?? this.defaultUser
            }
        }
    }
</script>

<style scoped lang="scss">
.image img {
    height: 100px;
    width: auto;
}
.readonly {
    color: $lightgrey;
}
    form {
        display: flex;
        width: 100%;
        flex-direction: column;
    }
    input[type="text"], input[type="number"] {
        border: 1px solid $secondary;
        padding:10px;
        flex: 10;
        outline: 0;
    }
    input[type="submit"] {
        flex: 2;
        cursor: pointer;
        background-color: $secondary;
        color: #fff;
    }
    input[type="text"], input[type="number"] {
        width: 100%;
    }
    .is-valid {
        border: 1px solid #20aa27!important;
    }
    .v-btn--active {
        color: #ff9966!important;
    }

    .v-time-picker-clock__hand {
        background-color: $primary!important;
    }
    .accent {
        background-color: $primary!important;
    }
    .theme--light.v-card {
        background-color: $primary!important;
    }
</style>