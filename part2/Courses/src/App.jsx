import { useState } from 'react'
import React, { useEffect } from 'react';

const Title = ({title}) => {
  return (
    <h1>{title}</h1>
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

const DisplayCustomersOrders = ({name, object}) =>{
  return (
    <div>
      <h2>{name}</h2>
      {Object.entries(object).map(([customerName, orders], index) => (
        <div key={index}>
          <h4>{customerName}: </h4>
          <ul>
            {orders.map((order, orderIndex) => (
              <li key={orderIndex}>
                {order}
              </li>
            ))}
          </ul>
        </div>
      ))}
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

  const orders = [
    { amount: 250},
    { amount: 400},
    { amount: 100},
    { amount: 325}
  ]

/*
  let totalAmount = orders.reduce(function(sum, order){
    console.log('hello', sum, order);
    return sum + order.amount
  }, 0) */
  let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0) // Shorter

/*  for (let i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
  } */
  console.log(totalAmount);

  // Reduce Exemple number 2
  
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    fetch('/data.txt')
      .then(response => response.text())
      .then(text => setFileContent(text))
      .catch(error => console.error('Error fetching the file:', error));
  }, []);
  const arrayContent = fileContent.split('\n')
  const output = arrayContent.reduce((customers, arrayLine) => {
      const parts = arrayLine.split(' ')
      const customerName = `${parts[0]} ${parts[1]}`; // Concatenate the first two parts to get the full name
      //const customerOrder = 'name: ' + `${parts[2]}` + '; price: ' +  `${parts[4]}`+ '; quantity: ' +  `${parts[5]}`;
      const customerOrder = `order: ${parts.slice(2, -2).join(' ')}; price: ${parts[parts.length - 2]}; quantity: ${parts[parts.length - 1].trim()}`;

      if (!customers[customerName]) {
        customers[customerName] = [];
      }
      customers[customerName].push(customerOrder);
      return customers
    }, {})
    console.log(output);

  return (
    <div>
      <Title title={titleFunctionnal}/>
      <DisplayAnimalsArray arrayname='Full Animals Array:' array={animals} />
      <DisplayAnimalsArray arrayname='Fordogs Array:' array={forDogs} />
      <DisplayAnimalsArray arrayname='Filter dogs:'array={filterDogs} />
      <DisplayAnimalsArray arrayname='Filter notDogs:'array={otherAnimals} />
      <DisplayAnimalsName arrayname='ForAnimalsName:'array={forNames} />
      <DisplayAnimalsName arrayname='MapNames:'array={arrowMapNames} />
      <div>
      <h1>File Content</h1>
      <pre>{fileContent}</pre>
      </div>
      <DisplayCustomersOrders name='Customers Orders' object={output} />
      <br></br>
      <Footer />

    </div>
  )
}

  


export default App