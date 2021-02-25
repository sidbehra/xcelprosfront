import React, { Component } from 'react'
import {
    Card, CardBody
  } from 'reactstrap';
import './UserDetailCard.css'
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import RandomImage from '../RandomImage/RandomImage';

  
export class UserDetailCard extends Component {
    constructor(props)
    {
        super(props)
        this.state= {}
    }
    render() {
        return (
                <Card className="card">
                    <CardBody className="card-body">
                        <div className="image-box">
                           <RandomImage />
                        </div>
                        <div className="name-section">
                            <h3>Adriana Pazos</h3>
                            <small>Administrator</small>
                        </div>
                        <div className="user-details">
                            <div>
                                <div className="icon">
                                    <span>
                                    <FaEnvelope />
                                    </span>
                                </div>
                                <div className="detail-values">
                                    {this.props.user.email}
                                </div>
                            </div>
                            <div>
                                <div className="icon">
                                    <span>
                                    <FaPhone/>
                                    </span>
                                </div>
                                <div className="detail-values">
                                {this.props.user.phone}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
        )
    }
}

export default UserDetailCard
