import { useState } from "react";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    ["If it hurts, do it more often", 0],
    ["Adding manpower to a late software project makes it later!", 0],
    [
      "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      0,
    ],
    [
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      0,
    ],
    ["Premature optimization is the root of all evil.", 0],
    [
      "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      0,
    ],
    [
      "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
      0,
    ],
  ]);

  // First digit for the cur and the second digit for number of votes
  const [mostPopular, setMostPopular] = useState([0, 0]);

  const [cur, setCur] = useState(0);

  function changeSelected() {
    const newCur = Math.floor(Math.random() * 7);
    
    setCur(newCur)
  }

  function changePoint() {
    const newAnecdotes = [...anecdotes]
    newAnecdotes[cur] = [newAnecdotes[cur][0], newAnecdotes[cur][1] + 1]
    if (newAnecdotes[cur][1] > mostPopular[1])
    {
      setMostPopular([cur, newAnecdotes[cur][1]])
    }
    console.log(newAnecdotes)
    setAnecdotes(newAnecdotes)
  }

  return (
    <div>
      <h3>Anecdote of the day</h3>
      <p>{anecdotes[cur][0]}</p>
      <p>has {anecdotes[cur][1]} votes</p>
      <button onClick={changePoint}>Vote</button>
      <button onClick={changeSelected}>next anecdote</button>
      <h3>Anecdote with the most votes</h3>
      <p>{anecdotes[mostPopular[0]][0]}</p>
      <p>has {mostPopular[1]} votes</p>
    </div>
  );
};

export default App;
