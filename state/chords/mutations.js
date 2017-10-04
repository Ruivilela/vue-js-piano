export const SELECT_CHORD = ( state, chord ) => {
    state.chords.selected = true; 
    state.chords.selected_chord = chord; 
}