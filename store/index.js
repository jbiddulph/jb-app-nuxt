import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import events from './modules/events'
import users from './modules/users'
import venues from './modules/venues'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const createStore = () => (
  new Vuex.Store({
    modules: {
      auth,
      events,
      users,
      venues,
    }
  })
)

export default createStore;