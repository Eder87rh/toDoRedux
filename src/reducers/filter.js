const filter = (state= {},action) => {
    //alert(action.filter)
    
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