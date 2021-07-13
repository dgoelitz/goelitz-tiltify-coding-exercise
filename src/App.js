import React from 'react';
import './App.css';
import FetchDataFromAPI from './FetchDataFromAPI';
import Card from './Card';

class App extends React.Component {

  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    FetchDataFromAPI()
      .then(response => {
        this.setState({ data: response.data.launchesPast });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        {
          data.map((item, index) => {
            return <Card key={index} launch={item}/>;
          })
        }
      </div>
    );
  }
}

export default App;