import { useState } from 'react'

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href='https://github.com/hustariz'>hastarus</a>
    </div>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)


  console.log('rendering...', counter)


  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <div>{counter}</div>
      <button onClick={increaseByOne}>
      plus
      </button>
      <button onClick={setToZero}>
      zero
      </button>
      <Footer />
    </div>
  )
}

export default App