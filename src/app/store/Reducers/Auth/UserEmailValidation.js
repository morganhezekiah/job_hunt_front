import { USER_EMAIL_VALIDATION_ERROR, USER_EMAIL_VALIDATION_SUCCESS, USER_EMAIL_VALIDATION_RESET } from "../../Actions/Auth/UserEmailValidation"

const initialState = {
    message:"",
    error:false,

}


const EmailActivation = (state= initialState, action)=>{
    switch(action.type){
        case USER_EMAIL_VALIDATION_ERROR:
            return {
                ...state,
                message:action.payload.message,
                error:true
            }
        case USER_EMAIL_VALIDATION_SUCCESS:
            return {
                ...state,
                message:action.payload.message,
                error:false
            }
        case USER_EMAIL_VALIDATION_RESET:
            return {
                ...state,
                message:'',
                error:false
            }
        default: return state;
    }
}


export default EmailActivation;