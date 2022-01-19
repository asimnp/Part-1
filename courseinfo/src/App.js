const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.courseData[0]} {props.courseData[1]}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part courseData={props.data[0]} />
      <Part courseData={props.data[1]} />
      <Part courseData={props.data[2]} />
    </>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundaments of React";
  const exercises1 = 10;
  const part2 = "Using props to pass the data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        data={[
          [part1, exercises1],
          [part2, exercises2],
          [part3, exercises3],
        ]}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
