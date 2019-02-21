import React, { Component } from 'react'
import {connect} from 'react-redux'
import {adminLognin} from '../../store/actions/authActionsAd'
import { Redirect } from 'react-router-dom'

class AdminLognin extends Component {
        state = {
            email:'',
            password:''
        } 

hundleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}
hundleSubmit=(e)=>{
    e.preventDefault();
    this.props.adminLognin1(this.state)
}

render() {
    const{authError,authAd} = this.props;
    // console.log("___",authAd.uid)
    if(authAd.uid) return <Redirect to='/dashboard'/>
    return (
        <div className="container">
            <form onSubmit={this.hundleSubmit} className="gray">
            <h5 className="white-text text-darken-6 center"> Admin Login</h5>
            <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.hundleChange} />
            </div>
        <br/>
            <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={this.hundleChange} />
            </div>
        <br/>
            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-2">Login</button>
                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps =(state)=> {
    return{
        authAd: state.firebase.auth,
        authError: state.authAd.authError
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        adminLognin1: (Admin) => dispatch(adminLognin(Admin))
        //mapDispatchToProps main Function rakhtay han 
        //is ny payload return kia=>>> dispatch(adminLognin(Admin)) 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AdminLognin);
// export default AdminLognin
