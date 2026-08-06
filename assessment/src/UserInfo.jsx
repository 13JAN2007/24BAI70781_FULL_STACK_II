import { useContext } from "react";
import UserContext from "./UserContext"
function UserInfo(){
    const user = useContext(UserContext);
    return (
        <>
        <b>
        <p>User's name is {user.name}</p>
        <p>User's email is {user.email}</p>
        <p>User's location is {user.location}</p>
        </b>
        </>

    )
}
export default UserInfo;