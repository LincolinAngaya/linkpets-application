import React from 'react'
import {useRef} from 'react'
import "./Contact.css"

const ContactFrom = (props) => {
  const firstnameInputRef = useRef();
    const lastnameInputRef = useRef();
    const phoneInputRef = useRef();
    const emailInputRef = useRef();
    const subjectInputRef = useRef();
    const companyInputRef = useRef();
    const messageInputRef = useRef();


    function submitHandler(e){
      e.preventDefault();

       const enteredFirstname = firstnameInputRef.current.value;
       const enteredLastname = lastnameInputRef.current.value;
       const enteredPhone = phoneInputRef.current.value;
       const enteredEmail = emailInputRef.current.value;
       const enteredSubject = subjectInputRef.current.value;
       const enteredCompany = companyInputRef .current.value;
       const enteredMessage = messageInputRef.current.value;
    
       const contactDetails={
           FirstName:enteredFirstname,
           LastName:enteredLastname,
           Phone:enteredPhone,
           Email:enteredEmail,
           Subject:enteredSubject,
           Company:enteredCompany,
           Message:enteredMessage,
       };
      
       props.onAddContact(contactDetails)
}
 
 
  return (
    <>
      <section className='contact mtop'>
        <div className='container flex'>
          <div className='main-content'>
            <h2>Contact From</h2>
            <p>Fill out the form below, we will get back you soon.</p>

            <form  onSubmit={submitHandler}>
              <div className='grid1'>
                <div className='input'>
                  <span>
                    First Name <label>*</label>
                  </span>
                  <input type='text' name='fname' ref={firstnameInputRef} required />
                </div>
                <div className='input'>
                  <span>
                    Last Name <label>*</label>
                  </span>
                  <input type='text' name='lname' ref={lastnameInputRef} required />
                </div>
                <div className='input'>
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input type='text' name='phone' ref={phoneInputRef} required  />
                </div>
                <div className='input'>
                  <span>
                    Email <label>*</label>
                  </span>
                  <input type='email' name='email' ref={emailInputRef} required />
                </div>
                <div className='input'>
                  <span>Subject</span>
                  <input type='text' name='subject' ref={subjectInputRef}  />
                </div>
                <div className='input'>
                  <span>Your Company</span>
                  <input type='text' name='company' ref={companyInputRef}  />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea cols='30' rows='10' name='message'ref={messageInputRef} ></textarea>
              </div>
              <button className='primary-btn'>Submit Now</button>
            </form>
          </div>

          <div className='side-content'>
            <h3>Visit our location</h3>
            <p>we are located in the streets f nairobi along Kimathi roads in CBD.</p>
            <br />

            <h3>Message us</h3>
            <span>info@guinness.com</span>
            <br />
            <span>+254705001954</span>
            <br />

            <div className='icon'>
              <h3>Follow Us</h3>

              <div className='flex_space'>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-linkedin'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-pinterest'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  )
}

export default ContactFrom
