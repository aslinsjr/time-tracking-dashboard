import './ProfileComponent.css'

const ProfileComponent = ({ handleClick, timeFrame }) => {
  return (
    <div className='profile-container'>
      <div className="inner-profile">
        <img src="image-jeremy.png" alt="" />
        <div className="user-container">
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className='button-control'>
        <button id='daily' style={timeFrame === "Daily" ? {opacity:"1", transform: "scale(1.1)"} : {}} onClick={(e) => handleClick(e)}>Daily</button>
        <button id='weekly' style={timeFrame === "Weekly" ? {opacity:"1", transform: "scale(1.1)"} : {}} onClick={(e) => handleClick(e)}>Weekly</button>
        <button id='monthly' style={timeFrame === "Monthly" ? {opacity:"1", transform: "scale(1.1)"} : {}} onClick={(e) => handleClick(e)}>Monthly</button>
      </div>
    </div>
  )
}

export default ProfileComponent