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
            <p>Fill out the form below.</p>

            <form  onSubmit={submitHandler}>
              <div className='grid1'>
               
                <div className='input'>
                  <span>
                    Dog Name <label>*</label>
                  </span>
                  <input type='text' name='fname' ref={firstnameInputRef} required />
                </div>
                <div className='input'>
                  <span>
                    Dog Breed <label>*</label>
                  </span>
                  <input type='text' name='lname' ref={lastnameInputRef} required />
                </div>
                <div className='input'>
                  <span>
                    Dog Image <label>*</label>
                  </span>
                  <input type='text' name='phone' ref={phoneInputRef} required  />
                </div>
                <div className='input'>
                  <span>
                    Height <label>*</label>
                  </span>
                  <input type='email' name='email' ref={emailInputRef} required />
                </div>
                <div className='input'>
                  <span>Weight</span>
                  <input type='text' name='subject' ref={subjectInputRef}  />
                </div>
                <div className='input'>
                  <span>Life Expectancy</span>
                  <input type='text' name='company' ref={companyInputRef}  />
                </div>
              </div>
              <div className='input inputlast'>
                <span>
                  Dog Family Life <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message'ref={messageInputRef} ></textarea>
              </div>
              <div className='input inputlast'>
                <span>
                  Dog Physicality <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message'ref={messageInputRef} ></textarea>
              </div>
              <div className='input inputlast'>
                <span>
                  Social Life <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message'ref={messageInputRef} ></textarea>
              </div>
              <div className='input inputlast'>
                <span>
                  Dog Personality <label>*</label>
                </span>
                <textarea cols='30' rows='5' name='message'ref={messageInputRef} ></textarea>
              </div>
              <button className='primary-btn'>Submit Now</button>
            </form>
          </div>

        
            
         
        </div>
      </section>

     
    </>
  )
}

export default ContactFrom
