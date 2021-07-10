import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = (props) => {
    return (
        <div>
            <Bar
            data={{
                labels:  ['Session-1', 'Session-2', 'Session-3'],
                datasets: [
                    {
                        label: 'Minimum',
                        data: props.data,
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    },
                    {
                        label: 'Maximum',
                        data: [23,25,32],
                        backgroundColor: [
                            'rgba(255, 159, 64, 0.5)',
                            'rgba(255, 159, 64, 0.5)',
                            'rgba(255, 159, 64, 0.5)'
                        ],
                        borderColor: [
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            }} 
            height={400} 
            width={600}
            options={{
                maintainAspectRatio: false,
            }}

            /> 
        </div>
    )
}

BarChart.defaultProps = {
    data: [10,15,20]
}

export default BarChart
