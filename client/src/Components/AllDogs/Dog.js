import { useState } from 'react';
import { useEffect } from 'react';
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import React from 'react'

import '../AllDogs/dogs.scss'

 import CardItem from '../card/DogItem';
import Navigation from '../../Common/Navigation/Navigation';

function Dogs() {

  const [isLoading,setIsLoading] = useState(true);
  const [loadedDogs,setLoadedDogs] = useState([]);
  const[allDogs, setAllDogs] = useState([]);
  
        useEffect(() => {
           setIsLoading(true)
          fetch('https://booking-666fa-default-rtdb.firebaseio.com/dogs.json')

          .then(response => {
           return response.json();
          })
       
          .then(data => {

            const dogs = [];

            for (const key in data){
              const dog = {
                id:key,
                ...data[key]
              };
              dogs.push(dog);
            }
             setIsLoading(false);
             setLoadedDogs(dogs);
          });
        },[]);
 

   if (isLoading){
    return <section>
      <p>loading......</p>
    </section>
   }

   function handleEntryDelete(id){
    fetch(`https://booking-666fa-default-rtdb.firebaseio.com/dogs.json/${id}`, {
        method: "DELETE"
    })
    const filteredDogs = allDogs?.filter((dog)=> dog?.id !== id);
    setAllDogs(filteredDogs);
}

  return (
    <>
    <Navigation />
    <HeadTitle />
    {/* <h1 className='heading'>Adopt The Pet</h1>  */}
    <div className ='restarauntlist'>
    
     <CardItem  
     handleDelete={handleEntryDelete}
    dogs={loadedDogs}
      />
  
    
    </div>
    </>
  )
}

export default Dogs