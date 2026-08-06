import UserConstext from './UserContext'
import {useContext} from 'react';

function Navbar(){
  const [user] = useContext(UserConstext);
  return(
    <>
    <h2 style={{textAlign:'left'}}>Welcome {user.name}</h2>
    <h2 style = {{textAlign:'left'}}>Location: {user.location}</h2>
    <p>Cart: {user.count}</p>
    </>
  )
}
export default Navbar;