import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import DogFrom from "./DogFrom"
import { useHistory } from 'react-router-dom';

const DogForm = () => {

  const history = useHistory();

  function addDogHandler(dogDetails){
    fetch('https://contact-us-bfcd2-default-rtdb.firebaseio.com/contact.json',
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
      <HeadTitle />
      <DogFrom onAddDogs={addDogHandler}/>
    </>
  )
}

export default DogForm
