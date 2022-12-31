import React, { Component } from 'react';
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


import { AuthenticateUserSetter } from '../actions/sharedActions';


class NavigationBar extends Component {

    findLoggedInUsername(){
        const { AuthenticateUser, users } = this.props;

        if (AuthenticateUser === null || !users || users?.length === 0) {
            return '';
        }

        return users[AuthenticateUser].name;

    }

    handleLogout = (e) => {
        e.preventDefault();
        this.props.AuthenticateUserSetter(null);
       
        NavLink('/')
    }

    render() {
        const { AuthenticateUser, users } = this.props;

        return (

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand name="home" as={NavLink} to="/" exact>Would You Rather</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link name="new poll" as={NavLink} to="/add">New Poll</Nav.Link>
                            <Nav.Link name="leader board" as={NavLink} to="/leaderboard">Leader Board</Nav.Link>
                        </Nav>
                        {AuthenticateUser != null && (
                            <Nav>
                                <Navbar.Text>
                                    Hello, {this.findLoggedInUsername()}
                                </Navbar.Text>
                                <Nav.Link href="/" onClick={this.handleLogout}>Logout</Nav.Link>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}


function mapStateToProps({ users, AuthenticateUser }) {
    return {
        users,
        AuthenticateUser
    };
}


export default connect(
    mapStateToProps,
    {AuthenticateUserSetter}
)(NavigationBar);