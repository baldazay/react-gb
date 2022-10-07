import './App.css';
import Message from './components/message/Message';
import Form from './components/form/Form';
import { useState, useEffect } from 'react';


function App() {

  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState({
    author: '',
    text: ''
  });

  const BOT_ANSWER = "You've been placed in a queue. We will contact you when your turn comes."

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'Chatbot') {
      setTimeout(() => {
        setMessageList(prevstate => [...prevstate, { text: BOT_ANSWER, author: 'Chatbot' }])
      }, 2000)
    }
  }, [messageList]);


  return (
    <div className="App">
      <Form message={message} setMessage={setMessage} messageList={messageList} setMessageList={setMessageList} />
      <ul className='message-list'>
        {messageList.map((msg, i) => <Message author={msg.author} text={msg.text} key={i} />)}
      </ul>
    </div >
  );

}

export default App;


//, setMessage({ ...message, date: new Date().toLocaleTimeString() })