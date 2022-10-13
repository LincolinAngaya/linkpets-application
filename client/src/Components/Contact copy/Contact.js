import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import ContactFrom from "./ContactFrom"
import { useHistory } from 'react-router-dom';

const Contact = () => {

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
      <HeadTitle />
      <ContactFrom onAddContact={addMovieHandler}/>
    </>
  )
}

export default Contact
