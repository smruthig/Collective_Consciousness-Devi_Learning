import React from 'react'

const Summary = (props) => {
const mystyle={
    border: '7px outset lightpink',
    padding: '20px'
}

    return (
        <div className="container" style={mystyle}>
            <h2>Student Summary</h2>
            <p>
                <big>
                    <i>Name: </i> {props.name}<br/>
                    <i>Id: </i> {props.id}<br/>
                    <i>Points: </i> {props.points}<br/>
                    <i>Attendance: </i> {props.attendance}<br/>
                </big>
            </p>
        </div>
    )
}

Summary.defaultProps = {
    name: 'Unknown',
    id: 'Unknown',
    points: 'Unknown',
    attendance: 'Unknown'
}

export default Summary
