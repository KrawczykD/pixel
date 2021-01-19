import React from 'react';
import Container from './app.css';
import List from './components/List';

class App extends React.Component {

  state = {
    users: [],
  }

  componentDidMount(){
    fetch('https://8ee41f94-d4f4-439d-8233-e573edca74ff.mock.pstmn.io/users')
    .then(res => res.json())
    .then(res=> res.data.map(user=> Object.assign({user ,active: true }) ))
    .then(users => this.setState({
      users : users
    }))
  }

handleToggleUser = (clickedUser) => {
  let list = this.state.users.map(user => (user.user === clickedUser) ? Object.assign({}, user, { active:!user.active }) : user)
  this.setState({
    users: list
  })
}
  


  render (){
    console.log(this.state.users)
    return(
     <Container>
       <List handleToggleUser={this.handleToggleUser} header="General List" users={this.state.users}></List>
      {/* <List handleToggleUser={this.handleToggleUser} header="General List" users={this.state.customUsers}></List> */}
     </Container>
    )
  }

 
}

export default App;
