import { useState } from "react";

const Display = ({ title }) => {
  return <h2>{title}</h2>;
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ name, result }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{result}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const [good, neutral, bad, handleFeedbackAverage, handlePositiveFeedback] =
    props.data;

  if (good || neutral || bad) {
    return (
      <table>
        <tbody>
          <StatisticLine name="Good" result={good} />
          <StatisticLine name="Neutral" result={neutral} />
          <StatisticLine name="Bad" result={bad} />
          <StatisticLine name="All" result={good + neutral + bad} />
          <StatisticLine name="Average" result={handleFeedbackAverage()} />
          <StatisticLine name="Positive" result={handlePositiveFeedback()} />
        </tbody>
      </table>
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
