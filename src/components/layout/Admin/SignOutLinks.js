import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
    return(
     <ul className="right">
         <div className="  right darken-2 ">
                <ul className="right">
                    <li><NavLink to='/adminsignin'>Admin </NavLink></li>
                </ul>
            </div>
     </ul>
    )
}

export default SignedOutLinks;