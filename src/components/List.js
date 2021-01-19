import ListUl from './list.css';
import {useState} from 'react';


let List = (props)=>{

  let activeList = []
  let inActiveList = []

  let [orderActive , toggleOrderActive] = useState(true);
  let [orderInactive , toggleOrderInActive] = useState(true);

  

  props.users.map(user => user.active === true ? activeList.push(user) : inActiveList.push(user))
  let list = (list)=> {
    return(
      list.map(user => <li onClick={()=>{props.handleToggleUser(user.user)}}><p>{user.user.name}</p><p>{user.user.email}</p></li>)
    )
  }

  let sortAsc = (list) =>{
  list.sort((a, b) => a.user.name.localeCompare(b.user.name))
  }
  let sortDes = (list) =>{
    list.sort((a, b) => b.user.name.localeCompare(a.user.name))
    }

    if (orderActive){
      sortAsc(activeList)
    } else {
      sortDes(activeList)
    }
    if (orderInactive){
      sortAsc(inActiveList)
    } else {
      sortDes(inActiveList)
    }


  return(
    <>
    <ListUl>
    <h1>Customers List</h1>
    <button onClick = {()=>{toggleOrderInActive(!orderInactive)}}>{orderInactive ? "Ascending" : "Descending"}</button>
    {list(inActiveList)}
    </ListUl>
    <ListUl>
    <h1>List of Users</h1>
    <button onClick = {()=>{toggleOrderActive(!orderActive)}}>{orderActive ? "Ascending" : "Descending"}</button>
    {list(activeList)}
  </ListUl> 
    </>
  )
}

export default List