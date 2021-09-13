import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import events from './modules/events'
import venues from './modules/venues'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const createStore = () => (
  new Vuex.Store({
    modules: {
      auth,
      events,
      venues,
    }
  })
)

export default createStore;