import { authtypes } from "../constants/userConstant";
const initialState={
    userID:''
}
const userReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case authtypes.SET_USER_UID:
            return {
                ...state,userID:actions.payload
            }
        default:
            return state;
    }
}

export default userReducer;