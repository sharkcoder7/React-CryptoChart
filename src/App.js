import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';
import styled from 'styled-components'
import axios from 'axios';
import moment from 'moment';

// styled components
const AppContainer = styled.div`
    background-color: #000;
`;

// begin react
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    }
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax call
    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json')
      .then(response => {
        const sortedData = [];
        let count = 0;
        for (let date in response.data.bpi) {
          sortedData.push({
            day: moment(date).format('MMM DD'),
            price: response.data.bpi[date].toLocaleString('us-EN', {style: 'currency', currency: 'USD'}),
            x: count, // previous days
            y: response.data.bpi[date] // numerical price
          });
          count++;
        }
        //   this.setState({
        //     chartData: {
        //       labels: ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"],
        //       // labels: sortedData.map(data => data.day),
        //       datasets: [
        //         {
        //           data: [100.00, 100.16, 110.34, 120.32, 190.34, 100.27, 160.65],
        //           // data: sortedData.map(data => data.y),
        //           label: 'Graph 1',
        //           backgroundColor: ['rgba(36,186,165, 0.2)',],
        //           borderColor: ['rgba(0,100,80,1)',],
        //           borderWidth: 1,
        //           pointBorderColor: "rgba(75,192,192,1)",
        //           pointBackgroundColor: "#fff",
        //           pointBorderWidth: 1,
        //           pointHoverRadius: 5,
        //           pointHoverBorderWidth: 2,
        //           pointHoverBackgroundColor: "rgba(75,192,192,1)",
        //           pointHoverBorderColor: "rgba(220,220,220,1)",
        //           pointRadius: 3,
        //         }
        //       ]
        //     }
        //   })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    this.setState({
      chartData: {
        labels: ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"],
        // labels: sortedData.map(data => data.day),
        datasets: [
          {
            data: [100.00, 100.16, 110.34, 120.32, 190.34, 100.27, 160.65],
            // data: sortedData.map(data => data.y),
            label: 'Graph 1',
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
          }
        ]
      }
    })
  }

  render() {
    console.log(this.state.chartData);
    // console.log(this.state.chartData.datasets[0].data);
    return (<AppContainer>
        <div className="App">
          {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo"/>*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
          {/*</header>*/}
          {/*<p className="App-intro">*/}
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          <Chart chartData={this.state.chartData}/>
        </div>
      </AppContainer>
    );
  }
}

export default App;
