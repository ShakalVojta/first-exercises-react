import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [greetings, setGreetings] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  return (
  <>
  <div>
  {
    greetings === '' ? ( 
      <h1>Please tell us some information about you! </h1>) : (<h1>{greetings}</h1>)
  }

  <form
  onSubmit = {(e) => {
    e.preventDefault()

    if(gender === 'male') {
      setGreetings(`Hello Mr. ${name}. Your age is ${age}`)
    } else if(gender === 'female') {
      setGreetings(`Hello Mrs. ${name}. Your age is ${age}`)
    } else{
      setGreetings(`Hello YOU ${name}. Your age is ${age}`)
    }
  }}
>
  <input type="text" placeholder='FullName' value={name} onChange={(e) => { setName(e.target.value)}} />
  <input type="text" placeholder='Your age' value={age} onChange={(e) => { setAge(e.target.value)}} />
  <select value={gender} onChange={(e) => { setGender(e.target.value)}}>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
  </select>
  <button type='submit'>Lets greet you!</button>
  </form>
  </div>
  </>
  )
}

export default App
