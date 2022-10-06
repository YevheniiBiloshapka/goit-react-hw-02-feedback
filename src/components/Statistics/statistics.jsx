import { List, StatistickItem, SumItem } from './statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = state => {
  const { good, neutral, bad } = state.value;
  return (
    <List>
      <StatistickItem>
        <p>Good:</p>
        <span>{good}</span>
      </StatistickItem>
      <StatistickItem>
        <p>Neutral:</p>
        <span>{neutral}</span>
      </StatistickItem>
      <StatistickItem>
        <p>Bad:</p>
        <span>{bad}</span>
      </StatistickItem>
      <SumItem>
        <p>Total</p>
        <span>{good + neutral + bad}</span>
      </SumItem>
      <SumItem>
        <p>Positive feedback</p>
        <span>{Math.round((good / (good + neutral + bad)) * 100)} %</span>
      </SumItem>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}.isRequired;
