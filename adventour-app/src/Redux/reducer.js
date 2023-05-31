const initialState={
    isAuth:false,
    isLoading:false,
    data:[],
    detail:{},
    theme:false,
    limit:10
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case 'LIST':
            return {...state, data:action.payload}
        case 'LIMIT':
            return {...state, limit:20}
        case 'DETAIL':
            return {...state, detail:action.payload}
        case 'LIMITRESET':
            return {...state, limit:10}
        case 'THEME':
            return {...state, theme:!state.theme}
        default:
            return state;
    }
}

export {reducer}