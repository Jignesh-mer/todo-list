import Vue from 'vue';
import Vuex from 'vuex'

import TodoModule from './modules/TodoModule'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		TodoModule
	}
})