import React, { useState, useCallback, useEffect } from 'react'

function Event(props) {
    const { setEvent,
    key,
  event } = props

    const [text, setText] = useState('')
    const [reminder, setReminder] = useState([])

    useEffect(()=>{
        const jsonValue = JSON.stringify(reminder)
        localStorage.setItem('reminder'+key, jsonValue)

      },[event])

    const addReminder = () => {
        setReminder(prevState => [...prevState, { id: Date.now(), content: text }])
        setText('')
        }
    const deleteEvent = useCallback((item) => {
         setReminder([...reminder].filter((event) => event.id !== item.id))
    
      }, [reminder])

    return (
        <div className='event_PopUp'>
            <div className='overlay'></div>
            <div className="app">
                <div className="mainHeading">
                    <h2>Events</h2>
                    <button onClick={() => { setEvent(false) }} type='button'>X</button>
                </div>
                <div className="input">
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Add item..." />
                    <i onClick={addReminder} class="fa-solid fa-plus"></i>
                </div>
                <div className="todos">
                            { reminder.map((item) => {
                                return ( <div className='todo'>
                                        <div className="left">
                                            <p>{item.content}</p>
                                        </div>
                                         <div className="right"><i onClick={() => deleteEvent(item)} class="fa-solid fa-trash-can"></i>
                                        </div>
                                    </div>)
                                })
                        }
                    </div>
            </div>
        </div>
    )
}

export default Event

// const fetchLocalStorageData = () => {
//     try {
//       const temp = localStorage.getItem('reminder')
//       return JSON.parse(temp)
//     } catch (error) {
//       return []
//     }
//   }