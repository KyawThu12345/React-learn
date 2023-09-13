// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <p>Your name is {props.name} and your age is {props.age}</p>
//     </div>
//   )
// }

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
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}
const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

// const App = () => { //App = root
//   // const now = new Date()
//   // const a = 10
//   // const b = 20
//   // console.log(now, a + b)
//   // return (
//   //   <div>
//   //     <p>Hello world, it is {now.toString()}</p>
//   //     <p>
//   //       {a} plus {b} is {a + b}
//   //     </p>
//   //   </div>
//   // )

//   const name = 'Min Kyaw Thu';
//   const age = 19;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name={name} age={age + 10} />
//       <Hello name='Daisy' age='19' />
//     </div>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
//   return (
//     <div>
//       <Header course={course} />
//       <Content part1={part1} exercises1={exercises1} />
//       <Content part2={part2} exercises2={exercises2} />
//       <Content part3={part3} exercises3={exercises3} />
//       <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
//     </div>
//   )
// }
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} exercises1={part1.exercises} />
      <Content part2={part2.name} exercises2={part2.exercises} />
      <Content part3={part3.name} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }


export default App