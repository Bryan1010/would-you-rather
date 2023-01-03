import React, { Component } from 'react';
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { connect } from "react-redux";




class Leaderboard extends Component {

    render() {
        return (
            <Container>
                {this.props.users
                    .sort((a, b) => (a.questions.length + Object.entries(a.answers).length
                        > b.questions.length + Object.entries(b.answers).length) ? -1 : 1).map((user) => {
                            return (
                                <Card key={user.id} >
                                    <Card.Body>
                                        <Card.Title>{user.name}</Card.Title>
                                        <Row>
                                            <Col xs={3}>
                                                <Image thumbnail src={user.avatarURL} roundedCircle />
                                            </Col>
                                            <Col>
                                                <p>Answered Questions: {Object.entries(user.answers).length}</p>
                                                <p>Answered Questions: {user.questions.length}</p>

                                                {/* <Nav.Link href={`/questions/${id}`} onClick={this.handleLogout}>Logout</Nav.Link> */}
                                            </Col>
                                            <Col>
                                                <Card.Text>
                                                    Score: {user.questions.length + Object.entries(user.answers).length}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            )
                        }
                        )
                }
            </Container>
        )
    }
}

function mapStateToProps({ users, AuthenticateUser }) {
    return {
        users: Object.values(users),
        AuthenticateUser
    };
}

export default connect(
    mapStateToProps,
)(Leaderboard);