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
        {parts.map(part =>(
            <p key={part.id}>
            {part.name} {part.exercises}
            </p>
        ))}
      </div>
      )
    }

    const Total = ({total}) => 
    {
      return(
      <div> 
         <p><strong>Number of exercises: {total}</strong></p>
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

    return (
        <div>
            {course.map(course => {
            const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
            return (
                <div key={course.id}>
                    <Header title={course.name} />
                    <Content parts={course.parts} />
                    <Total total={total} />
                </div>
            );
        })}
        <br/>
        <Footer />
      </div>
      )
  }
  
  export default Course //Ex2.5