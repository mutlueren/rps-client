import './App.css';
import React, {useState, useEffect} from 'react';
import RockImage from "./resources/rock.jpeg"
import PaperImage from "./resources/paper.jpeg"
import ScissorsImage from "./resources/scissors.jpeg"
import GameBanner from "./resources/banner.png"
import axios from 'axios';


function App() {

  const [userChoiceToWord,setUserChoiceToWord] = useState();
  const [response,setResponse] = useState();

  useEffect(function(){
    onSubmit()
  },[userChoiceToWord])

  async function onSubmit() {
    try {
      if(userChoiceToWord === "Rock" || userChoiceToWord === "Paper" || userChoiceToWord === "Scissors" ){
        const response = await axios.post('http://localhost:8080/rps?choise='+userChoiceToWord);
        setResponse(response.data)
      }
    } catch (err) {
      setResponse(err.data)
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

  return (
    <div className="App">
      <img src={GameBanner} />
      <br></br>
      <button><img src={RockImage} alt="rock" onClick={setRock}/></button>
      <button><img src={PaperImage} alt="paper" onClick={setPaper} /></button>
      <button><img src={ScissorsImage} alt="scissors" onClick={setScissors} /></button>
      <h1>{response}</h1>
    </div>
  );
}

export default App;
