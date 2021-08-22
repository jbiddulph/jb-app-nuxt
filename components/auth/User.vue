<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ this.username }}
          
        </p>
        <p>
          <strong>Email:</strong>
          {{ this.username }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        middleware: 'auth',
        data() {
          return {
            username: null,
            token: localStorage.getItem('auth._token.local')
          }
        },
        mounted() {
          this.showUser()
        },
        methods: {
          async showUser() {
            await this.$axios.get('user', {
              headers: {
                  Authorization: `${this.token}`
              }
            }).then((res) => {
              this.username = res.data.name
            })
          }
        },
        computed: {
            ...mapGetters(['loggedInUser'])
        }
    }
</script>

<style lang="scss" scoped>

</style>