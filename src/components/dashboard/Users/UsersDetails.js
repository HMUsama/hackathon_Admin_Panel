// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import Loader from '../Loader'
import { Link} from 'react-router-dom'
import {deleteUser} from '../../../store/actions/DeleteActionUser'


class UserDetails extends Component {
    constructor(props){
        super(props)
        this.state={
        }
        this.Delete=this.Delete.bind(this);
    }
    Delete(){
        console.log("ID",this.props.ID)
        this.props.deleteUser(this.props.ID)
    }
   render(){
    //    debugger
    const { ID } =this.props;
    const { userInfo } =this. props;
    if(userInfo){
        console.log("``````",userInfo)
        return(
            <div>
                 <h4 className="center white-text text-darken-3">User Details</h4>
                 <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div>
                            <div className="card-content">
                            <span className="card-title">User Name:{}</span>
                            <p>Email:{userInfo.email}</p>
                            <p>Number:{}</p>
                            <p>Message:{}</p>
                            </div>
                            <div className="card-action gret lighten-4 black-text">
                            <p>Location:{}</p>
                            <br/>
                                <button className="btn waves-effect waves-light center"
                                onClick={this.Delete}
                                >Delete
                                <i className="material-icons left">delete</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
    }else{
        return(
            <Loader/>
        )
    }   
  }
}
const mapStateToProps = (state,ownProps) => {
    const id= ownProps.match.params.id;
    const userInfo= state.firestore.data.user;
    const userInformation= userInfo ? userInfo[id] :null
    return{
        userInfo:userInformation,
        ID:id
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteUser: (deleteInfo) =>dispatch(deleteUser(deleteInfo))
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
                firestoreConnect ([
                {collection: "user"}
                ])
                )(UserDetails)