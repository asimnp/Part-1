import { useState } from "react";

const Display = ({ title }) => {
  return <h2>{title}</h2>;
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Item = ({ name, result }) => {
  return (
    <p>
      {name} {result}
    </p>
  );
};

const Statistics = (props) => {
  const [good, neutral, bad, handleFeedbackAverage, handlePositiveFeedback] =
    props.data;

  if (good || neutral || bad) {
    return (
      <>
        <Item name="Good" result={good} />
        <Item name="Neutral" result={neutral} />
        <Item name="Bad" result={bad} />
        <Item name="All" result={good + neutral + bad} />
        <Item name="Average" result={handleFeedbackAverage()} />
        <Item name="Positive" result={handlePositiveFeedback()} />
      </>
    );
  }

  return <p>No feedback given.</p>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const handleFeedbackAverage = () => (good + neutral + bad) / 3;
  const handlePositiveFeedback = () => {
    const total = good + neutral + bad;

    if (total === 0) {
      return `0%`;
    }

    return `${good / total}%`;
  };

  return (
    <div>
      <Display title="Give Feedback" />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <Display title="Statistics" />
      <Statistics
        data={[
          good,
          neutral,
          bad,
          handleFeedbackAverage,
          handlePositiveFeedback,
        ]}
      />
    </div>
  );
};

export default App;
