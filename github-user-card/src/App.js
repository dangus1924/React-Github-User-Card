import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard.js';
import FollowerBar from './Components/FollowerBar';
import FollowerList from './Components/FollowerList';
import Top from './Components/Top';
import styled from 'styled-components';
import { Divider, Box }  from '@material-ui/core';

const Followers = styled.section`
  margin-top: 50px;
`;

class App extends React.Component {
  
  state = {
    userName: 'dangus1924', 
    user: [],
    followers: [],
    searchInput: '',
    contributionsOn: false
  }
  
  GrabUser = () => {
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.setState({user: res.data})
        return res.data.followers_url; 
      })
      .then(followersURL => {
        axios.get(followersURL)
          .then(res => this.setState({followers: res.data})) 
      })
      .catch(err => alert(err));

  }
  
  componentDidMount() {
    this.GrabUser()
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.userName !== this.state.userName) {
   this.GrabUser()
    }
  };
  
  handleClick = (follower) => {    
    this.setState({
      userName: follower.login
    })
  }
 
  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }
 
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      userName: (this.state.searchInput === '' ? 'dangus1924' : this.state.searchInput)
    })
  }

  
  toggleContributions = () => {
    this.setState({
      contributionsOn: !this.state.contributionsOn
    })
  }

  render() {
    return (
      <Box>
        <Top />
        <UserCard toggleContributions={this.toggleContributions} 
                  contributionsOn={this.state.contributionsOn} 
                  user={this.state.user} 
                  />
        <Followers>
        <Divider />
        <FollowerBar />
        <FollowerList followers={this.state.followers} 
                      handleClick={this.handleClick} />
        </Followers>
      </Box>
    );
  }
}

export default App;