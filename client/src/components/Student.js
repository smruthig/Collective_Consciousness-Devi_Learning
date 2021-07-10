import BarChart from './BarChart'
import LineGraph from './LineGraph'
import Summary from './Summary'
import './Student.css'
import 'bootstrap/dist/css/bootstrap.css';

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

            <h1>Session vs Total Points</h1><br/>
            <div className="container">
                <div class="row">
                    <div class="col-sm-12 col-lg-5">
                        <LineGraph/>
                        <br/><br/>
                    </div>
                    <div class="col-sm-12 col-lg-2"></div>
                    <div class="col-sm-12 col-lg-5">
                        <Summary/>
                    </div>
                </div>
            </div>
            <br/>
        
            <h1>Session vs Game points</h1><br/>
            <div className="container">
                <div class="row">
                    <div class="col-sm-12 col-lg-5">
                        <h2>Mumbo Jumbo</h2>
                        <BarChart/>
                        <br/><br/>
                    </div>
                    <div class="col-sm-12 col-lg-2"></div>
                    <div class="col-sm-12 col-lg-5">
                        <h2>Slides and Ladders</h2>
                        <BarChart/>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-sm-12 col-lg-5">
                        <h2>Reproduction Puzzle</h2>
                        <BarChart/>
                        <br/><br/>
                    </div>
                    <div class="col-sm-12 col-lg-2"></div>
                    <div class="col-sm-12 col-lg-5">
                        <h2>Quiz</h2>
                        <BarChart/>
                    </div>
                </div>
            </div>	
        </div>
    )
}

export default Student
