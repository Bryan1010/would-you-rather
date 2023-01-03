import React, { Component } from 'react';
import { Container, Tabs, Tab } from "react-bootstrap";
import { connect } from "react-redux";


import { AuthenticateUserSetter } from '../actions/sharedActions';
import Question from './Question'


class QuestionListCard extends Component {

    checkIfUserIsPresentInArray(arr) {
        
        return arr.includes(this.props.AuthenticateUser);
    }

    getAnsweredQuestions() {
        const answered = Object.values(this.props.questions)
        .sort((a,b) => (a.timestamp > b.timestamp) ? 1 : -1)
            .filter(q => this.checkIfUserIsPresentInArray(q.optionOne.votes)
                || this.checkIfUserIsPresentInArray( q.optionTwo.votes))
        return answered;

    }

    getUnansweredQuestions() {
        const unanswered = Object.values(this.props.questions)
        .sort((a,b) => (a.timestamp > b.timestamp) ? 1 : -1)
            .filter(q => !this.checkIfUserIsPresentInArray(q.optionOne.votes)
                && !this.checkIfUserIsPresentInArray( q.optionTwo.votes))

        return unanswered;

    }

    getUserName(userId) {
        if (this.props.users.length === 0) {
            return;
        }
        return this.props.users.find(u => u.id === userId).name
    }

    getUserAvatar(userId) {
        if (this.props.users.length === 0) {
            return;
        }
        return this.props.users.find(u => u.id === userId).avatarURL;
    }

    render() {
        return (
            <Container>
                

                <Tabs defaultActiveKey="Unanswered">
                    
                    <Tab eventKey="Unanswered" title="Unanswered">
                        {this.getUnansweredQuestions().map((a) => {

                            return (
                                <Question
                                    key={a.id}
                                    avatarUrl={this.getUserAvatar(a.author)}
                                    userName={this.getUserName(a.author)}
                                    author={a.author}
                                    optionOne={a.optionOne}
                                    optionTwo={a.optionTwo}
                                    id={a.id}
                                />
                            )
                        })}
                    </Tab>
                    <Tab eventKey="Answered" title="Answered">
                        {this.getAnsweredQuestions().map((a) => {

                            return (
                                <Question
                                    key={a.id}
                                    avatarUrl={this.getUserAvatar(a.author)}
                                    userName={this.getUserName(a.author)}
                                    author={a.author}
                                    optionOne={a.optionOne}
                                    optionTwo={a.optionTwo}
                                    id={a.id}
                                />
                            )
                        })}
                    </Tab>
                    
                </Tabs>


            </Container>
        )
    }
}

function mapStateToProps({ users, questions, AuthenticateUser }) {
    return {
        users: Object.values(users),
        questions,
        AuthenticateUser
    };
}

export default connect(
    mapStateToProps,
    { AuthenticateUserSetter }
)(QuestionListCard);