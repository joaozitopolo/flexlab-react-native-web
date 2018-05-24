import React, { Component } from 'react';
import './App.css';
import Lab1 from './labs/Lab1';
import Lab2 from './labs/Lab2';
import { View } from 'react-native-web';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { lab: 0 }
  }

  handleLabChange = (event) => {
    this.setState({lab: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>flexlab</h1>
        <div>
          <label>Select lab: </label>
          <select onChange={this.handleLabChange} value={this.state.lab}>
            {labs.map((item, idx) => <option key={idx} value={idx}>{item.name}</option>)}
          </select>
          <div className="panel">
            <div className="inner">
              <View>
                {labs[this.state.lab].component}
              </View>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const labs = [
  { name: 'Lab1', component: <Lab1/>},
  { name: 'Lab2', component: <Lab2 /> },
]
