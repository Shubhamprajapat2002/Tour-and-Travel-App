import React from 'react'
import './ContactFormstyle.css'

const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1>Send a message to us!</h1>
        <form>
            <input placeholder='Name'/>
            <input placeholder='Email'/>
            <input placeholder='Subject'/>
            <input placeholder='Contact'/>
            <textarea placeholder='Message' rows="4">

            </textarea>
            <button>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default ContactForm