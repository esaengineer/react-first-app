import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';




class App extends Component {


  constructor ()
  {
    super()
    this.state=
              {
                'robots':[],
                'searchField':''
              }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}))


  }


    onSearchChange = (event) =>
    {
      this.setState({searchField:event.target.value});
     
            

    }

  render()
  {

    const {robots,searchField} = this.state;

     const filteredRobots= robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchField.toLowerCase());
      })

// if(!robots.length)
// {
//   <h1 className="tc">Loading...</h1>
// }

// else
// {
    return (
    <div className="tc">
    <h1 className="f2">My First React Application</h1>
    <SearchBox searchChange={this.onSearchChange}/>
    <CardList robots={filteredRobots}/>
    </div>
            );
// }
  }

}

export default App;
