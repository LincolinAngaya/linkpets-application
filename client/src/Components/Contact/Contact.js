import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import ContactFrom from "./ContactFrom"
import { useHistory } from 'react-router-dom';

const Contact = () => {

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
      <ContactFrom onAddDogs={addDogHandler}/>
    </>
  )
}

export default Contact
