import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST } from "./actiontype"

const initial={
    isLoad:false,
    isErr:false,
    isAuth:false,
    token:""
}
export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case LOGIN_REQUEST:
            return {...state,isLoad:true}
        case LOGIN_SUCCESS:
            return {...state,isLoad:false,isAuth:true,token:payload}
        case LOGIN_FAILURE:
            return {...state,isErr:true}
        case LOGOUT_REQUEST:
            return initial;
        default:
            return state
    }
}