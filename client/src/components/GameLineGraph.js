import React from 'react'
import {Line} from 'react-chartjs-2'

const LineGraph = (props) => {
    return (
        <div>
            <Line
                data={{
                    labels: ['Session-1', 'Session-2', 'Session-3'],
                    datasets: [
                        {
                            label: 'Average Points ',
                            data: props.data,
                            backgroundColor: [
                                'green'
                            ],
                            borderColor: [
                                'greeen'
                            ],
                            borderWidth: 1
                        }
                    ]
                }} 
                height={400} 
                width={600}
                options={{
                    maintainAspectRatio: false,
                    indexAxis: 'x',
                    scales: {
                    y: {
                     beginAtZero: true
                            }
                        }
                }}
            /> 
        </div>
    )
}

LineGraph.defaultProps = {
    data: [12, 22, 14]
}

export default LineGraph

