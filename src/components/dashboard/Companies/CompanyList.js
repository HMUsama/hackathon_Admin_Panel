import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import Loader from '../Loader'
import WOW from 'wowjs'
import { Link } from 'react-router-dom';

class CompanyList extends Component {
  constructor(props){
    super(props)
    this.state={
      // usersDetails:this.props.usersDetails,
    }
  }
   componentDidMount(){
    new WOW.WOW().init();
  }
 
  render() {
    const { CP_Info } = this.props;
    return (
      <div >
         <h4 className="center white-text text-darken-3">Company List</h4>
            { CP_Info != undefined ? 
                <div className="container section project-details">
                <div>
                { CP_Info.map( (item,index ) =>{
                return(
                  <div className="animated  bounceInUp ">
                 <div className="card z-depth-0" id={`card-${index}`}>
                    <Link to={'/company/'+item.id}>
                        <div className="card z-depth-0 project-summary"key={index}>
                            <div className="card-content black-text text-darken-3">
                            <span className="card-title">Name:{item.name} </span>
                            <p className="black-text">Number:{item.number}</p>
                            <p className="black-text">Email:{item.email}</p>
                            </div>  
                        </div>
                    </Link>
                      </div>
                 </div>
                    )
                })
                }
            </div>
                </div>:<Loader/> 
            }
    </div>
    );
  }
}

// export default compose(connect(mapStateToProps),
//                 firestoreConnect ([
//                   {collection: "user"},
//                   ])
//                   )(UsersList)
  export default CompanyList;