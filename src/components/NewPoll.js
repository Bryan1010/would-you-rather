import React, { Component } from 'react';
import { Container, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";

import { handleSaveQuestion } from '../actions/questionActions';




class Leaderboard extends Component {

    handleSubmit(e) {

        e.preventDefault();

        const {handleSaveQuestion, AuthenticateUser} = this.props;

        console.log(this.option1,this.option1.value, this.option2)
        if(this.option1 === undefined || this.option1.value === ''
        || this.option2 === undefined || this.option2.value === ''){
            return;
        }

        handleSaveQuestion(this.option1.value, this.option2.value, AuthenticateUser);

        this.props.history.push('/');
    }

    render() {
        return (
            <Container>
                <h1>Create New Question</h1>

                <h2>Would you rather</h2>

                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="option1">
                        <Form.Label>Option 1</Form.Label>
                        <Form.Control
                            type="text"
                            ref={(input) => this.option1 = input}
                            placeholder="Enter Option 1 here"
                        />
                    </Form.Group>

                    <h3>OR</h3>

                    <Form.Group className="mb-3" controlId="option2">
                        <Form.Label>Option 2</Form.Label>
                        <Form.Control
                            type="text"
                            ref={(input) => this.option2 = input}
                            placeholder="Enter Option 2 here"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>
        )
    }
}

function mapStateToProps({ AuthenticateUser }) {
    return {
        AuthenticateUser
    };
}


export default connect(
    mapStateToProps,
    {handleSaveQuestion}
)(Leaderboard);