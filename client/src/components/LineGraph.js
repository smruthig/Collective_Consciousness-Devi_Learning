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
                            label: 'Student points today',
                            data: props.data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)'
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

LineGraph.defaultProps = {
    data: [12, 22, 14]
}

export default LineGraph

