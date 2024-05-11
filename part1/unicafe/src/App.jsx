import { useState } from 'react'

const Title = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = (props) => 
<div>
  <p>{props.goodTitle}{props.goodValue}</p>
  <p>{props.neutralTitle}{props.neutralValue}</p>
  <p>{props.badTitle}{props.badValue}</p>
  <p>{props.allTitle}{props.allValue}</p>
  <p>{props.averageTitle}{props.averageValue}</p>
  <p>{props.positiveTitle}{props.positiveValue}</p>
</div>


const Footer = () => {
  return (
    <div>
      Unicafe app created by <a href='https://github.com/hustariz'>hastarus</a>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const titleFeed = 'Give feedback'
  const titleStat = 'Statistic'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const statsTitles = ['Good: ', 'Neutral: ', 'Bad: ', 'All: ', 'Average: ', 'Positive: ']

  const handleGoodClick = () => {
    setGood(good+1);setAll(all+1);
    setAverage(((good*1+neutral*0-bad)+1)/(all+1));
    setPositive((good/(all+1))*100 + ' %');}

  const handleNeutralClick = () => {
    setNeutral(neutral+1); setAll(all+1);
    setAverage((good*1+neutral*0-bad)/(all+1));
    setPositive((good/(all+1))*100 + ' %');}

  const handleBadClick = () => {
    setBad(bad+1); setAll(all+1);
    setAverage(((good*1+neutral*0-bad)-1)/(all+1));
    setPositive((good/(all+1))*100 + ' %');}
    
  
  return (
    <div>
      <Title title={titleFeed}/>
      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral"/>
      <Button handleClick={handleBadClick} text="Bad"/>

      <Title title={titleStat}/>

      <Statistics goodTitle={statsTitles[0]} neutralTitle={statsTitles[1]} badTitle={statsTitles[2]}
      allTitle={statsTitles[3]} averageTitle={statsTitles[4]} positiveTitle={statsTitles[5]}
      goodValue={good} neutralValue={neutral} badValue={bad} allValue={all} averageValue={average} positiveValue={positive}/>
      <br></br>
      <Footer />
    </div>
  )
}

export default App