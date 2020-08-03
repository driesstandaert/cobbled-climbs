const filtersReducerDefaultState = {
    idName: '',
    theme: ''
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SELECT_CLIMB':
            return {
                ...state,
                idName: action.idName
            }
        case 'SELECT_THEME':
            return { 
                ...state, 
                theme: action.theme
            }
        default:
            return state;
    } 
};

export default filtersReducer;