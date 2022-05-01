import React, {useState, useEffect} from 'react';
import './Score.css';

function Score({response,reset}) {
//response and reset value comes from App.js
  const [userScore,setUserScore] = useState(0);
  const [cpuScore,setCpuScore] = useState(0);

  useEffect(function(){
    parseResponse()
    winControl()
  },[response])

  useEffect(function(){
    resetScore()
  },[reset])

  function parseResponse(){
      if(response!=null && response.includes("You choose")){
         if(response.includes("You Win!")){
          whenUserWins();
         }else if(response.includes("You Lose!")){
          whenCpuWins();
         }
      }
  }

  function whenUserWins(){
    setUserScore(userScore + 1)
  }

  function whenCpuWins(){
    setCpuScore(cpuScore + 1)
  }

  function winControl(){
    if(userScore == 5){
      alert("You win the game!");
      setUserScore(0);
      setCpuScore(0);
    }else if (cpuScore == 5){
      alert("CPU win the game!");
      setUserScore(0);
      setCpuScore(0);
    }
  }

  function resetScore(){
     if(reset){
        setUserScore(0);
        setCpuScore(0);
     }
  }

  return (
    <div className='Score'>
      <div className='inline-flex-parent'>
          <h3>{"User:"}</h3>
          <h3>{userScore}</h3>
          <h3>{"CPU:"}</h3>
          <h3>{cpuScore}</h3>
      </div>
    </div>
  );
}

export default Score;
