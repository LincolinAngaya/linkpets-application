import React from 'react'
import {useRef} from 'react'
 import  '../../HomeSection/Home.css'

function Booking(props) {

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const dateinInputRef = useRef();
  const dateoutInputRef = useRef();
  const adultInputRef = useRef();
  const childrenInputRef = useRef();
  const roomInputRef = useRef();
  


  function submitHandler(e){
    e.preventDefault();

     const enteredname = nameInputRef.current.value;
     const enteredemail = emailInputRef.current.value;
     const enterdatein = dateinInputRef.current.value;
     const enterdateout = dateoutInputRef.current.value;
     const enteredadult = adultInputRef.current.value;
     const enteredchildren = childrenInputRef.current.value;
     const enteredroom = roomInputRef.current.value;
  
     const bookingDetails={
         Name:enteredname,
         Email:enteredemail,
         CheckIn:enterdatein,
         CheckOut:enterdateout,
         Adult:enteredadult,
         Children:enteredchildren,
         Room:enteredroom ,
     };
    
     props.onAddBooking(bookingDetails)

}

  return (
    <>
    <section className='slide-form'>
    <div className='container'>
      <h2>Enjoy Your Holiday</h2>
      <span> Search and Book Hotel</span>

      <form action=''  onSubmit={submitHandler}>
        <input type='text' placeholder='Name' ref={nameInputRef} required/>
        <input type='email' placeholder='Email' ref={emailInputRef} required />
        <div className='flex_space'>
          <input type='date' placeholder='Check In' ref={dateinInputRef}  required />
          <input type='date' placeholder='Check Out' ref={dateoutInputRef} required />
        </div>
        <div className='flex_space'>
          <input type='number' placeholder='Adult(s)(18+)' ref={adultInputRef} required />
          <input type='number' placeholder='Children(0- 17)' ref={childrenInputRef} required />
      
        </div>
        <div className='flex_space'>
        <input type='number' placeholder='Rooms'  ref={roomInputRef} required/>
        <input type='Submit' value='Submit' className='submit' />
        </div>
        
        
      </form>
    </div>
  </section>
  </>
    
  )
}

export default Booking