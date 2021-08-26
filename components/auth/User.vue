<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profileio</h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ this.username }}
          
        </p>
        <p>
          <strong>Email:</strong>
          {{ this.useremail }}
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
            useremail: null,
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
              this.useremail = res.data.email
            })
          }
        },
        computed: {
            ...mapGetters({
            loggedInUser : 'auth/loggedInUser'
          })
        }
    }
</script>

<style lang="scss" scoped>

</style>