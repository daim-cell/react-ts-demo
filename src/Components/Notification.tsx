import {Alert} from '@mui/material'
import { UIActions, notType } from '../store/ui-slice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'

const Notification = (props:notType) =>{
    const notif = useSelector((state:RootState) => state.ui.notification)
    const dispatch = useDispatch()
    const handleClose = () =>{
        dispatch(UIActions.showNot({
            open:false,
            message:''
        }))
    }
    return(
        <div>
            {notif!==null && notif.open &&<Alert onClose={handleClose} severity={props.type}> {props.message}</Alert>}
        </div>
    )
}

export default Notification