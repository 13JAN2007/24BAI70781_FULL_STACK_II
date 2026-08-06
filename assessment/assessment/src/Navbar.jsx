

function Navbar({user}){
  return(
    <>
    <h1>Welcome {user.name}</h1>
    <p>Cart: {user.count}</p>
    </>
  )
}
export default Navbar;