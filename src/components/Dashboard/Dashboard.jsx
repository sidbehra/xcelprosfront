import React, { Component } from 'react'
import UserDetailCard from '../Shared/UserDetailCard/UserDetailCard';
import { Container, Row, Col} from 'reactstrap';

class Dashboard extends Component {

    constructor(props)
    {
        super(props)
        this.state= {
            allUsers:[
                {email : 'abc@gmail.com','phone':23568968656},
                {email : 'tania@gmail.com','phone':3535465875},
                {email : 'abha@gmail.com','phone':5675796867},
                {email : 'reyaz@gmail.com','phone':46789075325},
                {email : 'raj@gmail.com','phone':357987896324},
                {email : 'sid@gmail.com','phone':46787658734},
                {email : 'vicky@gmail.com','phone':123456789}
            ]
        }
    }

    render() {
        let allUserCards = this.state.allUsers.map((userData,index)=>{
           return ( 
            <Col sm="4" md="3" lg="3">
                <UserDetailCard user={userData} key={index}/>
            </Col>
            )
        })
        return (
            <Container>
                <Row>
                   {allUserCards}
                </Row>
            </Container>
        )
    }
}

export default Dashboard
