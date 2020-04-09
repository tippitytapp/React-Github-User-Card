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
    this.setState({
      followersInfo: response.data
    })
  })
}
render(){
  return (
      <div className="githubCardParent">
        <h1>React Github User Cards</h1>
        <GitHubCard data={this.state.userInfo} followers={this.state.followersInfo}/>
      </div>
  )
}

}


export default App;

