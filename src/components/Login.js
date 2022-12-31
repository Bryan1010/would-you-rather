import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Form, Button, Row } from 'react-bootstrap';
import { NavLink } from "react-router-dom";



import { AuthenticateUserSetter } from '../actions/sharedActions';


export class Login extends Component {
    handleLogin = (e) => {
        e.preventDefault();
        this.props.AuthenticateUserSetter(this.userSelected.value)
    }

    render() {
        const { users } = this.props
        return (
            <Container>
                <h1 className="text-center">Would you rather app</h1>
                <h2 className="text-center m-2">Sign In</h2>
                {users.length > 0 ?
                    (
                        <React.Fragment>
                            <Row>
                                <Form.Select className='m-3' size="lg" ref={(selection) => this.userSelected = selection}>
                                    {users.map((u) => {
                                        return (
                                            <option key={u.id} value={u.id}>
                                                {u.name}
                                            </option>
                                        )
                                    })}
                                </Form.Select>
                            </Row>
                            <Row>
                                <Button as={NavLink} to="/" exact className='m-3' onClick={this.handleLogin}>Sign In</Button>
                            </Row>
                        </React.Fragment>
                    )
                    :
                    <p>Please wait...</p>
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
    { AuthenticateUserSetter }
)(Login);