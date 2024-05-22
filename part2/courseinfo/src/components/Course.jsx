const Header = ({title}) => 
    {
      return(
      <h1>{title}</h1>
      )
    }
    
    const Content = ({parts}) =>
     {
      return(
      <div>
          <Part1 part1={parts[0].name} exercises1={parts[0].exercises}/>
          <Part2 part2={parts[1].name} exercises2={parts[1].exercises}/>
          <Part3 part3={parts[2].name} exercises3={parts[2].exercises}/>
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
    
    const Total = ({total}) => 
    {
      return(
      <div> 
         <p>Number of exercises: {total}</p>
      </div>
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
   const total = course.parts.reduce((sum, part) =>  sum + part.exercises, 0)

    return (
        <div>
          <Header title={course.name} />
          <Content parts={course.parts} />
          <Total total={total} />
          <br></br>
        <Footer />
        </div>
      )
  }
  
  export default Course