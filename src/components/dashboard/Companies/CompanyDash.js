// import React from 'react'
import React, { Component } from 'react'
import CompanyList from './CompanyList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'

class CompanyDash extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
render(){
    const { CP_Info} = this.props;
    console.log("User Info",CP_Info)
    return(
        <div className="row">
           <div className='col s8 m12 '>
                <CompanyList CP_Info={CP_Info}/>
            </div>   
        </div>
        ) 
    }
}


const mapStateToProps = (state) => {
    console.log("++++++",state)
    return{
    // authAd:   state.firebase.auth,
    CP_Info: state.firestore.ordered.company,
    // StudentDetails: state.firestore.ordered.StudentDetails,
    }
}
export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "company"},
                // {collection: "StudentDetails"}
                ])
                )(CompanyDash)
// export default UserDash