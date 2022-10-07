import { Panel, Item } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ incrementState }) => {
  return (
    <Panel>
      <h2>Please leave feedback</h2>
      <ul>
        <Item
          onClick={() => {
            incrementState('good');
          }}
        >
          <div>😀</div>
          <p>Good</p>
        </Item>
        <Item
          onClick={() => {
            incrementState('neutral');
          }}
        >
          <div>😐</div>
          <p>Neutral</p>
        </Item>
        <Item
          onClick={() => {
            incrementState('bad');
          }}
        >
          <div>🙁</div>
          <p>Bad</p>
        </Item>
      </ul>
    </Panel>
  );
};
