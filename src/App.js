import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {}
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax call here
    this.setState({
      chartData: {
        labels: ['0', '1', '2', '3', '4', '5'],
        datasets: [
          {
            data: [0, 16, 21, 32, 49, 55, 162, 177, 183, 99, 100],
            label: 'Teal Graph',
            backgroundColor: ['rgba(36,186,165, 0.2)',],
            borderColor: ['rgba(0,100,80,1)',],
            borderWidth: 1,
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointRadius: 3,
          },
          {
            data: [100, 120, 149, 110, 100, 140, 120, 99, 78, 40, 80],
            label: 'Gray Graph',
            backgroundColor: ['rgba(46,54,65, 0.5)',],
            borderColor: ['rgba(36,186,165,1)',],
            borderWidth: 1,
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointRadius: 3,
          },
        ]
      }
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chart chartData={this.state.chartData}/>
      </div>
    );
  }
}

export default App;
