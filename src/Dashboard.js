import React, {useState, useEffect} from 'react'
import Add from './Add.js'

function Dashboard(props) {
    const [events, cEvents] = useState([])
    const [current, cCurrent] = useState(undefined)

    const refreshList = () => {
        props.client.getEvents().then((response) => cEvents(response.data))
    }

    const removeEvent = (_id) => {
        props.client.removeEvent(_id).then(() => refreshList())
    }

    const updateEvent = (eventToUpdate) => {
        cCurrent(eventToUpdate)
    }

    useEffect( () => {
        refreshList()
    }, [])

    const buildrows = () => {
        return events.map( (current) => {
            return (
                <tr key={current._id}>
                    <td>{current.name}</td>
                    <td>{current.type}</td>
                    <td>{current.description}</td>
                    <td>{current.location}</td>
                    <td>{current.date}</td>
                    <td>
                        <button onClick={() => removeEvent(current._id) }>remove</button> 
                        <button onClick={() => updateEvent(current) }>update</button> 
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            Events
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Event name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Date</th>                    
                    </tr>
                </thead>
                <tbody>{buildrows()}</tbody>
            </table>
            <br />
            <br />
            <Add
                client={props.client}
                refreshList={() => {
                    refreshList()
                    cCurrent(undefined)
                }}
                currentEvent={current}
            />
        
        </>
    )




}

export default Dashboard;