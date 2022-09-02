
import React from 'react'
import "../App.css"


function MonthYear(props) {
  const { displayMonth,
    next_Month,
    prev_Month,
    displayYear,
    change_Month,
    change_Month_Previous } = props

  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const monthDisplay = months[displayMonth]

  return (

    <div className='heading'>
      <h2 className='month-heading'>{monthDisplay} {displayYear}</h2>
      <i class="fa-solid fa-angle-left" onClick={() => { prev_Month(); change_Month_Previous() }}></i>
      <i class="fa-solid fa-angle-right" onClick={() => { next_Month(); change_Month() }}></i>
    </div>
  )
}



export default MonthYear