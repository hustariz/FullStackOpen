import { useState } from 'react'

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href='https://github.com/hustariz'>hastarus</a>
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
  
const History = (props) => {
  if (props.allClicks.length === 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      Button press history : {props.allClicks.join(' ')}
      <p>total {props.total}</p>
    </div>
  )
}
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const[allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }


  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left'/>
      <Button onClick={handleRightClick} text= 'right'/>
      {right}
      <History allClicks={allClicks} total={total}/>
      <Footer />
    </div>
  )
}

export default App