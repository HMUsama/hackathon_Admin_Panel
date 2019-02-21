const initState = {
    authReducesAd:null
}
const authReducesAd =( state = initState,action )=>{
    switch(action.type){
        case "Login_Error":
        console.log("Login_Error**authReduces**")
    return{
        ...state,
        authError:'Login_failed'
    }
    case "Login_SuccessFull_Admin":
        console.log("Login_SuccesFull**authReduces**")
    return{
        ...state,
        authError:null
    }
    case "LogOut_SuccessFull":
    // this.history.navigate.navigation("/")
    console.log("LogOut_SuccesFull**authReduces**")
    return state;
    // Delete User Section
    case "DELETE_STD_DETAILS_SUCCESSFUll":
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

export default authReducesAd;