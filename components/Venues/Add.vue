<template>
    <div>
        <h2>Add Venue</h2>
        <div class="add">
            <form @submit="onSubmit">
                <div class="field">
                    <label class="label">Venue Name</label>
                    <div class="control">
                        <input type="text" v-model.trim="$v.venuename.$model" placeholder="Add Venue" :class="{
                            'is-invalid':$v.venuename.$error, 'is-valid':!$v.venuename.$invalid}">
                        <!-- <div class="valid-feedback">your vanue name is valid</div> -->
                        <div class="invalid-feedback">
                            <span v-if="!$v.venuename.required">Venue name is required</span>
                            <span v-if="!$v.venuename.minLength">Venue name must have at least {{ $v.venuename.$params.minLength.min }} characters</span>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">FSA ID</label>
                    <div class="control">
                        <input type="text" v-model="fsa_id" placeholder="FSA ID">
                    </div>
                </div>
                <div class="field">
                    <label class="label">User ID</label>
                    <div class="control">
                        <input type="text" v-model="user_id" placeholder="User ID">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input type="text" v-model="email" placeholder="email">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Slug</label>
                    <div class="control">
                        <input type="text" v-model="slug" placeholder="Slug">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Venue Type</label>
                    <div class="control">
                        <input type="text" v-model="venuetype" placeholder="Venue type">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Address</label>
                    <div class="control">
                        <input type="text" v-model="address" placeholder="Address">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Address 2</label>
                    <div class="control">
                        <input type="text" v-model="address2" placeholder="Address2">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Town</label>
                    <div class="control">
                        <input type="text" v-model="town" placeholder="Town">
                    </div>
                </div>
                <div class="field">
                    <label class="label">County</label>
                    <div class="control">
                        <input type="text" v-model="county" placeholder="County">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Post Code</label>
                    <div class="control">
                        <input type="text" v-model="postcode" placeholder="Post Code">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Postal Search</label>
                    <div class="control">
                        <input type="text" v-model="postalsearch" placeholder="Postal Search">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Telephone</label>
                    <div class="control">
                        <input type="text" v-model="telephone" placeholder="Telephone">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Easting</label>
                    <div class="control">
                        <input type="text" v-model="easting" placeholder="Easting">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Northing</label>
                    <div class="control">
                        <input type="text" v-model="northing" placeholder="Northing">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Latitude</label>
                    <div class="control">
                        <input type="text" v-model="latitude" placeholder="Latitude">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Longitude</label>
                    <div class="control">
                        <input type="text" v-model="longitude" placeholder="Longitude">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Local Authority</label>
                    <div class="control">
                        <input type="text" v-model="local_authority" placeholder="Local Authority">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Website</label>
                    <div class="control">
                        <input type="text" v-model="website" placeholder="Website">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Photo</label>
                    <div class="control">
                        <input type="text" v-model="photo" placeholder="Photo">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Live</label>
                    <div class="control">
                        <input type="text" v-model="is_live" placeholder="Live">
                    </div>
                </div>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>
<script>
import { required, minLength, maxLength, between} from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
    export default {
        data() {
            return { 
                fsa_id: '',
                user_id: '',
                email: '',
                venuename: '',
                slug: '',
                venuetype: '',
                address: '',
                address2: '',
                town: '',
                county: '',
                postcode: '',
                postalsearch: '',
                telephone: null,
                easting: null,
                northing: null,
                latitude: null,
                longitude: null,
                local_authority: null,
                website: '',
                photo: '',
                is_live: 0,
            }
        },
        validations: {
            venuename: {
                required,
                minLength: minLength(3),
            },
            town: {
                required,
            },
        },
        methods: {
            ...mapActions({
                addVenue: 'venues/addVenue'
            }),
            onSubmit(e) {
                e.preventDefault()
                this.addVenue(this.venue)
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
        width: 100%;
        flex-direction: column;
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
    input[type="text"] {
        width: 100%;
    }
</style>