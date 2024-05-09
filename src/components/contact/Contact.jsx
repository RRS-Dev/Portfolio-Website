import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
         <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>srivastavaraj2402@gmail.com</h5>
          <a href="mailto:srivastavaraj2402@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
         <BsLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>View my Profile</h5>
          <a href="https://www.linkedin.com/in/raj-rajeshwar-s-86498111b/" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
         <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>Text ME</h5>
          <a href="https://wa.me/+918299877348" target="_blank">Send a message</a>
        </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder='Please Enter Your Name' required/>
          <input type="email" name="email" placeholder='Enter your email ID'  required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact