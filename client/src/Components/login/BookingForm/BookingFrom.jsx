
import Booking from './Booking'
import React from "react"
import HeadTitle from '../../../Common/HeadTitle/HeadTitle';
import { useHistory } from 'react-router-dom';

function BookingFrom() {

  const history = useHistory();

  function addBookingHandler(bookingDetails){
    fetch('https://booking-666fa-default-rtdb.firebaseio.com/bookings.json',
    {
     method:'POST',
     body:JSON.stringify(bookingDetails),
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
      <Booking  onAddBooking={addBookingHandler}/>
     
    </>
  )
}

export default BookingFrom
