import { useState } from 'react'
import Statisitcs from './Components/Statisitcs'
import Buttons from './Components/Buttons'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function clickGood(){
    setGood(prev => prev + 1)
  }

  function clickNeutral(){
    setNeutral(prev => prev + 1)
  }

  function clickBad(){
    setBad(prev => prev + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>

        <Buttons clickGood={clickGood} clickNeutral={clickNeutral} clickBad={clickBad}/>

      <Statisitcs good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
