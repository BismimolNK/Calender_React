import React, { useCallback, useEffect, useState } from 'react'
import "../App.css"
import DaysOfMonth from './DaysOfMonth'
import MonthYear from './MonthYear'
import WeekDays from './WeekDays'


function Calender() {
    var date = new Date()
    var newMonth = date.getMonth()
    var presentDate = new Date()
    var presentMonth = presentDate.getMonth('MM')
    var presentYear = presentDate.getFullYear()

    const [changeMonth, setChangeMonth] = useState(newMonth)
    const[lastDayofMonth,setLastDayofMonth] = useState()
    const[firstDayofMonth,setFirstDayofMonth] = useState()
    const[prevMonthLastDay,setPrevMonthLastDay] = useState()
    const[firstDayofNextMonth,setFirstDayofNextMonth] = useState()
    const [displayMonth, setDisplayMonth] = useState(presentMonth)
    const [displayYear, setDisplayYear] = useState(presentYear)

  useEffect(()=>{
    setLastDayofMonth(new Date(presentYear, changeMonth + 1, 0).getDate())
    setFirstDayofMonth(new Date(presentYear, changeMonth, 1).getDay())
    setPrevMonthLastDay(new Date(presentYear, changeMonth, 0).getDate())
    setFirstDayofNextMonth(new Date(presentYear, changeMonth + 1, 1).getDay())
  },[changeMonth])
 
    const next_Month = useCallback(() => {
        presentMonth = (presentMonth + 1) % 12
        setDisplayMonth(presentMonth)

        presentYear = (presentMonth === 0) ? presentYear + 1 : presentYear
        setDisplayYear(presentYear)

    }, [])

    const prev_Month = useCallback(() => {
        presentMonth = (presentMonth === 0) ? 11 : presentMonth - 1
        setDisplayMonth(presentMonth)

        presentYear = (presentMonth === 11) ? presentYear - 1 : presentYear
        setDisplayYear(presentYear)
    }, [])

    const change_Month = useCallback(() => {
        newMonth = newMonth + 1
        setChangeMonth(newMonth)

    }, [])

    const change_Month_Previous = useCallback(() => {
        newMonth = newMonth - 1
        setChangeMonth(newMonth)

    }, [])

    
    return (    
        <div className='calender_app'>

            <MonthYear next_Month={next_Month} prev_Month={prev_Month} displayMonth={displayMonth}
                displayYear={displayYear} change_Month={change_Month} change_Month_Previous={change_Month_Previous} />

            <WeekDays></WeekDays>

            <DaysOfMonth lastDayofMonth={lastDayofMonth} firstDayofMonth={firstDayofMonth} prevMonthLastDay={prevMonthLastDay}
                firstDayofNextMonth={firstDayofNextMonth} changeMonth={changeMonth} >
            </DaysOfMonth>
           
        </div>
    )
}

export default Calender