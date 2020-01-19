import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Doctor = () => {
  return (
      <MDBCardBody className="text-center">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Doctors Details
        </h2>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            
            <h4 className="font-weight-bold mb-3">
              <strong>DOCTOR NAME</strong>
            </h4>
            <p className="dark-grey-text">
              Name
            </p>
            <p className="dark-grey-text">
              Qualification
            </p>
            <p className="dark-grey-text">
              Type
            </p>
            <p className="dark-grey-text">
              NMC No
            </p>
            <MDBBtn color="info" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            
            <h4 className="font-weight-bold mb-3">
              <strong>DOCTOR NAME</strong>
            </h4>
            <p className="dark-grey-text">
              Name
            </p>
            <p className="dark-grey-text">
              Qualification
            </p>
            <p className="dark-grey-text">
              Type
            </p>
            <p className="dark-grey-text">
              NMC No
            </p>
            <MDBBtn color="info" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            
            <h4 className="font-weight-bold mb-3">
              <strong>DOCTOR NAME</strong>
            </h4>
            <p className="dark-grey-text">
              Name
            </p>
            <p className="dark-grey-text">
              Qualification
            </p>
            <p className="dark-grey-text">
              Type
            </p>
            <p className="dark-grey-text">
              NMC No
            </p>
            <MDBBtn color="info" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
          
        </MDBRow>
      </MDBCardBody>
  );
}

export default Doctor;