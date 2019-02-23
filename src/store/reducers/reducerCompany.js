
const initState = {
    authReducesAd:null
}
const reducerCompany =( state = initState,action )=>{
    switch(action.type){
     // Delete Company Section
     case "DELETE_COMPANY_DETAILS_SUCCESSFUll":
     console.log("DELETE_DETAILS_SUCCESSFUll**authReduces**",action)
     return{
         ...state,
         authError:null
     }
     case "DELETE_COMPANY_DETAILS_ERROR":
     console.log("DELETE_DETAILS_ERROR**authReduces**")
     return{
         ...state,
         authError:'Error_failed'
     }
    default:
    return state
    }
}

export default reducerCompany;