const initState = {
    authReducesAd:null
}
const reducerUser =( state = initState,action )=>{
    switch(action.type){
    // Delete User Section
    case "DELETE_USER_DETAILS_SUCCESSFUll":
    console.log("DELETE_DETAILS_SUCCESSFUll**authReduces**",action)
    return{
        ...state,
        authError:null
    }
    case "DELETE_USER_DETAILS_ERROR":
    console.log("DELETE_DETAILS_ERROR**authReduces**")
    return{
        ...state,
        authError:'Error_failed'
    }
    // Delete User Section End
    
    // Start Chat Section
    case "CHAT_SUCCESSFULL_ADD":
    console.log("CHAT_SUCCESSFULL_ADD**authReduces**")
    return{
        ...state,
        authError:null
    }
    case "CHAT_ERROR":
    console.log("CHAT_ERROR**authReduces**")
    return{
        ...state,
        authError:'Error_failed'
    }
    default:
    return state
    }
}

export default reducerUser;