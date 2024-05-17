import { useState } from 'react'

const Title = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const ArrayLine = (props) =>{
  return(
  <tr>
    <th>{props.name}:{props.specie}</th>
  </tr>
  )
}
const DisplayArray = ({arrayname, array}) =>{
  return (
    <div>
      <h2>{arrayname}</h2>
      <ul>
        {array.map((dog, i) => (
          <li key={i}>{dog.name}: {dog.species}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      Functionnal programming courses created by <a href='https://github.com/hustariz'>hastarus</a>
    </div>
  )
}

const App = () => {

  const titleFunctionnal = 'Let\' try some functionnal programming: '

  const animals = [
    { name: 'Fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursula', species: 'cat' },
    { name: 'Jimmy', species: 'fish' },
    { name: 'Fizz', species: 'furret' },
  ]  

  let forDogs = []
  for (let i = 0; i < animals.length; i++) {
    if(animals[i].species === 'dog'){
      forDogs.push(animals[i]);
    }
  }
  const isDog = function(animal) {
    return animal.species === 'dog'
  }
  let filterDogs = animals.filter(isDog);
  let otherAnimals = animals.filter(animal => !isDog(animal));

  
  return (
    <div>
      <Title title={titleFunctionnal}/>
      <DisplayArray arrayname='Full Animals Array:' array={animals} />
      <DisplayArray arrayname='Fordogs Array:' array={forDogs} />
      <DisplayArray arrayname='Filter dogs:'array={filterDogs} />
      <DisplayArray arrayname='Filter notDogs:'array={otherAnimals} />
      <br></br>
      <Footer />

    </div>
  )
}


export default App