import React, { Component } from 'react';
import { Container, Row, Col, Input,Button } from 'reactstrap';
import "./SignUp.css";
import bgimage from '../../assets/signUpBG.jpg';
import { Link } from  'react-router-dom'

class SignUp extends Component {
    render() {
        return (
        <Container>
            <Row>
            <Col sm="6"md="6" lg="6">
               <img className="background-image" src={bgimage} alt=""/>
            </Col>
            <Col sm="6" md="6" lg="6">
                <br />
                <br />
                <div className="text-center">
                    <h1>Sign-Up</h1><br/>
                    <span> Already have an account? </span><Link to="/"><label>Login</label></Link>
                </div>
                <br />
                <div className="name-group">
                    <div>
                        <label>First Name</label><span className="emoji"></span>
                        <Input name="firstname"/>
                    </div>
                    <br />
                    <div>
                        <label>Last Name</label><span></span>
                        <Input name="lastname"/>
                    </div>
                </div>
                <br />
                <div>
                <label>Email Address</label>
                <Input name="email"/>
                </div>
                <br />
                <div>
                <label>Password</label>
                <Input name="password"/>
                </div>
                <br />
                <Button color="success" size="lg" block>Join our community</Button>
            </Col>
            </Row>
        </Container>
        )
    }
}

export default SignUp;
