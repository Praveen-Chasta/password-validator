import { useState } from 'react'
import './App.css'

function App() {
  
  const [message, setMessage] = useState('Test Your Password');
  
  const uppercase = /[A-Z]/
  const lowercase = /[a-z]/
  const numbers = /[0-9]/
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;


  
  const handlepassword = (e) => {
    const value = e.target.value;

    console.log()
    if(value.length < 8 || !uppercase.test(value) || !lowercase.test(value) || !numbers.test(value) || !specialChar.test(value)){
       setMessage("Not a Strong Password")
    } 
    else {
      setMessage("Strong Password")
    }

  }


  return (
    <>
     <input type = "text" onChange = {handlepassword}/>
     <p style={{ color: message === 'Strong Password' ? 'green' : 'red' }}>
  {message}
</p>

    </>
  )
}

export default App
