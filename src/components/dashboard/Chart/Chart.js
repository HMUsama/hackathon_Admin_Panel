import React, { Component } from 'react'
import {Bar,Line,Pie } from 'react-chartjs-2'
import './Chart.css'
// import { populate } from 'react-redux-firebase';

class Chart extends Component {
  constructor(props){
    super(props)
    this.state={
        chartData:{
            labels:['January','Fabuary','March','April','May','June',
            'July','August','September','October','November','December'],
            datasets:[
                {
                    label:'Total User',
                    data:[
                        1,
                        4,
                        1,
                    ]
                }
            ],
            backgroundColor:[
                'rgb(255, 0, 255)',
                'rgb(102, 255, 204)',
                // 'rgb(204, 153, 0)',
                // 'rgb(255, 0, 255)',
                // 'rgb(255, 0, 255)',
                // 'rgb(255, 0, 255)',
                // 'rgb(255, 0, 255)',
                // 'rgb(255, 0, 255)',
                // 'rgb(255, 0, 255)',
                // 'rgb(255, 0, 255)',
                // 'rgb(255, 0, 255)',
            ]
        }
    }
  }
 
 
  render() {
    return (
      <div className="chart white-text ">
        <Bar
        data={this.state.chartData}
        options={{
            maintainAspectRatio:false
        }}
        />
      </div>
    );
  }
}

export default Chart;
