const filter = (state= {},action) => {
    switch(action.type){
        case 'SET_FILTER':
            return {...state,
                    type: action.filter
                }
        default:
            return state
    }
        
}

export default filter