import { ReactChild, useState } from 'react'
import './App.css'

function App() {
  const [availableTimes, setAvailableTimes] = useState()
  const mockuser1 = "Mock User"
  const [activeUser, setActiveUser] = useState("not updated yet")
  const [timeSelected, setTimeSelected] = useState("not updated yet")
  const [dateSelected, setDateSelected] = useState("not updated yet")
  const changeActiveUser = (e) => {
    setActiveUser(e.target.value)
    console.log("active user: ", activeUser)
  }
  const changeTimeSelected = (e) => {
    setTimeSelected(e.target.value)
    console.log("time selected: ", timeSelected)
  }
  const changeDateSelected = (e) => {
    setDateSelected(e.target.value)
    console.log("date selected: ", dateSelected)
  }
  return (
    <div className="App">
      <header className="App-header">

        <h2>Städa fint AB</h2>
        <p>Har vunnit förstapris i bäst städning 150 år i rad!</p>
        <select value={activeUser} onChange={changeActiveUser}>
          <option value="mockuser1">Mocky User</option>
          <option value="mockuser2">User Mocked</option>
          <option value="mockuser3">Not Real</option>
        </select>
        <select value={dateSelected} onChange={changeDateSelected}>
          <option value="hmm">01-04-22</option>
          <option value="konstigt">02-04-22</option>
          <option value="att göra såhär">03-04-22</option>
        </select>
        <select value={timeSelected} onChange={changeTimeSelected}>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
        </select>
      </header>
    </div>
  )
}

export default App
