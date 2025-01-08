import { useState } from "react"
const App = () => {
const [firstname, setFirstname] = useState(' ')
const [lastname, setlastname] = useState(' ')

function firstnameupdate(e){
  setFirstname(e.target.value)
}

function lastnameupdate(e){
  setlastname(e.target.value)
}

let fullname = firstname + " " + lastname
  return (
    <>
      <h1>if you click name than update four full name</h1>
      <label>
        First Name: {' '}
        <input 
        value={firstname}
        onChange={firstnameupdate}
        />
      </label>
      <label>
        Last Name: {' '}
        <input 
        value={lastname}
        onChange={lastnameupdate}
        />
      </label>
      <p>Full name : {fullname}</p>
    </>
  )
}

export default App