import "./Form.css";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

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
            <TextField id="outlined-basic" label="User" variant="outlined" size="small" className='user-name' value={author} autoFocus ref={input => input && input.focus()} onChange={(event) => setMessage({ ...message, author: event.target.value })} />
            <TextField id="outlined-basic" label="Message" variant="outlined" size="small" className='user-message' value={text} onChange={(event) => setMessage({ ...message, text: event.target.value })} />

            {/*  <label htmlFor='user-name'> User
                <input className='user-name' onChange={(event) => setMessage({ ...message, author: event.target.value })} placeholder='Write your name'></input>
            </label>
            <label htmlFor='user-message'> Message
                <input className='user-message' onChange={(event) => setMessage({ ...message, text: event.target.value })} placeholder='Write your message'></input>
            </label> */}
            {/* ref={input => input && input.focus()} */}

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
        </form >
    )
}

export default Form;
