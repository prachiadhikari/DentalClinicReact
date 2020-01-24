import React from "react";
import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

const AboutUs = () => {
  return (
  <section className="text-center my-5">
    <h2 className="h1-responsive font-weight-bold my-5">
      Our History
    </h2>
    <p className="grey-text w-responsive mx-auto mb-5">
      Bg Dental CLinic, with the help of expert dentists and a strong team, was founded on 16th July 2001 at New Baneshwor. It is now one of the reputed dental hospitals in Kathmandu, known to provide affordable, prompt and quality dental treatment to its patients. Located at New Baneshwor, the hospital is a government-registered hospital, accredited to national standards.
    </p>

    <MDBContainer className="d-flex flex-wrap">
      <MDBCol md="12" className="mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Others/img%20%2832%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              
              <h3 className="py-3 font-weight-bold">
                <strong>Locations</strong>
              </h3>
              <p className="pb-3">
              
Welcome to Samaj Dental Hospital, a leading visionary dental care center, committed to expert oral health care and treatment. With a team of specialists, we aspire to provide outstanding dental services that are easily accessible to our clients and patients. That’s why, we are now located in three different locations: New Baneshwor, Jawalakhel Chowk and Basundhara Chauki.
              </p>
              
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol md="6" className="md-0 mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="pink-text">
                <MDBIcon icon="chart-pie" />
                
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>New Baneshwor</strong>
              </h3>
              <p className="pb-3">
               
“To make our services more accessible, we are coming near you” With this aim, we set up our first dental clinic at Jawalakhel Chowk which officially opened on 1st July 2017. The clinic is easily
              </p>
              
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      <MDBCol md="6" className="md-0 mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20%2873%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="green-text">
                <MDBIcon icon="eye" />
               
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>Jwalakhel</strong>
              </h3>
              <p className="pb-3">
               “To make our services more accessible, we are coming near you” With this aim, we set up our first dental clinic at Jawalakhel Chowk which officially opened on 1st July 2017. The clinic is easily
              </p>
              
            </div>
          </div>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  </section>
  );
}

export default AboutUs;