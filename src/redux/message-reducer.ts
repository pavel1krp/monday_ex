const initialState:string[] = []

export const messageReducer =(state:string[]=initialState, action:ActionType):string[]=>{
    switch (action.type){
        case "ADD-MESSAGE": return [...state, action.payload.title]
        case "CLEAN-MESSAGE": return []
        case "DELETE-LAST-MESSAGE":
            state.pop()
            return [...state]
        default : return state
    }
}
type ActionType = addMessageACType|cleanMessageACType|deleteLastMessageACType
type addMessageACType = ReturnType<typeof addMessageAC>
type cleanMessageACType = ReturnType<typeof cleanMessageAC>
type deleteLastMessageACType = ReturnType<typeof deleteLastMessageAC>

export const addMessageAC =(title:string)=> {
    return {type: "ADD-MESSAGE" , payload:{title}}as const
}
export const cleanMessageAC =()=> {
    return {type: "CLEAN-MESSAGE"}as const
}
export const deleteLastMessageAC  = ()=>{
    return{type: "DELETE-LAST-MESSAGE"} as const
}