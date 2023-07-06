import { PRODUCT_DEL, PRODUCT_FAIL, PRODUCT_REQ, PRODUCT_SUCC } from "./actiontype"

const initial={
    isLoad:false,
    isErr:false,
    product:[]
}

export const reducer=(state=initial,{type,payload})=>{
    switch(type){
        case PRODUCT_REQ:
            return {...state,isLoad:true}
        case PRODUCT_SUCC:
            console.log(state.product)
            return {...state,isLoad:false,product:payload}
        case PRODUCT_FAIL:
            return {...state,isErr:true}
        case PRODUCT_DEL:
            return {...state,isLoad:false,product:payload}
        default:
            return state
    }
}