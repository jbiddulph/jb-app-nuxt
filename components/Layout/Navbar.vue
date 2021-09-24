<template>
  <div class="bd-example is-paddingless">
    <nav :class="isAuthenticated ? 'navbar is-warning is-fixed-top' : 'navbar is-light is-fixed-top'">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          
            <img src="~/assets/images/logo.png" alt="Logo" width="112" height="28">
          
        </a>
        <div class="navbar-burger" data-target="navMenu" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Home
          </a>
          <div v-if="isAuthenticated" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Events
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/events/add">Add Event</nuxt-link>
              <nuxt-link class="navbar-item" to="/events">Events</nuxt-link>
            </div>
          </div>
          <div v-if="isAuthenticated" class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Venues
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/venues/add">Add Venue</nuxt-link>
              <nuxt-link class="navbar-item" to="/venues">Venues</nuxt-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Admin
            </a>
            <div v-if="!isAuthenticated" class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/auth/register">Register</nuxt-link>
              <nuxt-link class="navbar-item" to="/auth/login">Log In</nuxt-link>
            </div>
            <div v-else class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/auth/user">{{ loggedInUser.name }}</nuxt-link>
              <a class="navbar-item has-text-danger" @click="logout">Logout</a>
            </div>
          </div>
          <div class="navbar-item">
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
          </div>
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