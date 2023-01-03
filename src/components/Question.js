import React, { Component } from 'react';
import { Card, Col, Row, Image } from 'react-bootstrap';

import { Link } from "react-router-dom";
import { connect } from "react-redux";


import { AuthenticateUserSetter } from '../actions/sharedActions';



class Question extends Component {

    
    
    render() {
        const {userName, id, optionOne, optionTwo, avatarUrl} = this.props
        return (
            <Card >
                <Card.Body>
                    <Card.Title>{userName} asks:</Card.Title>
                    <Row>
                        <Col>
                            <Image src={avatarUrl}  roundedCircle/>
                        </Col>
                        <Col>
                            <p className='bold'>Would you rather</p>
                            <Card.Text>
                                {optionOne.text} OR {optionTwo.text}
                            </Card.Text>
                            <Card.Link as={Link} to={`/questions/${id}`}>View Poll</Card.Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users),
    };
}

export default connect(
    mapStateToProps,
    { AuthenticateUserSetter }
)(Question);