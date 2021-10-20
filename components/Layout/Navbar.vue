<template>
  <div class="nav-bar-holder is-paddingless">
    <nav :class="isAuthenticated ? 'navbar is-warning is-fixed-top' : 'navbar is-light is-fixed-top'">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="~/assets/images/logo.png" alt="Logo">
        </nuxt-link>
        <div class="navbar-burger" data-target="navMenu" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <div v-if="!isAuthenticated" class="main-menu">
            <nuxt-link class="navbar-item is-size-4 has-text-centered" to="/">Home</nuxt-link>
            <nuxt-link class="navbar-item is-size-4 has-text-centered" to="/events">Events</nuxt-link>
            <nuxt-link class="navbar-item is-size-4 has-text-centered" to="/venues">Venues</nuxt-link>
          </div>

          <div v-if="isAuthenticated" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-size-4">
              Events
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item is-size-5 has-text-centered" to="/admin/events/add">Add Event</nuxt-link>
              <nuxt-link class="navbar-item is-size-5 has-text-centered" to="/admin/events">Events</nuxt-link>
            </div>
          </div>
          <div v-if="isAuthenticated" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-size-4">
              Venues
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item is-size-5 has-text-centered" to="/admin/venues/add">Add Venue</nuxt-link>
              <nuxt-link class="navbar-item is-size-5 has-text-centered" to="/admin/venues">Venues</nuxt-link>
            </div>
          </div>
          <div v-if="isAuthenticated" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link is-size-4">
              Users
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item is-size-5 has-text-centered" to="/admin/users/add">Add User</nuxt-link>
              <nuxt-link class="navbar-item is-size-5 has-text-centered" to="/admin/users">Users</nuxt-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <div v-if="!isAuthenticated" class="navbar-dropdown">
              <!-- <nuxt-link class="navbar-item" to="/auth/register">Register</nuxt-link>
              <nuxt-link class="navbar-item" to="/auth/login">Log In</nuxt-link> -->
            </div>
            <div v-else class="navbar-dropdown">
              <div class="columns is-mobile">
                <nuxt-link class="navbar-item column is-size-6 has-text-centered" to="/auth/user">{{ loggedInUser.name }}</nuxt-link>
                <a class="navbar-item has-text-danger column is-size-6 has-text-centered" @click="logout">Logout</a>
              </div>
            </div>
          </div>
          <!-- <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                  <span class="icon">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    username: String,
    loggedIn: Boolean,
  },
  data () {
      return {
          token: {},
          showNav: false
      }
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    },
  },
  computed: {
    ...mapGetters({
      isAuthenticated : 'auth/isAuthenticated',
      loggedInUser : 'auth/loggedInUser'
    })
  }
}
</script>

<style scoped lang="scss">
.navbar-brand {
  a {
    padding: 0!important;
    img {
      max-height: 3rem!important;
    }
  }
}
.main-menu {
  display: flex;
  flex-direction: column;

}
.nav-bar-holder {
  height: 36px;
}
</style>