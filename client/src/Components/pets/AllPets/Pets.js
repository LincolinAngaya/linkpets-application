import { useState } from 'react';
import { useEffect } from 'react';
import HeadTitle from '../../../Common/HeadTitle/HeadTitle';
import React from 'react'

import './pets.scss'

 import PetItem from '../card/PetItem';
import Navbar from '../../../Common/Navbar/Navbar';

function Pets() {

  const [isLoading,setIsLoading] = useState(true);
  const [loadedRestaraunts,setLoadedRestaraunts] = useState([]);
  
        useEffect(() => {
           setIsLoading(true)
          fetch('https://linq-restaraunt.herokuapp.com/restaraunts')

          .then(response => {
           return response.json();
          })
       
          .then(data => {

            const restaraunts = [];

            for (const key in data){
              const restaraunt = {
                id:key,
                ...data[key]
              };
              restaraunts.push(restaraunt);
            }
             setIsLoading(false);
             setLoadedRestaraunts(restaraunts);
          });
        },[]);


        function handleAddReview(newReview) {
          setLoadedRestaraunts([...loadedRestaraunts, newReview]);
      }
 

   if (isLoading){
    return <section>
      <p>loading......</p>
    </section>
   }



  return (
    <>
    <Navbar />
    <HeadTitle />
    {/* <h1 className='heading'>Adopt The Pet</h1>  */}
    <div className='restarauntlist'>
    
     <PetItem  restaraunts={loadedRestaraunts}/>
  
    
    </div>
    </>
  )
}

export default Pets