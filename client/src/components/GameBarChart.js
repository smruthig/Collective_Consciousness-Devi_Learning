import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = (props) => {
    return (
        <div>
            <Bar
                data={{
                    labels:  ['S1', 'S2', 'S3','S4'],
                    datasets: [
                        {
                            label: 'Points per Student',
                            data: props.data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        },
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
    data: [10,15,5,30]
}

export default BarChart

