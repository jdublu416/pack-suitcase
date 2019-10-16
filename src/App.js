import React, { useState } from 'react';
import './App.css';

//components
// import Closet from './components/Closet'
// import Suitcase from './components/Suitcase';
import Container from './components/Closet';
import Navbar from './components/layout/Navbar';

function App() {
  const [closet, setCloset] = useState([
    {
      type: 'Shirt',
      id: 1
    },
    {
      type: 'Shoes',
      id: 2
    },
    {
      type: 'Pants',
      id: 3
    }
  ]);

  const [suitcase, setSuitcase] = useState([]);

  const packItem = item => {
    //take the closet item and push to the suitcase
    setCloset(closet.filter(i => i.id !== item.id));
    setSuitcase([...suitcase, item]);
  };

  const unpack = item => {
    setSuitcase(suitcase.filter(i => i.id !== item.id));
    setCloset([...closet, item]);
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <Container
            list={closet}
            move={packItem}
            buttonName={'Pack'}
          />
          <Container
            list={suitcase}
            move={unpack}
            buttonName={'Unpack'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
