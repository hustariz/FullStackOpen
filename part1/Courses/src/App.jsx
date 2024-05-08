import { useState } from 'react'

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href='https://github.com/hustariz'>hastarus</a>
    </div>
  )
}
const Display = (props) => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const [value, setValue] = useState(10)


  const hello = (who) => {return () => console.log('Hello', who)}
  const compactHello = (who) => () => {console.log('Hello', who)}
  const reset = () => () => {setValue(0)}
  const setToValue = (newValue) => () => {setValue(newValue)}
  const setToValueFunction = (newValue) => {setValue(newValue)}

  return (
    <div>
      <Display value={value}/>
      <Button handleClick={setToValue(value + 1)} text="Increment"/>
      <Button handleClick={() => setToValueFunction(1000)}text="Set to 1000"/>
      <Button handleClick={reset()}text="reset to zero"/>
      <Button handleClick={hello('world')}text="Hello world"/>
      <Button handleClick={compactHello('react')}text="Hello react"/>

      <Footer />
    </div>
  )
}

export default App
