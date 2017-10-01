export const PRESS_KEYS = ( state, scale ) => {
    state.keys.pressed_keys.push(scale); 
    state.keys.scale = scale; 
}