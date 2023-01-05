//Import section
import './App.css';
  // visual elements
import counterLogo from './img/Logo.png'

  //components
import Button from './comp/button.jsx';
import Counter from './comp/counter.jsx';
  //Hooks
import { useState } from 'react';
  // Logic section
      //sets the status of the clicks
function App() {
  const [ numClics, setNumClics ] = useState(0);
      //Adds the number to be displayed each time the button is pressed.
  const listenerClic = () => { 
    setNumClics(numClics + 1);
  };
      //Subtract the total number of clicks pressed with itself to set the value to 0.
  const resetCounter = () =>{
    setNumClics(numClics - numClics)
  };

  //Visual elements

  return (
    <div className="App">      
      <main className='counter_main'>
        <div className='counter_logoContainer'>
          <img 
          className='counter_logo'
          src={counterLogo}
          alt='logo counter space' />
          <h1 className='counter_title'>Click Counter Space</h1>
      </div>
        <div className='counter_numberCon'>
          <Counter value = {numClics}/>
        </div>
        <div className='counter_buttonCon'>
        <Button
        text = 'Clic'
        isClic = {true}
        listenClic = {listenerClic} />
        <Button
        text = 'Reset'
        isClic = {false}
        listenClic = {resetCounter} /> 
        </div>        
      </main>
    </div>
  );
}

export default App;
