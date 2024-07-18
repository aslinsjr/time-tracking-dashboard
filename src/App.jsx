import { useState, useEffect } from 'react'

import InfoComponent from './components/InfoComponent'
import ProfileComponent from './components/ProfileComponent'

import './App.css'

import data from './data.json'

function App() {

  // const [data, setData] = useState([])
  const [timeFrame, setTimeFrame] = useState("Daily")

  // async function getData() {
  //   try {
  //     await fetch("https://strengthened-treasure-houseboat.glitch.me/dashboardData")

  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(data => {
  //         setData(data.dashboardData)
  //       })
  //   } catch {

  //   }
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  function handleClick(e) {
    e.preventDefault()

    if(e.target.id === "daily") {
      setTimeFrame("Daily")
    }

    if(e.target.id === "weekly") {
      setTimeFrame("Weekly")
    }

    if(e.target.id === "monthly") {
      setTimeFrame("Monthly")
    }
  }

  return (
    <div className='app-container'>
    <div className="info-grid-container">
    <ProfileComponent handleClick={handleClick} timeFrame={timeFrame} />
      {data.map((info) => {
        return <InfoComponent key={info.title} data={info} timeFrame={timeFrame} />
      })}
    </div>
    </div>
  )
}

export default App
