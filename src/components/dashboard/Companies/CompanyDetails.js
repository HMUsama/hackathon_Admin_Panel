// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import Loader from '../Loader'
import { Link} from 'react-router-dom'
import {deleteUser} from '../../../store/actions/DeleteActionUser'


class ComapanyDetails extends Component {
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
    const { companyInfo } =this. props;
    if(companyInfo){
        console.log("``````",companyInfo)
        return(
            <div>
                 <h4 className="center white-text text-darken-3">Company Details</h4>
                 <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div>
                            <div className="card-content">
                            <span className="card-title">Company Name:{}</span>
                            <p>Email:{companyInfo.email}</p>
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
    const companyInfo= state.firestore.data.company;
    const companyInformation= companyInfo ? companyInfo[id] :null
    return{
        companyInfo:companyInformation,
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
                {collection: "company"}
                ])
                )(ComapanyDetails)