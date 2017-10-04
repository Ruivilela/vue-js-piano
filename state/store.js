import Vue from 'vue';
import Vuex from 'vuex'; 

// import states
import keys from './keys/state';
import scales from './scales/state';
import chords from './chords/state';  

// import mutations 
import { 
    SELECT_ROOT,
    PLAY_NOTES 
} from './keys/mutations'; 
import { SELECT_SCALE } from './scales/mutations'; 
import { SELECT_CHORD } from './chords/mutations';

// import actions 
import { 
    selectRoot,
    playNotes 
} from './keys/actions'; 
import { selectScale } from './scales/actions';
import { selectChord } from './chords/actions';

// import getters
import { 
    loadAllScales,
    chromaticScale,
    loadPiano
} from './scales/getters';

import {
    loadChords
} from './chords/getters'; 

Vue.use(Vuex); 

const store = new Vuex.Store({
    state:{
        keys,
        scales,
        chords
    }, 
    mutations:{
        SELECT_ROOT,
        SELECT_SCALE,
        PLAY_NOTES,
        SELECT_CHORD  
    },
    actions:{
        selectRoot,
        selectScale,
        playNotes,
        selectChord
    },
    getters:{
        load_all_scales: loadAllScales,
        chromatic_scale: chromaticScale, 
        load_piano: loadPiano,
        load_chords: loadChords    
    }
}); 

export default store;