import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <a href="mailto:sskssvamsi@gmail.com" target='_blank'>Send a message</a>
            </article>

            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <a href="https://api.whatsapp.com/send?phone=9676964781" target='_blank'>Send a message</a>
            </article>

        </div>
        </div>
    </section>
  )
}

export default Contact

