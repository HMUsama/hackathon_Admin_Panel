// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import Loader from '../Loader'
import { Link} from 'react-router-dom'
import {deleteCompany} from '../../../store/actions/ActionCP'


class ComapanyDetails extends Component {
    constructor(props){
        super(props)
        this.state={
        }
        this.Delete=this.Delete.bind(this);
    }
    Delete(){
        console.log("ID",this.props.ID)
        this.props.deleteCompany(this.props.ID)
    }
    // chatCP(){
    //     console.log("Chat**********",this.props)
    //     // this.props.navigation.navigate("usersChat")
    // }
   render(){
    //    debugger
    const { ID } =this.props;
    const { companyInfo } =this. props;
    if(companyInfo){
        console.log("``````",companyInfo)
        return(
            <div>
                <center>
                 <h4 className="center white-text text-darken-3">Company Details</h4>
                </center>
                 <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div>
                            <div className="card-content">
                            <span className="card-title">Company Name:{}</span>
                            <img src={''} />
                            <p>Email:{companyInfo.email}</p>
                            <p>Number:{companyInfo.number}</p>
                            <p>Skills:{companyInfo.skills}</p>
                            <p>Message:{}</p>
                            </div>
                            <div className="card-action gret lighten-4 black-text">
                            <p>Location:{companyInfo.location}</p>
                            <br/>
                                <button className="btn waves-effect waves-light center"
                                onClick={this.Delete}
                                >Delete
                                <i className="material-icons left">delete</i>
                                </button>
                                <Link to={'/compantChat/'+ID} className="btn waves-effect waves-light right">
                                Go To Chat
                                <i className="material-icons left">chat</i>
                                </Link>
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
        deleteCompany: (deleteInfo) =>dispatch(deleteCompany(deleteInfo))
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
                firestoreConnect ([
                {collection: "company"}
                ])
                )(ComapanyDetails)