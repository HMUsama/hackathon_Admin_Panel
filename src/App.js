import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import AdminLognin from './components/auth/Admin'
import Dashboard from './components/dashboard/Dashboard'

import CompanyDash from './components/dashboard/Companies/CompanyDash'
import CompanyList from './components/dashboard/Companies/CompanyList'
import ComapanyDetails from './components/dashboard/Companies/CompanyDetails'
import ChatCP from './components/dashboard/Companies/ChatCP'

import UsersList from './components/dashboard/Users/UserList'
import UserDetails from './components/dashboard/Users/UsersDetails'
import UserDash from './components/dashboard/Users/UserDash'
import ChatUser from './components/dashboard/Users/ChatUser'
import Chart from './components/dashboard/Chart/Chart'



class App extends Component {
  render() {
    return (
      // <div><h1>pak</h1></div>
      <BrowserRouter>
       <div>
         <Navbar/>
         <Switch>
           <Route exact path="/adminsignin"   component={AdminLognin}/>
           <Route exact path="/dashboard"   component={Dashboard}/>
           <Route exact path="/graph"   component={Chart}/>

           <Route exact path="/companydashboard"   component={CompanyDash}/>
           <Route exact path="/company/:id"   component={ComapanyDetails}/>
           <Route exact path="/compantChat/:id"   component={ChatCP}/>

        {/* Admin */}
           <Route exact path="/userdashboard"   component={UserDash}/>
           <Route exact path="/userslist/:id"   component={UsersList}/>
           <Route exact path="/user/:id"   component={UserDetails}/>
           <Route exact path="/usersChat/:id"   component={ChatUser}/>
        {/* Admin */}
         </Switch>
       </div>
     </BrowserRouter>
    );
  }
}

export default App;

