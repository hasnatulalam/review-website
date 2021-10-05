import React from 'react';
import './Contact.css'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion'
import Footer from '../Footer/Footer';


const Contact = () => {
    return (
        
        <div className="About-container ">
            
        <div className="About">
          <div className="row d-flex ">
           
            <div className="col-md-6">
            <div className="contact-logo">
                      
                      </div>
                      <div className="faq">
                      <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Why You Should Enrooled our Courses?</Accordion.Header>
    <Accordion.Body>
    We offers over 2,00 coding classes, meaning you'll have a LOT of options. ... No matter what specific coding skills you're looking to learn, there's a very good chance we has a class for you. It also means you'll have a wide choice of classes even after you narrow down your topic.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>How many times to complete this course</Accordion.Header>
    <Accordion.Body>
    If you watch 1 to 1.5 hours of video every day, as well as practice an extra 4 to 6 hours, it will take you about three months.  But sometimes you have to set aside extra time for homework and take away projects.  We have to bring the mentality to work hard.  There is no way to cheat or shortcut.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                      </div>
              
           
            </div>
            <div className="col-md-6">
                <div className="container">
                
            <div class="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <Form>

            <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter your Name" />
  </Form.Group>      
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comment</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <button className="btn btn-primary">Submit</button>
</Form>
</div>
              
            
             
              
            </div>
          </div>
        </div>
        
        <div className="divide">
        <Footer></Footer>
        </div>
        </div>
         
       
    );
};

export default Contact;