const Header = (props) => 
{
  return(
  <h1>{props.course}</h1>
  )
}

const Content = (props) =>
 {
  return(
  <div>
      <Part1 part1={props.part1} exercises1={props.exercises1}/>
      <Part2 part2={props.part2} exercises2={props.exercises2}/>
      <Part3 part3={props.part3} exercises3={props.exercises3}/>
  </div>
  )
}
const Part1 = (props) =>
{
  return(
    <p>
      {props.part1} {props.exercises1}
    </p>
  )
}
const Part2 = (props) =>
{
  return(
    <p>
      {props.part2} {props.exercises2}
    </p>
  )
}
const Part3 = (props) =>
{
  return(
    <p>
      {props.part3} {props.exercises3}
    </p>
  )
}

const Total = (props) => 
{
  return(
  <div> 
     <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  </div>
  )
}

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
      ...
    </div>
  )
}
export default App