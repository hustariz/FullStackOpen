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

const Display = ({counter}) => <div>{counter}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
  

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})

  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})


  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <Footer />
    </div>
  )
}

export default App