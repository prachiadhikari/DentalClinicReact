import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn,   MDBView, MDBContainer, MDBFormInline } from "mdbreact";
import "./Home.css";

class Home extends Component {
  
  render() {
   
    return (
      <div id="apppage">
       
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                   BG Dental Clinic
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    Beuty become powerful with smile.
                  </h6>
                  <MDBBtn color="white">Appointment</MDBBtn>
                  <MDBBtn outline color="white">
                    AboutUS
                  </MDBBtn>
                </div>
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <img
                    src={/*"https://smiledrs.com/wp-content/uploads/sites/96/2016/07/Teeth-Whitening.jpg.optimal.jpg"*/'/image/Home.jpeg'}
                    alt=""
                    className="img-fluid"
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

       
      </div>
    );
  }
}

export default Home;