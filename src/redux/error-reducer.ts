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

const cleanErrorAC =()=>{
    return{type: 'CLEAN-ERROR'}as const
}
const wrongErrorAC = () => {
  return {type:"WRONG-ERROR"}as const
}
const limitErrorAC = () => {
    return {type:"LIMIT-ERROR"}as const
}

