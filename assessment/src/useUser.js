import {useEffect,useContext} from "react"
import UserContext from "./UserContext"

function useUser(){
    const user = useContext(UserContext);
    return user;
}
export default useUser;