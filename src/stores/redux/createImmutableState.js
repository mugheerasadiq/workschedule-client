export const createImmutableState = ( state, key, value ) => {
    return state.set(key, state.get(key).merge(value));
}