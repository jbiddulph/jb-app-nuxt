<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
            <h2 class="title has-text-centered">Register!</h2>

            <Notification :message="error" v-if="error"/>

            <form method="post" @submit.prevent="register">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    type="text"
                    class="input"
                    name="Name"
                    v-model="name"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input
                    type="email"
                    class="input"
                    name="email"
                    v-model="email"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    type="password"
                    class="input"
                    name="password"
                    v-model="password"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input
                    type="password"
                    class="input"
                    name="password_confirmation"
                    v-model="password_confirmation"
                    required
                  />
                </div>
              </div>
              <div class="control">
                <button type="submit" class="button is-dark is-fullwidth">Register</button>
              </div>
            </form>

            <div class="has-text-centered" style="margin-top: 20px">
              Already got an account? <nuxt-link to="/auth/login">Login</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  middleware: 'guest',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      error: null
    }
  },

  methods: {
    async register() {
      try {
        await this.$axios.post('auth/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })

        await this.$auth.loginWith('local', {
          data: {
          email: this.email,
          password: this.password
          }
        })

        this.$router.push('/auth/user')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>