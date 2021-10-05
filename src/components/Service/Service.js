import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Service.css'

const Service = () => {
  const [services,setServices]=useState([])
  useEffect(()=>{
    fetch('/person.JSON')
    .then(res=>res.json())
    .then(data=>setServices(data))


  },[])
  return (
       <div className="services">
          <div className="row">
           <div className="header">
             <p>OUR COURSES</p>
           </div>
          {services.map((service) => (
            <div className="col-md-4">
            <div className="cart">
              <div className="cart-details">
                <img className="w-50" src={service.img} alt="" />
              </div>
              <div className="text-area">
                <h4> CourseName:{service.courseName}</h4>
                <h4> InstructorName:{service.instructor}</h4>
                  <p>{service.title}</p>
                  
                  <button className="btn btn-success">Details</button>
               
               </div>
            </div>
            </div> 
          ))};

        
       </div> 
       <Footer></Footer>  
      </div> 
      
             
  );
};

export default Service;