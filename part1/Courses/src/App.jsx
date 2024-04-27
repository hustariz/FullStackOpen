const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old.</p>
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
  const name = 'Peter'
  const age = 10
  const friends = [
    { name: 'Adrien', age: 30},
    { name: 'Lucie', age: 25},
  ]
  const friendsarray = ['friendfromarray1 ', 'friendfromarray2']
  return (
    <>
      <h1>Greetings</h1>

      <Hello />
      <Hello name='George' age={26+10}/>
      <Hello name={name} age={age}/>
      <p>my friends are:</p>
      <p>{friends[0].name}, {friends[0].age} ans.</p>
      <p>{friends[1].name}, {friends[1].age} ans.</p>
      <p>{friendsarray}</p>
      <Footer />
    </>
  )
}

export default App