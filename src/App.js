import React, { Component } from 'react'
import Card from './components/card-list/Card';
import './App.css'
import Search from './components/Search-Box/Search';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
      ],
      searchfield: '',

    };
    //this line is write when you do not write arow function inside the class then you should have to bind this function before use..is case of arrow function you do not need this binding
    //this.handleChange =  this.handleChange.bind(this)
  }
  async componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users'
    ).then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange=(e)=>{
  this.setState({searchfield:e.target.value})
  }


  render() {
    const { monsters, searchfield } = this.state
    const newmonster = monsters.filter((element) => element.name.toLowerCase().includes(searchfield.toLowerCase())

    )
    return (<>
      <div >
       
      <Search placeholder={"search monsters"} handleChange={this.handleChange}/>
        {newmonster.map((val => {
          return (
            <>
              <Card key={val.id} id={val.id} name={val.name} />
            </>
          )
        }))}
      </div>
    </>)
  }
}
export default App;
