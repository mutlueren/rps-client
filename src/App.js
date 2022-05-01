import './style/App.css';
import React, {useState, useEffect} from 'react';
import RockImage from "./resources/rock.jpeg";
import PaperImage from "./resources/paper.jpeg";
import ScissorsImage from "./resources/scissors.jpeg";
import GameBanner from "./resources/banner.png";
import axios from 'axios';
import './score/Score.js';
import Score from './score/Score.js';

function App() {

  const [userChoiceToWord,setUserChoiceToWord] = useState();
  const [response,setResponse] = useState();
  const [isReset,setIsReset] = useState(false);

  useEffect(function(){
    onSubmit()
  },[userChoiceToWord])

  async function onSubmit() {
    try {
      if(userChoiceToWord === "Rock" || userChoiceToWord === "Paper" || userChoiceToWord === "Scissors" ){
        const response = await axios.post('http://localhost:8080/rps?choise='+userChoiceToWord);
        setResponse(response.data)
        setIsReset(false)
      }
    } catch (err) {
      setResponse(err.data)
      setIsReset(true)
    }
  }

  function setRock(){
    setUserChoiceToWord("Rock");
  }

  function setPaper(){
    setUserChoiceToWord("Paper");
  }

  function setScissors(){
    setUserChoiceToWord("Scissors");
  }

  function resetValues(){
    setUserChoiceToWord();
    setResponse();
    setIsReset(true);
  }

  return (
    <div className="App">
      <Score response={response} reset={isReset}/>
      <img src={GameBanner} />
      <br></br>
      <button><img src={RockImage} alt="rock" onClick={setRock}/></button>
      <button><img src={PaperImage} alt="paper" onClick={setPaper} /></button>
      <button><img src={ScissorsImage} alt="scissors" onClick={setScissors} /></button>
      <h2>{response}</h2>
      <button onClick={resetValues}>Reset Game</button>
    </div>
  );
}

export default App;
