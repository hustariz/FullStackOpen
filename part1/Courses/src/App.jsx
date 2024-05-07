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

  const handleResetClick = () => {setValue(0)}

  return (
    <div>
      <p>{value}</p>
      <button onClick={handleResetClick}>reset to zero</button>
      <Footer />
    </div>
  )
}

export default App
