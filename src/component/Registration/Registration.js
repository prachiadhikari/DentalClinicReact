import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBIcon,
  MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline,MDBFileInput } from "mdbreact";
import "./Home.css";
import{

  Button

} from 'react-bootstrap'
class Registration extends Component {
  

  render() {
   
    return (
     
      <div id="classicformpage">
        

        <MDBView>
        
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer style={{marginTop: 'auto',marginButtom:'auto'}}>
              <MDBRow >
                <MDBCol md="8" xl="5" className="mb-6">
                  <MDBCard id="classic-card">

                    <MDBCardBody className="z-depth-2 white-text">
                      <h3 className="text-center">
                        <MDBIcon icon="user" /> Register
                      </h3>
                      <hr className="hr-light" />
                      <MDBInput label="Your Fullname"  />
                      <MDBInput label="Your Address"  />
                      <MDBInput label="Your Phone"  />
                      <MDBInput label="Your DOB"  />
                      <MDBInput label="Your Email"  />
                      <MDBInput  type="file"/>


                      <MDBInput
                        label="Your password"
                        type="password"
                      />

                      <div className="text-center mt-4 black-text">
                        <Button color="indigo">Sign Up</Button>
                        <Button color="indigo">Login</Button>


                        <hr className="hr-light" />
                        <div className="text-center d-flex justify-content-center white-label">
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon fab icon="twitter" className="white-text" />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon fab icon="linkedin-in" className="white-text" />
                          </a>
                          <a href="#!" className="p-2 m-2">
                            <MDBIcon fab icon="instagram" className="white-text" />
                          </a>
                        </div>
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

export default Registration;