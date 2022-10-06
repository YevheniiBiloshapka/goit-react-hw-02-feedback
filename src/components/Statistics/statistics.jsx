import { List } from './statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = state => {
  const { good, neutral, bad } = state.value;
  return (
    <List>
      <li>
        <p>
          Good: <b>{good}</b>
        </p>
      </li>
      <li>
        <p>
          Neutral: <b>{neutral}</b>
        </p>
      </li>
      <li>
        <p>
          Bad: <b>{bad}</b>
        </p>
      </li>
      <li>
        <p>
          Total:<b>{good + neutral + bad}</b>
        </p>
      </li>
      <li>
        <p>
          Positive feedback:{' '}
          <b>{Math.round((good / (good + neutral + bad)) * 100)} %</b>
        </p>{' '}
      </li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}.isRequired;
