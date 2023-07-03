// eslint-disable-next-line no-unused-vars
import React from 'react'
// @ts-ignore
import logo from "../assets/logo.svg";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


function SignedOutNav() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link to='https://github.com/saranatour1/Traval-Designer' className="flex items-center">
                <img src={logo} className="h-8 mr-3" alt="Trip planner" />
            </Link>
            <div className="flex items-center">
              <NavLink to="/signup" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline mr-6 "> Sign Up </NavLink>
              <NavLink to="/signin" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"> Sign In </NavLink>
            </div>
        </div>
    </nav>

  )
}

export default SignedOutNav