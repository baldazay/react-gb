import './App.css';
import Message from './components/message/Message';
import ChatList from './components/chatList/ChatList';
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
      <div className='chatlist-wrp'>
        <ChatList />
      </div>
      <div className='chat-wrp'>
        <div className='message-list-wrp'>
          <ul className='message-list'>
            {messageList.map((elem, i) => <Message author={elem.author} text={elem.text} key={i} />)}
          </ul>
        </div>
        <div className='message-form-wrp'>
          <Form className="message-form" message={message} setMessage={setMessage} messageList={messageList} setMessageList={setMessageList} />
        </div>

      </div>

    </div >
  );

}

export default App;


//, setMessage({ ...message, date: new Date().toLocaleTimeString() })