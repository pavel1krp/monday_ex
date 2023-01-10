const initialState = '';
export const errorReducer =(state:string = initialState, action: actionType):string=>{
    switch (action.type){
        case 'CLEAN-ERROR' :return ''
        case 'WRONG-ERROR' :return 'Wrong Value!'
        case 'LIMIT-ERROR' :return 'Limit of messages is exceeded.'
        default: return state
    }
}
export type actionType = cleanErrorACType|wrongErrorACType|limitErrorACType
type cleanErrorACType = ReturnType<typeof cleanErrorAC>
type wrongErrorACType = ReturnType<typeof wrongErrorAC>
type limitErrorACType = ReturnType<typeof limitErrorAC>

export const cleanErrorAC =()=>{
    return{type: 'CLEAN-ERROR'}as const
}
export const wrongErrorAC = () => {
  return {type:"WRONG-ERROR"}as const
}
export const limitErrorAC = () => {
    return {type:"LIMIT-ERROR"}as const
}

