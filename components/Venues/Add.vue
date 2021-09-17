<template>
    <div>
        <h2>Add Venue</h2>
        <div class="add">
            <form @submit="postData" method="post">
                <div class="field">
                    <label class="label">Venue Name</label>
                    <div class="control">
                        <input type="text" v-model="venue.venuename" placeholder="Add Venue" :class="{
                            'is-invalid':$v.venue.venuename.$error, 'is-valid':!$v.venue.venuename.$invalid}">
                        <div v-if="venue.venuename" class="invalid-feedback">
                            <span v-if="!$v.venue.venuename.required">Venue name is required</span>
                            <span v-if="!$v.venue.venuename.minLength">Venue name must have at least {{ $v.venue.venuename.$params.minLength.min }} characters</span>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">FSA ID</label>
                    <div class="control">
                        <input type="number" v-model="venue.fsa_id" placeholder="FSA ID">
                    </div>
                </div>
                <div class="field">
                    <label class="label">User ID</label>
                    <div class="control">
                        <input type="number" v-model="venue.user_id" placeholder="User ID">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input type="text" v-model="venue.email" placeholder="email">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Slug</label>
                    <div class="control">
                        <input type="text" v-model="venue.slug" placeholder="Slug">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Venue Type</label>
                    <div class="control">
                        <input type="text" v-model="venue.venuetype" placeholder="Venue type">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Address</label>
                    <div class="control">
                        <input type="text" v-model="venue.address" placeholder="Address">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Address 2</label>
                    <div class="control">
                        <input type="text" v-model="venue.address2" placeholder="Address2">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Town</label>
                    <div class="control">
                        <input type="text" v-model="venue.town" placeholder="Town" :class="{
                            'is-invalid':$v.venue.town.$error, 'is-valid':!$v.venue.town.$invalid}">
                        <div v-if="venue.town" class="invalid-feedback">
                            <span v-if="!$v.venue.town.required">Town is required</span>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label">County</label>
                    <div class="control">
                        <input type="text" v-model="venue.county" placeholder="County">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Post Code</label>
                    <div class="control">
                        <input type="text" v-model="venue.postcode" placeholder="Post Code">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Postal Search</label>
                    <div class="control">
                        <input type="text" v-model="venue.postalsearch" placeholder="Postal Search">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Telephone</label>
                    <div class="control">
                        <input type="text" v-model="venue.telephone" placeholder="Telephone">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Easting</label>
                    <div class="control">
                        <input type="text" v-model="venue.easting" placeholder="Easting">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Northing</label>
                    <div class="control">
                        <input type="text" v-model="venue.northing" placeholder="Northing">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Latitude</label>
                    <div class="control">
                        <input type="text" v-model="venue.latitude" placeholder="Latitude">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Longitude</label>
                    <div class="control">
                        <input type="text" v-model="venue.longitude" placeholder="Longitude">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Local Authority</label>
                    <div class="control">
                        <input type="text" v-model="venue.local_authority" placeholder="Local Authority">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Website</label>
                    <div class="control">
                        <input type="text" v-model="venue.website" placeholder="Website">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Photo</label>
                    <div class="control">
                        <input type="text" v-model="venue.photo" placeholder="Photo">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Live</label>
                    <div class="control">
                        <input type="text" v-model="venue.is_live" placeholder="Live">
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
                venue: {
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
            }
        },
        validations: {
            venue: {
                venuename: {
                    required,
                    minLength: minLength(3),
                },
                town: {
                    required,
                },
            }
        },
        methods: {
            ...mapActions({
                addVenue: 'venues/addVenue'
            }),
            postData(e) {
                
                e.preventDefault()
                // this.$v.$validate()
                // if(!this.$v.$error){
                    console.log('e: ', e.fsa_id)
                    this.addVenue(this.venue)
                // } else {
                //     alert('form failed validation')
                // }
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
    input[type="text"], input[type="number"] {
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
    input[type="text"], input[type="number"] {
        width: 100%;
    }
    .is-valid {
        border: 1px solid #20aa27!important;
    }
</style>