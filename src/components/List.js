import ListUl from './list.css';

let List = (props)=>{

  let activeList = []
  let inActiveList = []

  props.users.map(user => user.active === true ? activeList.push(user) : inActiveList.push(user))
  let list = (list)=> {
    return(
      list.map(user => <li onClick={()=>{props.handleToggleUser(user.user)}}><p>{user.user.name}</p><p>{user.user.email}</p></li>)
    )
  }

  return(
    <>
    <ListUl>
    <h1>Customers List</h1>
    {list(inActiveList)}
    </ListUl>
    <ListUl>
    <h1>List of Users</h1>
    {list(activeList)}
  </ListUl> 
    </>
  )
}

export default List