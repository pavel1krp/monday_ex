

export const counterReducer =(state:number = 0, action: ActionType)=>{
    switch (action.type){
        case 'ADD-NUMBER':return state+1;
        case 'ZERO-NUMBER': return 0
        default:return state
    }
}
type ActionType = addNumberAcType|zeroNumberType


export type addNumberAcType  = ReturnType<typeof addNumberAc>
export type zeroNumberType  = ReturnType<typeof zeroNumber>

export const addNumberAc =()=>{
    return{type: "ADD-NUMBER"}as const
}
export const zeroNumber =()=>{
    return{type: "ZERO-NUMBER"}as const
}