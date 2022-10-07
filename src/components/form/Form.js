import "./Form.css";

import { useState } from 'react';

function Form({ message, setMessage, messageList, setMessageList }) {

    const { author, text } = message;
    const submitForm = (e) => {
        e.preventDefault()
        if (text.length > 0) {
            setMessageList(prevstate => [...prevstate, { author, text }])
        }
        setMessage(
            {
                author: '',
                text: ''
            }
        )
    }

    return (
        <form onSubmit={submitForm} className="message-form">
            <label htmlFor='user-name'> User
                <input className='user-name' onChange={(event) => setMessage({ ...message, author: event.target.value })} placeholder='Write your name'></input>
            </label>
            <label htmlFor='user-message'> Message
                <input className='user-message' onChange={(event) => setMessage({ ...message, text: event.target.value })} placeholder='Write your message'></input>
            </label>
            <button type='submit' className='send-btn'>send</button>
        </form >
    )
}

export default Form;
