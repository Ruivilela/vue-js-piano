const piano = Synth.createInstrument('piano');

export const SELECT_ROOT = ( state, root ) => {
    state.keys.root = root
}

export const PLAY_NOTES = (state) => {
    const notes_array = [
        { 
            note:'C', octave: 3
        }, 
        {
            note:'E', octave: 3
        },
        {
            note:'G', octave: 3
        }
    ]

    notes_array.map((note) => {
        piano.play(
            note.note,
            note.octave,
            4
        )
    }); 
}
