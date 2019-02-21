import React from 'react'
import {connect} from 'react-redux'
import SignedInLinks from './Admin/SignInLinks'
import SignedOutLinks from './Admin/SignOutLinks'
import Dashboard from '../dashboard/Dashboard'



const Navbar = (props) =>{

    const { authAd} = props;
    const link= authAd.uid ? <SignedInLinks/>:<SignedOutLinks/>
    return(
        <div>

        <nav className="nav-wrapper teal darken-2">
                {link}
        </nav>
        <center>
            {
                authAd.uid ==true ? <Dashboard/>:null
            }
                </center>
        </div>
    )
}

const mapStateToProps=(state)=>{

    return{
        authAd:    state.firebase.auth,
    }
}

export default connect(mapStateToProps)(Navbar);
// export default Navbar;
