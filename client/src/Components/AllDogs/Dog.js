import { useState } from 'react';
import { useEffect } from 'react';
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import React from 'react'

import '../AllDogs/dogs.scss'

 import CardItem from '../card/DogItem';
import Navigation from '../../Common/Navigation/Navigation';

function Dogs() {

  
  const [pets, setPets] = useState([]);
  
        useEffect(() => {
           fetch('/pets')

          .then(response =>  response.json())
          .then(setPets)
        },[]);
 

   const deletePets = async (id) => {
    await fetch(`/pets/${id}`, {
      method: 'DELETE',
    })

    setPets(pets.filter((pet) => pet.id !== id ))
  }


  return (
    <>
    <Navigation />
    <HeadTitle />
   
    <div className ='restarauntlist'>
    
     <CardItem  onDelete={deletePets} pets = {pets} />
  
    
    </div>
    </>
  )

  }
export default Dogs





















// import { useState, useEffect } from 'react';
// import Article from './Article';
// import React from 'react';
// import './Articles.css'
// import NewArticle from './NewArticle'


// function Articles() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetch("/articles")
//       .then((res) => res.json())
//       .then(setArticles)
//   }, [])
  
//   const deleteArticle = async (id) => {
//     await fetch(`/articles/${id}`, {
//       method: 'DELETE',
//     })

//     setArticles(articles.filter((article) => article.id !== id ))
//   }
  

//   return (
//     <div className='article_page'>
//       <div className='left_nav'>
//         <div className="Account_Info">
//             <img className="Account_Image"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fd3LvBNTzUGkRTqBX2UMvbrbzNuzShL4ll3pI5YUZg&s"
//                 alt="example"
//             />
           
//             <div className="edit-btn">
//               <button type="submit" className="edit-btn" >Edit Account</button>
//             </div>
//         </div>
//       </div>
//       <div className='middle_sect'>
//         <NewArticle />
//         <Article articles={ articles } onDelete={deleteArticle} />   
//       </div>
//       <div className='right_sect'>

//       </div>
//     </div>
//   )
// }

// export default Articles