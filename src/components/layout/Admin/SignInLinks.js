import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
// import {signOutStd} from '../../../store/actions/authActionsStd' 
import {signOutAd} from '../../../store/actions/authActionsAd'


const SignedInLinks = (props) => {
    // console.log("StdSignedInLinks",props)
    return(
     <ul className="right">
        <li className="left">
        <NavLink to='/graph'><a>Graphs </a>
        </NavLink></li> 
        <li className="left">
        <NavLink to='/dashboard'><a>Dashboard </a>
        </NavLink></li> 
        <li><NavLink to='/'><a onClick={props.signOutAd}>LogOut </a></NavLink></li> 
     </ul>
    )
}
const mapDispatchToProps =(dispatch)=>{
    return {
        signOutAd: () =>dispatch(signOutAd())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);