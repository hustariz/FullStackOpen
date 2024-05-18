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
const DisplayAnimalsArray = ({arrayname, array}) =>{
  return (
    <div>
      <h2>{arrayname}</h2>
      <ul>
        {array.map((animal, i) => (
          <li key={i}>{animal.name}: {animal.species}</li>
        ))}
      </ul>
    </div>
  );
};

const DisplayAnimalsName = ({arrayname, array}) =>{
  return (
    <div>
      <h2>{arrayname}</h2>
      <ul>
        {array.map((name, i) => (
          <li key={i}>{name}</li>
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
  /*const isDog = function(array) {
    return array.species === 'dog'
  }
  Since ECMAScript6 we can use arrowfunctions instead of function: */
  // const isArrowDog = array => {return array.species === 'dog'} Shorter
  const isArrowDog = array => array.species === 'dog' // Even Shorter
  
  let filterDogs = animals.filter(isArrowDog);
  let otherAnimals = animals.filter(array => !isArrowDog(array));

  let forNames = []
  for (let i = 0; i < animals.length; i++) {
    forNames.push(animals[i].name)
  }
  /*
  let mapNames = animals.map(function(array) {
    return array.name + ' is a ' + array.species
  })
  Same for here we can use arrowfunctions: */
  // let arrowMapNames = animals.map(array =>{return array.name + ' is a ' + array.species}) // Way shorter
  let arrowMapNames = animals.map(array => array.name + ' is a ' + array.species) // Even Shorter


  return (
    <div>
      <Title title={titleFunctionnal}/>
      <DisplayAnimalsArray arrayname='Full Animals Array:' array={animals} />
      <DisplayAnimalsArray arrayname='Fordogs Array:' array={forDogs} />
      <DisplayAnimalsArray arrayname='Filter dogs:'array={filterDogs} />
      <DisplayAnimalsArray arrayname='Filter notDogs:'array={otherAnimals} />
      <DisplayAnimalsName arrayname='ForAnimalsName:'array={forNames} />
      <DisplayAnimalsName arrayname='MapNames:'array={arrowMapNames} />
      <br></br>
      <Footer />

    </div>
  )
}

  


export default App