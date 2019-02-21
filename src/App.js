import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import AdminLognin from './components/auth/Admin'
import Dashboard from './components/dashboard/Dashboard'

import CompanyDash from './components/dashboard/Companies/CompanyDash'
import CompanyList from './components/dashboard/Companies/CompanyList'
import ComapanyDetails from './components/dashboard/Companies/CompanyDetails'

import UsersList from './components/dashboard/Users/UserList'
import UserDetails from './components/dashboard/Users/UsersDetails'
import UserDash from './components/dashboard/Users/UserDash'




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

           <Route exact path="/companydashboard"   component={CompanyDash}/>
           <Route exact path="/company/:id"   component={ComapanyDetails}/>

        {/* Admin */}
           <Route exact path="/userdashboard"   component={UserDash}/>
           <Route exact path="/user/:id"   component={UserDetails}/>
           <Route exact path="/userslist/:id"   component={UsersList}/>
        {/* Admin */}
         </Switch>
       </div>
     </BrowserRouter>
    );
  }
}

export default App;

