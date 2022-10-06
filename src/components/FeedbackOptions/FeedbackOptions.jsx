import { Panel, Item } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  incrementGood,
  incrementNeutral,
  incrementBad,
}) => {
  return (
    <Panel>
      <h2>Please leave feedback</h2>
      <ul>
        <Item onClick={incrementGood}>
          <div>😀</div>
          <p>Good</p>
        </Item>
        <Item onClick={incrementNeutral}>
          <div>😐</div>
          <p>Neutral</p>
        </Item>
        <Item onClick={incrementBad}>
          <div>🙁</div>
          <p>Bad</p>
        </Item>
      </ul>
    </Panel>
  );
};
