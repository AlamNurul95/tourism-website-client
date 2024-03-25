import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
  const{user,logOut}=useContext(AuthContext);
  const handleLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error));
  }
  
    return (
        <div className="navbar bg-neutral text-neutral-content h-40 mb-5  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        </ul>
    </div>
    <a className="btn btn-ghost text-xl">Sim & Saim Tour</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/packages'>Packages</Link></li>
      <li><Link to='/locations'>Locations</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/aboutus'>About Us</Link></li>
      <li>
        <details>
          <summary>
            Customer Portal
          </summary>
          <ul className="p-2 bg-gray-500 rounded-t-none ">
            <li><Link to='/signup'>Sign Up</Link></li>
            {
              user?.email? <li><button onClick={handleLogout}>LogOut</button></li>
              :
              <li><Link to='/login'>Login</Link></li>
            }
          
            
          
            </ul>
            </details>
            </li>
     
    </ul>
  </div>
  
</div>
    );
    
};

export default Navbar;