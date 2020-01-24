import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
  MDBBtn,MDBDatePicker, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline,MDBFileInput } from "mdbreact";
import "./Appointment.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import{

  Button

} from 'react-bootstrap'
 

class Appointment extends Component {
 state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
   

   
    return (
      <div id="classicformpage">
        <Router>
          <div>
           
          </div>
        </Router>

        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold">
                    Book Appointment!{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                   Lets book the appointment in time. And have a beautiful smile/
                  </h6>
               
                </div>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBCard id="classic-card">
                   <MDBCardBody className="z-depth-2 white-text">
                      <h3 className="text-center">
                        <MDBIcon icon="user" /> Appointment
                      </h3>
                      <hr className="hr-light" />
                      <MDBInput label="Your Fullname"  />
                      <MDBInput label="Your Address"  />
                      <MDBInput label="Your Phone"  />
                      <MDBInput label="Your Problem"  />
                        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
                      

                      <div className="text-center mt-4 black-text">
                        <Button color="indigo">Fix Appointment</Button>


                        <hr className="hr-light" />
                       
                      </div>
                    </MDBCardBody>
                    
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        
      </div>
    );
  }
}

export default Appointment;