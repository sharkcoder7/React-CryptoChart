import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: props.chartData
    }
  }

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'Chart Title',
              fontSize: 20,
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;