// import React from 'react'
import React, { Component } from 'react'
import UsersList from './UserList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import Loader from '../Loader'

class UserDash extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
render(){
    const { userInfo} = this.props;
    console.log("User Info",userInfo)
    if(!userInfo){
        return(
            <Loader/>
        )
    }else{
    return(
        <div className="row">
           <div className='col s8 m12 '>
                <UsersList userInfo={userInfo}/>
            </div>   
        </div>
        ) 
    }
}
}

const mapStateToProps = (state) => {
    console.log("++++++",state)
    return{
    // authAd:   state.firebase.auth,
    userInfo: state.firestore.ordered.user,
    // StudentDetails: state.firestore.ordered.StudentDetails,
    }
}
export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "user"},
                // {collection: "StudentDetails"}
                ])
                )(UserDash)
// export default UserDash