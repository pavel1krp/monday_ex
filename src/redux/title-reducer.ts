const initialState = ''
export const titleReducer =(state:string=initialState, action:ActionType)=>{
    switch (action.type){
        case "CHANGE-TITLE": return action.title
        case 'CLEAN-TITLE': return ''
        default: return state
    }
}
export type ActionType = changeTitleACType|cleanTitleACType
type changeTitleACType = ReturnType<typeof changeTitleAC>
type cleanTitleACType = ReturnType<typeof cleanTitleAC>
export const changeTitleAC =(title:string)=>{
    return{type: "CHANGE-TITLE", title}as const
}
export const cleanTitleAC =()=>{
    return{type: "CLEAN-TITLE"}as const
}