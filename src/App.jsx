
const Header = (props) => {
  console.log(props);
  return (
    <div>
      <p><h1>{props.course}</h1></p>
    </div>
  )
}
const Content = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.partmkt} {props.exercisesmkt}
      </p>
    </div>
  )
}
const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>Number of exercises {props.totalExercises}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content partmkt={parts[0].name} exercisesmkt={parts[0].exercises} />
      <Content partmkt={parts[1].name} exercisesmkt={parts[1].exercises} />
      <Content partmkt={parts[2].name} exercisesmkt={parts[2].exercises} />
      <Total
        totalExercises={
          parts[0].exercises + parts[1].exercises + parts[2].exercises
        }
      />
    </div>
  )
}


export default App