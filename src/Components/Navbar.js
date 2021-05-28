import React from 'react'
import { Link } from 'react-router-dom'



 const Navbar = () => {
  
  return (
      
      <div className='nav-list'>
        <a className="Logo" href="#0">Logo</a>
        <ul>
          <li><Link to="/Home" className="active" >Home</Link></li> 
          <li><Link to="/Services"  className="next-btn" onClick = {()=>document.getElementById('about').scrollIntoView()} >Services</Link></li> 
          <li><Link to="/Products" className="" >Products</Link></li> 
          <li><Link to="/Signup" className="" >Sign Up</Link></li> 
        </ul>
       
      </div>
    )
}


export default Navbar