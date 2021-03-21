import UserList from "./components/UserList";
import './app.css'
import UserDetails from "./components/UserDetail";
import { Component } from "react";
import axios from "axios";


class App extends Component {
  state = {
    selectedUser: 0,
    user: {},
    userLists: []
  }

  selectUser = (id) => {
    this.setState({selectedUser: id})
  }

  unSelectUser = () => {
    this.setState({selectedUser: 0, user: {}})
  }

  fetchUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(res => {
      this.setState({userLists: res.data})
    })
  }

  fetchUser = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.selectedUser}/`)
    .then(res => {
      this.setState({user: res.data})
    })
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    const {selectedUser, userLists} = this.state
    return (
      <div>
        {selectedUser ? <UserDetails 
          user={this.state.user} 
          onLoad={this.fetchUser}
          onClose={this.unSelectUser} 
        /> : 
        <UserList 
          users={userLists} 
          onSelect={this.selectUser}
        />
        }
      </div>
    );
  }
}

export default App;
