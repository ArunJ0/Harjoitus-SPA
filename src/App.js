import './App.css';
import { useState } from 'react';

function App() {
  const [age,setage] = useState('')
  const [heartrate,setHeartrate] = useState(0)

  const calculate = (e) => {
    e.preventDefault()
    const upper = (220-age)*0.85
    const lower = (220-age)*0.65
    setHeartrate(lower.toFixed()+"-"+upper.toFixed())
  }

  return (
    <div className='tausta'>
      <h2>Heart rate limits calculator</h2>
      <form onSubmit={calculate}>
        <div>
          <label>Age<br/></label>
          <input type="number" value={age} onChange={e => setage(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits<br/></label>
          <output>{heartrate}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
