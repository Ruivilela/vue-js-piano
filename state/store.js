import Vue from 'vue'
import Vuex from 'vuex'; 

// import states
import keys from './keys/state';
import scales from './scales/state'; 

// import mutations 
import { PRESS_KEYS } from './keys/mutations'; 
import { SELECT_SCALE } from './scales/mutations'; 

// import actions 
import { pressKeys } from './keys/actions'; 
import { selectScale } from './scales/actions'; 

// import getters
import { 
    loadAllScales,
    chromaticScale,
    loadPiano
} from './scales/getters'

Vue.use(Vuex); 

const store = new Vuex.Store({
    state:{
        keys,
        scales
    }, 
    mutations:{
        PRESS_KEYS,
        SELECT_SCALE 
    },
    actions:{
        pressKeys,
        selectScale
    },
    getters:{
        load_all_scales: loadAllScales,
        chromatic_scale: chromaticScale, 
        load_piano: loadPiano
    }
}); 

export default store