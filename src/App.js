import React from 'react';
import './App.css';
import PetInfo from './PetInfo';

const petData = {
  name: 'Ден',
  breed: 'боксер',
  age: '3 роки',
  photo: 'dog.jpg'
};

function App() {
  return (
    <div className="container">
      <h1>Домашній улюбленець</h1>
      <PetInfo {...petData} />
    </div>
  );
}

export default App;

