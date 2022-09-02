import React from 'react'
import "../App.css"

function WeekDays() {

    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','saturday']

    return (
        <div className='weekdays'>
            {
                weekDay.map((day) => {
                    return <div>{day}</div>
                })
            }

        </div>
    )
}

export default WeekDays