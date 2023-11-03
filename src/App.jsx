import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log("puppies: ", puppyList);

  return (
      <div className="App"> 
        {
          puppies.map((puppy) => {
            return <p>{puppy.name}</p>
          })
        }
    </div> 
  );
}

export default App
