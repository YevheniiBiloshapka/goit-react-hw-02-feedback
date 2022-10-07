import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/statistics';
import { Box, Section, Message } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementState = e => {
    this.setState(prevState => ({ [e]: prevState[e] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Box>
        <FeedbackOptions
          value={this.state}
          incrementState={this.incrementState}
        />
        <Section>
          <h2>Statistics</h2>
          {good === 0 && (neutral === 0) & (bad === 0) ? (
            <Message>😔 You have not left the feedback</Message>
          ) : (
            <Statistics value={this.state} />
          )}
        </Section>
      </Box>
    );
  }
}
