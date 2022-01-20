import { useState } from "react";

const Display = ({ title }) => {
  return <h2>{title}</h2>;
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Item = ({ name, total }) => {
  return (
    <p>
      {name} {total}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Display title="Give Feedback" />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />

      <Display title="Statistics" />
      <Item name="Good" total={good} />
      <Item name="Neutral" total={neutral} />
      <Item name="Bad" total={bad} />
    </div>
  );
};

export default App;
