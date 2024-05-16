import { useState } from 'react'

const Title = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)


const StatisticLine = (props) =>
  <tr>
    <th>{props.text}</th>
    <th>{props.value}</th>
  </tr>

const VoteLine = (props) =>
  <div>
    <p>Has {props.value} votes.</p>
  </div>


const Statistics = (props) => 
  <table>
     <tbody>
      <StatisticLine text={props.goodTitle} value={props.goodValue} />
      <StatisticLine text={props.neutralTitle} value={props.neutralValue} />
      <StatisticLine text={props.badTitle} value={props.badValue} />
      <StatisticLine text={props.allTitle} value={props.allValue} />
      <StatisticLine text={props.averageTitle} value={props.averageValue} />
      <StatisticLine text={props.positiveTitle} value={props.positiveValue} />
    </tbody>
  </table>


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
  const titleAnecdote = 'Anecdote of the day'
  const titleAnecdoteMostVoted = 'Anecdote with most votes'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  const statsTitles = ['Good: ', 'Neutral: ', 'Bad: ', 'All: ', 'Average: ', 'Positive: ']
  const [feedbackGathered, setFeedbackGathered] = useState(false);
  const [noFeedback, setNoFeedback] = useState(true);

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [anecdote, setAnecdote] = useState(0);
  const [votes, setVote] = useState(new Uint8Array(anecdotes.length));
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState('No vote yet.');
  const [mostVotes, setMostVote] = useState('no');

  


  const handleGoodClick = () => {
    const newGood = good +1; const newAll = all +1
    const newAverage = ((good * 1 + neutral * 0 - bad) + 1) / (all + 1);
    const newPositive = (good / (all + 1)) * 100 + ' %';
    setGood(newGood);setAll(newAll);
    setAverage(newAverage);
    setPositive(newPositive);
    setFeedbackGathered(true);
    setNoFeedback(false);
  }

  const handleNeutralClick = () => {
    const newNeutral = neutral +1; const newAll = all +1
    const newAverage = ((good * 1 + neutral * 0 - bad) + 1) / (all + 1);
    const newPositive = (good / (all + 1)) * 100 + ' %';
    setNeutral(newNeutral);setAll(newAll);
    setAverage(newAverage);
    setPositive(newPositive);
    setFeedbackGathered(true);
    setNoFeedback(false);
  }

  const handleBadClick = () => {
    const newBad = bad +1; const newAll = all +1
    const newAverage = ((good * 1 + neutral * 0 - bad) + 1) / (all + 1);
    const newPositive = (good / (all + 1)) * 100 + ' %';
    setBad(newBad);setAll(newAll);
    setAverage(newAverage);
    setPositive(newPositive);
    setFeedbackGathered(true);
    setNoFeedback(false);
  }
  const handleAnecdoteClick = () => {
    if (anecdote+1 < anecdotes.length){
      const newAnecdote = anecdote+1;
      setAnecdote(newAnecdote);
    } else{
      setAnecdote(0);
    }
  }
  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[anecdote]++;
    setVote(newVotes);

    const newMostVoted = Math.max(...newVotes);
    console.log(newMostVoted);
    console.log(newVotes[anecdote]);
    if(newVotes[anecdote] >= newMostVoted){
      setMostVote(newMostVoted);
      const newMostVotedAnecdote = anecdotes[anecdote];
      setMostVotedAnecdote(newMostVotedAnecdote);
    }
  }
    
  
  return (
    <div>
      <Title title={titleFeed}/>
      <Button handleClick={handleGoodClick} text="Good"/>
      <Button handleClick={handleNeutralClick} text="Neutral"/>
      <Button handleClick={handleBadClick} text="Bad"/>

      <Title title={titleStat}/>
      {noFeedback &&
       (<p>No feedback given.</p>)}
      {feedbackGathered && (
        <Statistics goodTitle={statsTitles[0]} neutralTitle={statsTitles[1]} badTitle={statsTitles[2]}
        allTitle={statsTitles[3]} averageTitle={statsTitles[4]} positiveTitle={statsTitles[5]}
        goodValue={good} neutralValue={neutral} badValue={bad} allValue={all} averageValue={average} positiveValue={positive}/>
      )}
      <br></br>
      <Title title={titleAnecdote}/>
      <div>
        <p>{anecdotes[anecdote]}</p>
      <VoteLine value={votes[anecdote]}/>
      <Button handleClick={handleVoteClick} text="Vote"/> 
      <Button handleClick={handleAnecdoteClick} text="Next anecdote!"/>
      </div>
      <Title title={titleAnecdoteMostVoted}/>
      <p>{mostVotedAnecdote}</p>
      <VoteLine value={mostVotes}/>
      <br></br>
      <Footer />

    </div>
  )
}


export default App