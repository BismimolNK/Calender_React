import React, { useState } from 'react'
import Event from './Event'
import "../App.css"


function DaysOfMonth(props) {
  const { lastDayofMonth,
    firstDayofMonth,
    firstDayofNextMonth,
    changeMonth } = props

  const [event, setEvent] = useState(false)
  const [key,setKey] = useState(key)
  
    
  const datePick = (date) => {
    var d = new Date()
    d.setDate(date)
    d.setMonth(changeMonth)
    setKey(d)
    setEvent(!event)}

  console.log(key);

  var days = []

  if (firstDayofMonth > 0) {
    for (var k = 1; k <= firstDayofMonth; k++) {
      days.unshift("")

    }
  }

  for (var i = 1; i <= lastDayofMonth; i++) {
    days.push(i)
  }

  if (firstDayofNextMonth !== 0)
    for (var j = 1; j <= 7 - firstDayofNextMonth; j++) {
      days.push("")
    }

  return (
    <div className='Days'>
      <div className='days_of_month'>
        {
          days.map((day) => {
            return <div >
              <button key={key}  value={day} onClick={() => datePick(day)}>{day}</button>
            </div>
          })
        }
      </div>
      {event && (
        <Event setEvent={setEvent} key= {key} event={event} />
      )}
    </div>
  )
}

export default DaysOfMonth