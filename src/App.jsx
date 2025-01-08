import { useState } from "react"

const App = () => {
  const [firstname, setfirstname] = useState(" ")
  const [lasname, setlasname] = useState(" ")


  function firstnameupdate(e) {
    setfirstname(e.target.value)
  }

  function lastnameupdate(e) {
    setlasname(e.target.value)
  }


  let fullname = firstname + " " + lasname
  return (
    <>
      <h1> All About name</h1>
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
        value={lasname}
        onChange={lastnameupdate}
         />
      </label>
      <p>your fullname is : {fullname}</p>
    </>
  )
}

export default App