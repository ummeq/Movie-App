import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect, useReducer} from 'react';
import ReversedString from './Components/ReversedString';


function App() {
  const [resultString, setresultString] = useState();
  const getReverseData = (data) => {
    setresultString(data)
  }
  return (
    <div className="App">
      <h4>Reverse Given String</h4>
      <div className="given-string">
      <ReversedString className="App-intro" sendReverseData={getReverseData}/>
      </div>
      {resultString ? <h1>Reversed String :  {resultString}</h1> : ''}
    </div>
  )
}

export default App;
