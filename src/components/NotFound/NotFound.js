import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
        <div className="error">
            
            <h1>Error 404</h1>
            
            

            <NavLink 
                   to="/home" 
                   activeStyle={{
                     fontWeight:"bold",
                     color:"red"

                   }}>TO BACK HOME PAGE</NavLink>
                   </div>
                  <div className="separate">
                  <Footer></Footer>

                       </div>
                   
        </div>
       
    );
};

export default NotFound;