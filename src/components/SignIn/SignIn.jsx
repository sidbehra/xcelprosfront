import React, { Component } from 'react';
import { Container, Row, Col, Input,Button } from 'reactstrap';
import "./Signin.css";
import bgimage from '../../assets/signInBG.jpg';
import { Link } from  'react-router-dom'

class SignIn extends Component {
    render() {
        return (
        <Container>
            <Row>
            <Col sm="6"md="6" lg="6">
               <img className="background-image" src={bgimage} alt=""/>
            </Col>
            <Col sm="6" md="6" lg="6" >
                <br />
                <br />
                <div className="text-center">
                    <h1>Login</h1><br/>
                    <span> Dont't have an account? </span><Link to="/signup"><label>Sign up</label></Link>
                </div>
                <br />
                <br />
                <div className="form-box">
                    <div className="inner-form-box">
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
                        <Button color="success" size="lg" block>Login to our community</Button>
                    </div>
                </div>
            </Col>
            </Row>
        </Container>
        )
    }
}

export default SignIn;
