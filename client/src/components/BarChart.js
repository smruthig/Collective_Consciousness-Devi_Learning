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
                            label: 'Student points per session',
                            data: props.data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Student points yesterday',
                            data: [23,25,32],
                            backgroundColor: [
                                'rgba(255, 60, 100, 0.5)',
                                'rgba(133, 80, 230, 0.5)',
                                'rgba(255, 159, 64, 0.5)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(153, 102, 255, 1)',
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
    data: [10,15,5]
}

export default BarChart

