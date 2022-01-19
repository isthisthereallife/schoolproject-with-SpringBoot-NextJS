import React, { useState } from 'react'
export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleChange = ((event) => {
    if (event.target.name === "username") {
        setUsername(event.target.value)
    } else {
         setPassword(event.target.value)
        }
        console.log(username)
        console.log(password)


  })
  const handleSubmit = ((event) => {
    event.preventDefault()
    console.log("username:", username, "  password:", password)

    
  })

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="username"
          name="username"
          placeholder="username"
          onChange={handleChange}
          />
        </div>
        <div>
          <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          />
        </div>
        <button type="submit" >Submit</button>
      </form>

    )
  }
