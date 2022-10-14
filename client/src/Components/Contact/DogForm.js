import React from "react"
 import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import DogFrom from "./DogFrom"
import { useHistory } from 'react-router-dom';


const DogForm = () => {

  const history = useHistory();

  function addPetHandler(petDetails){
    fetch('/pets',
    {
     method:'POST',
     body:JSON.stringify(petDetails),
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
      <DogFrom onAddpets={addPetHandler}/>
    </>
  )
}

export default DogForm
