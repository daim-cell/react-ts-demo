import { createSlice } from "@reduxjs/toolkit"
import{AlertColor} from '@mui/material'

export type notType = {
    type: AlertColor,
    message:string,
    open: boolean
}

interface UIState {
   notification : notType|null

}

const initialState: UIState = {
    notification : null
}
const uiSlice = createSlice({
    name : 'ui',
    initialState,
    reducers:{
        showNot(state, action){
            state.notification = {
                message : action.payload.message,
                type : action.payload.type,
                open : action.payload.open 
            }
        }
    }

})

export const UIActions = uiSlice.actions;

export default uiSlice;