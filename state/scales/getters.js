export const loadAllScales = (state) => {
    return state.scales.all_scales
}

export const chromaticScale = (state) => {
    return Object.values(state.scales.chromatic)
}

export const loadPiano = (state) => {
    let piano = [];
    
    for(let i = 0; i < 4 ; i++){        
        piano.push(
            Object.values(state.scales.chromatic)
                .map( (note) => {
                    if(note.includes('#')){
                        return {
                            note: note,
                            octave: 1 + i,
                            class:'black-key'
                        }
                    } else {
                        return {
                            note: note,
                            octave: 1 + i, 
                            class:'white-key' 
                        }
                    }
                })
        )
    }

    return piano.reduce( (acc, value) => {
        return acc.concat(value)
    },[])
}