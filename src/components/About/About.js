import React from 'react';
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {
    return (
      
        <div className="About-container ">
            
        <div className="About">
          <div className="row d-flex ">
           
            <div className="col-md-6">
              <div className="title-about">
                  <p>IN SIX MONTH JOURNEY <br /> YOU LEARN CODING<br/> And You Should FOLLOW THE 5 STEPS</p>
              </div>
             <div className="list mt-5">
             <ul>
                  <li>Explore Online Resources and Learn More. ...  </li>
                  <li>Further Your Education With a Coding Bootcamp. ..</li>
                  <li>Consider Your Specialty and Focus. ... </li>
                  <li> Seek Out a Tech Internship and Practical Experience. </li>
                  <li> Build Your Own Website and Projects. .</li>
              </ul>
             </div>
              
           
            </div>
            <div className="col-md-6">
                <div className="about-logo">
                      
                    </div>

              
            </div>
          </div>
        </div>
        <div className="allcompo">
        <Footer></Footer>
      </div> 

        </div>
         
    );
};

export default About;