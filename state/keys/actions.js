export function selectRoot({commit}, scale) {
    commit('SELECT_ROOT', scale)
}

export function playNotes({commit}, instrument){
    commit('PLAY_NOTES')
}