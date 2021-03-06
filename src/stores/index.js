import {createStore} from 'vuex'
import loading from './modules/loading.js'
import {StateType} from '@/stores/stateType.js'

export default createStore({
    modules: {
        [StateType.LOADER]: loading
    },
})
