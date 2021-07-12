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
        console.log('retrieved!', response.data.launchesPast);
        this.setState({ data: response.data.launchesPast });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { data } = this.state;
    console.log(data);
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