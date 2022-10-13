// import React, {useState} from 'react'
// import { useHistory } from "react-router-dom";
// import HeadTitle from '../../../Common/HeadTitle/HeadTitle';
// import "../../login/design.css"

// const DogForm = () => {
//   const history = useHistory();
//     const[name, setName] = useState("");
//     const[breed, setBreed] = useState("");
//     const[height, setHeight] = useState("");
//     const[weight, setWeight] = useState("");
//     const[image, setImage] = useState("");
//     const[life_expectancy, setLife_Expectancy] = useState("");
//     const[family_life, setFamily_Life] = useState("");
//     const[physical, setPhysical] = useState("");
//     const[social_life, setSocial_Life] = useState("");
//     const[personality, setPersonality] = useState("");  


//     function handleOnChange(event){
//       if(event.target.name === "name"){
//         setName(event.target.value);
//         }else if(event.target.name === "breed"){
//           setBreed(event.target.value);
//         }else if (event.target.name === "height"){
//             setHeight(event.target.value);
//         }else if (event.target.name === "weight"){
//             setWeight(event.target.value);
//         }else if (event.target.name === "image"){
//              setImage(event.target.value);
//         }else if (event.target.name === "life_expectancy"){
//              setLife_Expectancy(event.target.value);
//         }else if (event.target.name === "family_life"){
//             setFamily_Life(event.target.value);
//         }else if (event.target.name === "physical"){
//           setPhysical(event.target.value);
//      }else if (event.target.name === "social_life"){
//           setSocial_Life(event.target.value);
//      }
//         else{
//             setPersonality(event.target.value);
//         }  
//       }

//       function handleCreateAccountAlert(responseData = {}){
//         if(Object.values(responseData)[0] === "Admin already Exists"){
//             alert("Admin email already exists, please Login!")
//             history.replace("/sign-in")   
//         }
//         else{
//            alert("Account Created successfully!")
//            history.replace("/")     
//         }
//     }


//     function handleCreateAccount(event){
//         event.preventDefault()
//         const newAdmin = {
//             first_name: firstname,
//             last_name: lastname,
//             location: location,
//             image_url: image,
//             contact: contact,
//             email: email.toLowerCase(), 
//             password: password
//         }
//         fetch("/signup", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             }, 
//             body: JSON.stringify(newAdmin)
//         })
//         .then(response => response.json())
//         .then(responseData => handleCreateAccountAlert(responseData));
//     }
  
//   return (
//     <>
//       <HeadTitle />
//       <section className='forms top'>
//         <div className='container'>
//           <div className='sign-box'>
//             <p>Don't have an account? Create your account, it takes less than a minute.</p>
//             <form action='' onSubmit={handleCreateAccount}>
//               <input type='text' name='name'  placeholder='Dog Name' value ={name} required id="name" onChange={handleOnChange} />
//               <input type='text' name='breed'  placeholder='Breed' value ={breed} required id="breed" onChange={handleOnChange} />
//               <input type='text' name='image_url' placeholder='Dog Image' value ={image} required id="image" onChange={handleOnChange} />
//                <input type='text' name='height' placeholder='Height' value ={height} required id="height" onChange={handleOnChange} />
//                <input type='text' name='weight'  placeholder='Weight' value ={weight} required id="weight" onChange={handleOnChange} />
//               <input type='text' name='life_expectancy'  placeholder='Life Expectancy' value ={life_expectancy} required id="life_expectancy" onChange={handleOnChange} />
//               <div className='input inputlast'>
//                 <span>
//                   Family Life <label>*</label>
//                 </span>
//                 <textarea cols='30' rows='10' name='family_life'value={family_life} id="family_life" onChange={handleOnChange} ></textarea>
//               </div>
//               <div className='input inputlast'>
//                 <span>
//                   Physical Life <label>*</label>
//                 </span>
//                 <textarea cols='30' rows='10' name='physical'value={physical} id="physical" onChange={handleOnChange} ></textarea>
//               </div>
//               <div className='input inputlast'>
//                 <span>
//                   Social Life <label>*</label>
//                 </span>
//                 <textarea cols='30' rows='10' name='social_life'value={social_life} id="social_life" onChange={handleOnChange} ></textarea>
//               </div>
//               <div className='input inputlast'>
//                 <span>
//                   Dog Personality <label>*</label>
//                 </span>
//                 <textarea cols='30' rows='10' name='personality'value={personality} id="personality" onChange={handleOnChange} ></textarea>
//               </div>
//               <button type='submit' className='primary-btn'>
//                 Create an Account
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

      
//     </>
//   )
// }

// export default DogForm
