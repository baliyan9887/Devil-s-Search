import React,{Component} from 'react';
import './App.css';
import {CreateCard} from './components/create-card/create-card.components';
import {Search} from './components/search/search.component'


class App extends Component{
  constructor(){
    super();

    this.state = {
      devils: [],
      search:''
    }
  }

  componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json() )
   .then(users=> this.setState({ devils: users})) 
  }
  render(){
    const {devils, search} = this.state;
    const FilteredUsers = devils.filter(devil => 
      devil.name.toLowerCase().includes(search.toLowerCase()) );
    return (
      <div className="App">
        <h1 className="title">Devil's Search</h1> 
        <hr className="divider"></hr>
        <Search 
          placeHolder="Search devils......" 
          handleChange = {e => this.setState({search: e.target.value})}
        />
        <CreateCard devils={FilteredUsers} />
            
        
      
      </div>
    );
  }
}

export default App;
