
const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.partmkt} {props.exercisesmkt}
      </p>
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>Number of exercises {props.totalExercise}</p>
    </div>
  );
};

const App = () => {
  const courses = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  let totalExercises = 0;

  courses.parts.forEach((part) => {
    totalExercises += part.exercises;
  })

  // const totalExercises = course.parts.reduce(
  //   (total, part) => total + part.exercises,
  //   0
  // );

  return (
    <div>
      <Header course={courses.name} />
      <Content partmkt={courses.parts[0].name} exercisesmkt={courses.parts[0].exercises} />
      <Content partmkt={courses.parts[1].name} exercisesmkt={courses.parts[1].exercises} />
      <Content partmkt={courses.parts[2].name} exercisesmkt={courses.parts[2].exercises} />
      <Total totalExercise={totalExercises} />
    </div>
  );
};

export default App;
