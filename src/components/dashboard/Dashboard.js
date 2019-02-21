import React, { Component } from 'react'
import './Dashboard.css'
import WOW from 'wowjs'
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      user:false
    }
  }
   componentDidMount(){
    new WOW.WOW().init();
  }
 
  render() {
    // if(!authAd.uid) return <Redirect to='/adminsignin'/>
    // const {user} = this.state;
    return (
      <div>
        <center>
          <h5 className="animated  flash " data-wow-iteration="1">
         {/* Home Electricity Problem Solution */}
          </h5>
          <br/>
        
        <div>
        <li className="animated  bounceInLeft " data-wow-iteration="1">
          <NavLink to='/userdashboard'>
          <a href="#"
            className="round green">consumer
                  <span className="round" onClick={this.consumer} >
                  Click Me <br/>GoTo Consumer 
                  </span>
                  </a>
          </NavLink>
        </li>
         
              <br/><br/>
          <li className="animated  bounceInRight " data-wow-iteration="1">
          <NavLink to='/companydashboard'>
            <a href="#" className="round red">Electrition
            <span className="round" onClick={this.electrition} >
          Click Me <br/>GoTo Electrition
            </span>
            </a>
            </NavLink>
          </li>
          </div>
          </center>
      </div>
    );
  }
}

export default Dashboard;
