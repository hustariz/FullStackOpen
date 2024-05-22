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
          <Part1 part1={props.parts[0].name} exercises1={props.parts[0].exercises}/>
          <Part2 part2={props.parts[1].name} exercises2={props.parts[1].exercises}/>
          <Part3 part3={props.parts[2].name} exercises3={props.parts[2].exercises}/>
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
    
    const Footer = () => {
        return (
          <div>
            Courseinfo app created by <a href='https://github.com/hustariz'>hastarus</a>
          </div>
        )
      }



const Course = ({ course }) => {
    return (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <br></br>
        <Footer />
        </div>
      )
  }
  
  export default Course