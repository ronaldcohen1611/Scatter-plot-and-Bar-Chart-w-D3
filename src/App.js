import React, { Component } from 'react';
import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import * as d3 from 'd3';
import tips from './tips.csv';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    var self = this;
    d3.csv(tips, (d) => {
      return {
        tip: parseFloat(d.tip),
        total_bill: parseFloat(d.total_bill),
        day: d.day,
      };
    })
      .then((csv_data) => {
        self.setState({ data: csv_data });
      })
      .catch((err) => {
        console.error('There was a error', JSON.stringify(err, null, 2));
      });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <span className="header-content">Scatter Plot And Bar Chart: Ronald Cohen</span>
        </div>
        <div className="child1">
          <Child1 data1={this.state.data} />
        </div>
        <div className="child2">
          <Child2 data2={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
