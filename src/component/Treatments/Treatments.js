import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";

const Treatment = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our Treatments
      </h2>
      
      <MDBRow>
        <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
          <MDBCard pricing className="black-text">
           
            <MDBCardBody className="striped green-striped card-background px-5">
          
              <h3>
              <img
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO80hTIXxL1m1t0qMpl09fkpu0S73hqq58fpZH5LmmRqpuxPnE&s"
                alt="img"
              /></h3>
                  <p>
                   <strong> Braces</strong>
                  </p>
               
              <MDBBtn rounded gradient="aqua" className="mb-3 mt-3">
                Book now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
          <MDBCard pricing className="black-text">
           
            <MDBCardBody className="striped green-striped card-background px-5">
             
              <h3>
              <img
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Q3tUbBDwSE36aatAg4dqBMv1MsJYkYgRpIe-lgR8akMuaSOhpw&s"
                alt="img"
              /></h3>
                  <p>
                    <strong> Cavity</strong>
                  </p>
               
              <MDBBtn rounded gradient="aqua" className="mb-3 mt-3">
                Book now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
          <MDBCard pricing className="black-text">
           
            <MDBCardBody className="striped green-striped card-background px-5">
              
              <h3>
              <img
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO80hTIXxL1m1t0qMpl09fkpu0S73hqq58fpZH5LmmRqpuxPnE&s"
                alt="img"
              /></h3>
                  <p>
                    <strong>Braces</strong>
                  </p>
               
              <MDBBtn rounded gradient="aqua" className="mb-3 mt-3">
                Book now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        
      </MDBRow>
    </section>
  );
}

export default Treatment
