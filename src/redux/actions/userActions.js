import { authtypes } from "../constants/userConstant"



const setUserID=(userID)=>{
    return {
        type:authtypes.SET_USER_UID,
        payload:userID
    }
}

export {setUserID}