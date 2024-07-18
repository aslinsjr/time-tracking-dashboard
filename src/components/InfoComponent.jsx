import { useState, useEffect } from "react"

import './InfoComponent.css'

const InfoComponent = ({data, timeFrame}) => {

  const [style, setStyle] = useState({})
  const [boxImage, setBoxImage] = useState("")

  function setComponentStyle() {
    if(data.title === "Work") {
      setStyle({backgroundColor: "hsl(15, 100%, 70%)"})
      setBoxImage('icon-work.svg')
     }
   
     if(data.title === "Play") {
      setStyle({backgroundColor: "hsl(195, 74%, 62%)"})
      setBoxImage('icon-play.svg')
     }
     
     if(data.title === "Self Care") {
      setStyle({backgroundColor: "hsl(43, 84%, 65%)"})
      setBoxImage('icon-self-care.svg')
     }
   
     if(data.title === "Social") {
      setStyle({backgroundColor: "hsl(264, 64%, 52%)"})
      setBoxImage('icon-social.svg')
     }
   
     if(data.title === "Study") {
      setStyle({backgroundColor: "hsl(348, 100%, 68%)"})
      setBoxImage('icon-study.svg')
     }
   
     if(data.title === "Exercise") {
      setStyle({backgroundColor: "hsl(145, 58%, 55%)"})
      setBoxImage('icon-exercise.svg')
     }
  }


  useEffect(() => {
    setComponentStyle()
  }, [data])
  

  return (
    <div className='component-container' style={style}>
      <img id="header-img" src={boxImage} alt={data.title + "Icon"} />
      <div className="inner-component">
        <div className="component-header">
          <p>{data.title}</p>
          <img src="./icon-ellipsis.svg" alt="Ellipsis Icon" />
        </div>
        <h2>
          {timeFrame === "Daily" ? data.timeframes.daily.current + "hrs" : <></>}
          {timeFrame === "Monthly" ? data.timeframes.monthly.current + "hrs" : <></>}
          {timeFrame === "Weekly" ? data.timeframes.weekly.current + "hrs" : <></>}
        </h2>
        <p>
          {timeFrame === "Daily" ? "Last day - " + data.timeframes.daily.previous + "hrs" : <></>}
          {timeFrame === "Monthly" ? "Last month - " + data.timeframes.monthly.previous + "hrs" : <></>}
          {timeFrame === "Weekly" ? "Last week - " + data.timeframes.weekly.previous + "hrs" : <></>}
        </p>
      </div>
    </div>
  )
}

export default InfoComponent