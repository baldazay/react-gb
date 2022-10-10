import './App.css';
import Message from './components/message/Message';




function App() {

  const greetings = "Hi there! I'm React App."
  const name = "Alisher"

  return (
    <div className="App">
      <Message hello={greetings} name={name} />
    </div >
  );


}

export default App;
