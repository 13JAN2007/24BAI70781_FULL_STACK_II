import {useState} from "react"
import Home from './Home'
import UserContext from "./UserContext";
import Navbar from "./Navbar"

function App(){
  const [user,setUser] = useState(
    {name: "Rahul Sharma",
      email: "abs@gmail.com",
      location: "Chandigarh",
      count:0
    }
  );
function increment(){
  setUser(function(previous){
    return {...previous, count:previous.count+1};
  });
}
function decrement(){
  setUser(function(previous){
   return (previous.count>0)?{...previous, count:previous.count-1}:previous;
  });
}
const jack = [user,increment,decrement];
  return (
    <>
    <h1>Quick Bite - Food Ordering System</h1>
    <br/>
   <UserContext.Provider value = {jack}>
    <Navbar user = {user}/>
    <Home/>
</UserContext.Provider>
    
    </>
  );
}
export default App;