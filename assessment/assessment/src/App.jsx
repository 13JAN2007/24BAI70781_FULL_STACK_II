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
const jack = [user,increment];
  return (
    <>
    
   <UserContext.Provider value = {jack}>
    <Navbar user = {user}/>
    <Home/>
</UserContext.Provider>
    
    </>
  );
}
export default App;