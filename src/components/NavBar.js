import React from 'react';
import {NavLink} from "react-router-dom";

export function NavBar(){
    const getActiveStyles = ({isActive}) =>({
      color:isActive?'red':'black',
      fontWeight:isActive?'600':'400',
      borderRight:isActive?'4px solid #313134':'none'
    });
    return(
        <nav className='navbar'>
          <NavLink to="/" style={getActiveStyles}>Inbox</NavLink>
          <NavLink to="/spam" style={getActiveStyles}>Spam</NavLink>
          <NavLink to="/trash" style={getActiveStyles}>Trash</NavLink>
        </nav>
    )
  }