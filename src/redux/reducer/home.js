const initHome = {
    food: [],
    buns: [],
    drinks: [],
    popular: [],
};

export const homeReducer = (state = initHome, action) => {
    if (action.type === 'SET_FOOD') {
        return {
            ...state,
            food: action.value
        };
    }
    if (action.type === 'SET_BUNS') {
        return {
            ...state,
            buns: action.value
        };
    }
    if (action.type === 'SET_DRINKS') {
        return {
            ...state,
            drinks: action.value
        };
    }
    if (action.type === 'SET_POPULAR') {
        return {
            ...state,
            popular: action.value
        };
    }
    return state;
};