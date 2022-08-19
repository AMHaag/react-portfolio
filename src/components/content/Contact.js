import React, { useState } from 'react';
import './contentStyle.css';
import profilePic from '../../images/Ahaag-Photo.jpg';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <div>
      <div className='boxContainer'>
        <div className='boxLeft'>
          <img
            src={profilePic}
            id='profilePicture'
            alt='selfie of Aaron Haag'
          ></img>
        </div>
        <div className='boxRight'>
          <div className='headlineBox'>
            <h1 className='headline'>Contact Me</h1>
          </div>
          <section className='contact-box'>
            <form id='contact-form' onSubmit={handleSubmit}>
              <div id='name-input'>
                <label htmlFor='name'>Name:</label>
                <input
                  type='text'
                  name='name'
                  defaultValue={name}
                  onChange={handleChange}
                />
              </div>
              <div id='email-input'>
                <label htmlFor='email'>Email:</label>
                <input
                  type='email'
                  name='email'
                  defaultValue={email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='message'>Message:</label>
                <textarea
                  name='message'
                  rows='5'
                  defaultValue={message}
                  onChange={handleChange}
                />
                <button type='submit'>Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
