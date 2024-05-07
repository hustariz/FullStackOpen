import { useState } from 'react'

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href='https://github.com/hustariz'>hastarus</a>
    </div>
  )
}

const App = () => {
  const [value, setValue] = useState(10)


  const hello = (who) => {return () => console.log('Hello', who)}
  const compactHello = (who) => () => {console.log('Hello', who)}
  const reset = () => () => {setValue(0)}
  const setToValue = (newValue) => () => {setValue(newValue)}
  const setToValueFunction = (newValue) => {setValue(newValue)}

  return (
    <div>
      <p>{value}</p>
      <button onClick={setToValue(value + 1)}>Increment</button>
      <button onClick={() => setToValueFunction(1000)}>Set to 1000</button>
      <button onClick={reset()}>reset to zero</button>
      <button onClick={hello('world')}>Hello world</button>
      <button onClick={compactHello('react')}>Hello react</button>

      <Footer />
    </div>
  )
}

export default App
