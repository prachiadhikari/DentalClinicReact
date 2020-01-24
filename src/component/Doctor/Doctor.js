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
                src="https://previews.123rf.com/images/puhhha/puhhha1510/puhhha151000577/45743843-dentist-doctor-portrait-young-man-at-his-workplace-dental-clinic.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            
            <h4 className="font-weight-bold mb-3">
              <strong>John  Cronin</strong>
            </h4>
           
            <p className="dark-grey-text">
              Qualification: MD,MDS
            </p>
            <p className="dark-grey-text">
              Type: Doctors
            </p>
            <p className="dark-grey-text">
              NMC No: 1231231
            </p>
            <MDBBtn color="info" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://static3.bigstockphoto.com/0/0/3/large1500/300426055.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            
            <h4 className="font-weight-bold mb-3">
              <strong>Daisy Jonas</strong>
            </h4>
            
            <p className="dark-grey-text">
              Qualification: MD,MBBS
            </p>
            <p className="dark-grey-text">
              Type: Doctor
            </p>
            <p className="dark-grey-text">
              NMC No: 98877676
            </p>
            <MDBBtn color="info" rounded size="md">
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://i.ytimg.com/vi/WK_5J3JZQpw/maxresdefault.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            
            <h4 className="font-weight-bold mb-3">
              <strong>Naresh-Trehan</strong>
            </h4>
            <p className="dark-grey-text">
              Qualification: MDS
            </p>
            <p className="dark-grey-text">
              Type: Doctor
            </p>
            <p className="dark-grey-text">
              NMC No: 35634
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