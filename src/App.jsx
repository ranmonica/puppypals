import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log("puppies: ", puppyList);

  const [featPupId, setFeatPupId] = useState(null)


  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  
  return (
    <>
      {featPupId && (
        <div class="feat-pup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        {puppies.map((puppy) => {
            return <p onClick={() => { setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
        })}
    </>
  )
}

export default App
