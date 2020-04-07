import React from 'react';
import axios from "axios";
import GitHubCard from "./components/githubcard";
import GitHubFollows from "./components/githubfollowers";


class App extends React.Component{
constructor(){
  super();
  this.state={
    userInfo: {},
    followersInfo: []
  };
}

componentDidMount(){
  axios.get('https://api.github.com/users/tippitytapp').then(response => {
    console.log(response.data);
    this.setState({
      userInfo: response.data
    })
  })

  axios.get('https://api.github.com/users/tippitytapp/followers').then(response => {
    console.log(response.data);
    response.data.forEach(user =>{
    axios.get(user.url).then(response => {
    console.log(response);
    this.setState({
      userInfo: [...this.state.userInfo, response.data]
    })
        })
      })
  })
}


render(){
  return (
      <div className="githubCardParent">
        <h1>React Github User Cards</h1>
        <GitHubCard data={this.state.userInfo} />
      </div>
  )
}

}


export default App;

