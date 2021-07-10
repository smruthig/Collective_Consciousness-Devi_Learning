import BarChart from './GameBarChart'
import LineGraph from './GameLineGraph'
import GroupBar from './GameGroupBar'
import './components/Game.css'
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'

const Quiz = () => {


    return (
        <div className="container">
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}> <h1>Quiz  </h1></div>
            <br />
                <div class="row">
                    <div class="col-sm-12 col-lg-5">
                        <h3> Avg points of all sessions per students</h3>
                        <BarChart />
                        <br/><br/>
                    </div>
                    <div class="col-sm-12 col-lg-2"></div>
                    <div class="col-sm-12 col-lg-5">
                        <h3>Avg points of all students per session</h3>
                        <LineGraph />
                    </div>
                </div>
                <div> <h3> Minimum and Maximum Score each session </h3>
                    <GroupBar /> </div>

            </div>

    )
}

export default Quiz
