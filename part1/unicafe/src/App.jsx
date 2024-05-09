import { useState } from 'react'

const Title = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Display = ({title, value}) => <div>{title}{value}</div>

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)



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
  const incrementGood = (newValue) => () => {setGood(newValue)}
  const incrementNeutral = (newValue) => () => {setNeutral(newValue)}
  const incrementBad = (newValue) => () => {setBad(newValue)}

  return (
    <div>
      <Title title={titleFeed}/>
      <Button handleClick={incrementGood(good + 1)} text="Good"/>
      <Button handleClick={incrementNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={incrementBad(bad + 1)} text="Bad"/>

      <Title title={titleStat}/>
      <Display title='Good: ' value={good}/>
      <Display title='Neutral: 'value={neutral}/>
      <Display title='Bad: 'value={bad}/>
      <br></br>
      <Footer />
    </div>
  )
}

export default App