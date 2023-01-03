import React, { Component } from 'react';
import { Card, Col, Row, Image, Form, Button, Alert } from 'react-bootstrap';

import { connect } from "react-redux";

import { AuthenticateUserSetter } from '../actions/sharedActions';
import { answerQuestion } from '../actions/questionActions';
import { saveAnswerToUser } from '../actions/userActions';



class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedOption: '' }
    }

    getUserName(userID) {
        if (this.props.users.length === 0) {
            return;
        }
        return this.props.users.find(u => u.id === userID).name
    }

    getQuestion() {
        const { id } = this.props.match.params;
        return this.props.questions.find(u => u.id === id)
    }

    getAuthorDetails(userID) {
        if (this.props.users.length === 0) {
            return;
        }
        return this.props.users.find(u => u.id === userID);
    }

    hasUserAnswered() {
        const { id } = this.props.match.params;
        return this.props.users.some(u => u.id === this.props.AuthenticateUser && Object.keys(u.answers).includes(id));
    }

    handleSubmitForm(e) {
        e.preventDefault();
        if (this.state.selectedOption === '')
            return
        const { id } = this.props.match.params;

        this.props.saveAnswerToUser(
            this.props.AuthenticateUser,
            id,
            this.state.selectedOption)
        this.setState({ selectedOption: '' });



        this.props.history.push('/');

    }

    handleOnChange(e) {
        this.setState({ selectedOption: e.target.value });
    }

    render() {

        const question = this.getQuestion();

        const author = this.getAuthorDetails(question.author);
        const currentUserAnswered = this.hasUserAnswered();

        const answerPercentage =
            question.optionOne.votes.length + question.optionTwo.votes.length;
        let optionOnePercentage =
            ((question.optionOne.votes.length / answerPercentage) * 100).toFixed();
        let optionTwoPercentage =
            ((question.optionTwo.votes.length / answerPercentage) * 100).toFixed();
        return (
            <Card >
                <Card.Body>
                    <Card.Title>Asked by {author.userName}:</Card.Title>
                    <Row>
                        <Col>
                            <Image src={author.avatarURL} roundedCircle />
                        </Col>
                        <Col>{(currentUserAnswered) ? (
                            <div>
                                <h2>Would you rather:</h2>
                                <Alert variant={(question.optionOne.votes.includes(this.props.AuthenticateUser) ? 'primary' : 'light')}>
                                    {(question.optionOne.votes.includes(this.props.AuthenticateUser)) && <span>(You selected this)</span>}
                                    <br />
                                    {question.optionOne.text} - {optionOnePercentage}%
                                    <p>{question.optionOne.votes.length} vote(s)</p>
                                </Alert>

                                <Alert variant={(question.optionTwo.votes.includes(this.props.AuthenticateUser) ? 'primary' : 'light')}>
                                    {(question.optionTwo.votes.includes(this.props.AuthenticateUser)) && <span>(You selected this)</span>}
                                    <br />
                                    {question.optionTwo.text} - {optionTwoPercentage}%
                                    <p>{question.optionTwo.votes.length} Vote(s)</p>
                                </Alert>
                            </div>
                        )
                            :
                            (
                                <Form onSubmit={(e) => this.handleSubmitForm(e)} >
                                    <p className='bold'>Would you rather...</p>
                                    <Form.Check
                                        onChange={(e) => this.handleOnChange(e)}
                                        name='answerGroup'
                                        type='radio'
                                        label={`${question.optionOne.text}`}
                                        value='optionOne'
                                        id={`optionOne`}
                                    />
                                    <Form.Check
                                        onChange={(e) => this.handleOnChange(e)}
                                        name='answerGroup'
                                        value='optionTwo'
                                        type='radio'
                                        label={`${question.optionTwo.text}`}
                                        id={`optionTwo`}
                                    />
                                    <Button variant="primary" type="submit">
                                        Vote
                                    </Button>
                                </Form>)
                        }

                        </Col>
                    </Row>
                </Card.Body>
            </Card >
        )
    }
}

function mapStateToProps({ users, questions, AuthenticateUser }) {
    return {
        users: Object.values(users),
        questions: Object.values(questions),
        AuthenticateUser
    };
}

export default connect(
    mapStateToProps,
    {
        AuthenticateUserSetter,
        answerQuestion,
        saveAnswerToUser
    },

)(Vote);