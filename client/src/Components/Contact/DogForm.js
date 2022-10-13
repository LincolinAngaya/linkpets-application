import React from "react"
 import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import DogFrom from "./DogFrom"
import { useHistory } from 'react-router-dom';
import Navigation from "../../Common/Navigation/Navigation";

const DogForm = () => {

  const history = useHistory();

  function addDogHandler(dogDetails){
    fetch('https://booking-666fa-default-rtdb.firebaseio.com/dogs.json',
    {
     method:'POST',
     body:JSON.stringify(dogDetails),
     headers:{
            'Content-Type':'application/json'
     }
    }
    ).then(() => {
      history.replace('Adopt-A-Pet');
    });
}
  return (
    <>
    <Navigation />
      <HeadTitle />
      <DogFrom onAddDogs={addDogHandler}/>
    </>
  )
}

export default DogForm
