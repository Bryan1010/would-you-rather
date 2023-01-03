import React, { Component } from 'react';
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";


import { AuthenticateUserSetter } from '../actions/sharedActions';


class QuestionListCard extends Component {

    findLoggedInUsername() {
        const { AuthenticateUser, users } = this.props;

        if (AuthenticateUser === null || !users || users?.length === 0) {
            return '';
        }

        return users[AuthenticateUser].name;

    }

    render() {
        return (
            <Container>
                <h1>LeaderBoard</h1>
                Loop through users and get completed scores and stats
            </Container>
        )
    }
}