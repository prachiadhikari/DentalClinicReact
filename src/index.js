

import React from 'react';
import ReactDOM from 'react-dom';
 import
'bootstrap-css-only/css/bootstrap.min.css';
 import
'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{
	BrowserRouter as Router,
	Switch,
	Link,
	Route

} from 'react-router-dom'
import{
	Nav,Container,Row,Col,Card,Navbar,Form,Button,FormControl,Carousel

} from 'react-bootstrap'

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer,MDBBtn,
 MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol  } from "mdbreact";
import Login from './component/Login/Login' 
import Registration from './component/Registration/Registration' 
import AboutUs from './component/AboutUs/AboutUs' 
import Doctor from './component/Doctor/Doctor' 
import Treatments from './component/Treatments/Treatments' 
import Home from './component/Home/Home' 
import ContactUs from './component/ContactUs/ContactUs' 
import Appointment from './component/Appointment/Appointment' 









class Index extends React.Component{
	constructor(){
				super()
	}

			  /*Footer = () => {
		     return (
		                <Row>
		                  <Col sm={4}>
		                  About Hotel
		                  Location:
		                  Phone:

		                  </Col>
		                  <Col sm={4}>
		                  Copyright
		                </Col>
		                  <Col sm={4}>
		                  Map
		                </Col>
		        </Row>
		            )

		}*/

	render(){
		return(
			<Router>
					<div>
						  <Navbar bg="dark" variant="dark">
						    <Navbar.Brand href="#home">
						      {' '}
						      BG DENTAL CLINIC
						    </Navbar.Brand>
						    <Nav variant="pills">
						  <Nav.Item>
						    <Nav.Link as={Link} to="/home" >Home</Nav.Link>
						  </Nav.Item>
						  <Nav.Item>
						    <Nav.Link as={Link} to="/aboutus">AboutUs</Nav.Link>
						  </Nav.Item>
						   <Nav.Item>
						    <Nav.Link as={Link} to="/doctor">Doctor</Nav.Link>
						  </Nav.Item>
						  <Nav.Item>
						    <Nav.Link as={Link} to="/treatment">Treatments</Nav.Link>
						  </Nav.Item>
						   <Nav.Item>
						    <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
						  </Nav.Item>
						   <Nav.Item>
						    <Nav.Link as={Link} to="/login">Login</Nav.Link>
						  </Nav.Item>
						   <Nav.Item>
						    <Nav.Link as={Link} to="/contactus">ContactUs</Nav.Link>
						  </Nav.Item>
						  <Nav.Item>
						    <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
						  </Nav.Item>
						 
						  
  						</Nav>
  						
						 </Navbar>

					</div>
					<Switch>

						<Route exact path="/home">
							< Home/>
						</Route>

						<Route path="/home" component={Home}/>
					

						<Route exact path="/login">
							< Login/>
						</Route>

						<Route path="/login" component={Login}/>
					

						<Route exact path="/registration">

							< Registration/>

						</Route>
						<Route path="/registration" component={Registration}/>

					

						<Route exact path="/aboutus">

							< AboutUs/>

						</Route>
						<Route path="/aboutus" component={AboutUs}/>

					
						<Route exact path="/doctor">

							< Doctor/>

						</Route>
						<Route path="/doctor" component={Doctor}/>


						<Route exact path="/treatment">

							< Treatments/>

						</Route>
						<Route path="/treatment" component={Treatments}/>


						<Route exact path="/contactus">

							< ContactUs/>

						</Route>
						<Route path="/contactus" component={ContactUs}/>

					

						<Route exact path="/appointment">

							< Appointment/>

						</Route>
						<Route path="/appointment" component={Appointment}/>

					</Switch>


					

						
			</Router>




		)
	
	}
}

ReactDOM.render(<Index/>,document.getElementById('root'))