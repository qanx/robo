import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/searchBox/searchBox';
class App  extends Component{

 
    constructor () {
      super();
      this.state={
        monsters:[
          {name:'aa' ,id:1},
          {name:'bb' ,id:2},
          {name:'dd' ,id:3}
        ],
        searchField:''
      }
     
    }

    componentDidMount(){

      fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json())
      .then(users=>this.setState({monsters:users}))
    }

    handleChange= (e)=>{
      this.setState( {searchField:e.target.value})
    }
    render(){

    const {monsters,searchField } =this.state;
    const filtered = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        
<h1>monsters Rolodex</h1>
      <SearchBox 
      placeholder="search here"
      handleChange={this.handleChange} />
      <CardList monsters={filtered}> </CardList>
    </div>
    )
  }
}

export default App;
