import BarChart from './BarChart'
import LineGraph from './LineGraph'
import Summary from './Summary'
import './Student.css'
//import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'

const Student = () => {


    return (
        <div className="container">
            {/* <form>
            <select name='student_name'>
                {}
	        </select>
            </form>

            //request */}

            <Summary/>
            <h1>Session vs Total Points</h1><br/>
            <LineGraph/>
        
            <h1>Session vs Game points</h1><br/>
                <h2>Mumbo Jumbo</h2>
                <BarChart/>
                <br/><br/>
                <h2>Slides and Ladders</h2>
                <BarChart/>
                <br/>
                <h2>Reproduction Puzzle</h2>
                <BarChart/>
                <br/><br/>
                <h2>Quiz</h2>
                <BarChart/>	
        </div>
    )
}

export default Student
