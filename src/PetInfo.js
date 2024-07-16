import React from 'react';

const PetInfo = (props) => {
  return (
    <div className="pet-info">
      <img src={`${process.env.PUBLIC_URL}/${props.photo}`} alt="Фото собаки" />
      <h2>Ім'я: {props.name}</h2>
      <p>Порода: {props.breed}</p>
      <p>Вік: {props.age}</p>
    </div>
  );
};

export default PetInfo;
