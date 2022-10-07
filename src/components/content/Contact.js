import React, { useState } from 'react';
import './contentStyle.css';
import profilePic from '../../images/Ahaag-Photo.jpg';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

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

  function sendToast() {
    toast.promise(
      emailjs.send(
        'service_cfbmo1i',
        'template_9fe2v2s',
        formState,
        '42e7mfMHiKywSccmq'
      ),
      {
        loading: 'Loading',
        success: (data) => `Message sent!`,
        error: (err) => `This just happened: ${err.toString()}`,
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 4000,
        },
      }
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    setFormState({
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    });
    sendToast();
  }

  return (
    <div>
      <Toaster />
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
                  // onChange={handleChange}
                />
              </div>
              <div id='email-input'>
                <label htmlFor='email'>Email:</label>
                <input
                  type='email'
                  name='email'
                  defaultValue={email}
                  // onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='message'>Message:</label>
                <textarea
                  name='message'
                  rows='5'
                  defaultValue={message}
                  // onChange={handleChange}
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
