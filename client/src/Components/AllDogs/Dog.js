import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import DogFrom from "./DogFrom"
import { useHistory } from 'react-router-dom';

const Dog = () => {

  const history = useHistory();

  function addMovieHandler(contactDetails){
    fetch('https://contact-us-bfcd2-default-rtdb.firebaseio.com/contact.json',
    {
     method:'POST',
     body:JSON.stringify(contactDetails),
     headers:{
            'Content-Type':'application/json'
     }
    }
    ).then(() => {
      history.replace('/');
    });
}
  return (
    <>
      {/* <HeadTitle /> */}
      <DogFrom onAddContact={addMovieHandler}/>
    </>
  )
}

export default Dog
