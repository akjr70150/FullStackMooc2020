import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statti = ({ text, value, character }) => {
  return (
    <p>{text} {value} {character}</p>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  console.log('statistics: ')
  if(good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div class="statisticsTable">
      <table class="testi">
        <tbody>
          <Statti text='Good' value={good} />
          <Statti text='Neutral' value={neutral} />
          <Statti text='Bad' value={bad} />
          <Statti text='All' value={good + neutral + bad} />
          <Statti text='Average' value={(good - bad) / (good + neutral + bad)} />
          <Statti text='Positive' value={good / (good + neutral + bad) * 100} character='%'/>
        </tbody>
      </table>
      </div>
    )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div class="feedbackForm">
      <h1>Give feedback</h1>
      <Button text='GOOD' handleClick={() => setGood(good + 1)}/>
      <Button text='NEUTRAL' handleClick={() => setNeutral(neutral + 1)}/>
      <Button text='BAD' handleClick={() => setBad(bad + 1)}/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>  
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))