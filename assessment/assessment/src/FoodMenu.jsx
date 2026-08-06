import UserContext  from './UserContext';
import { useContext } from 'react';

function FoodMenu(){
    const [user, increment] = useContext(UserContext);
    return (
        <>
        <p>Pizza 299 rupees</p> <button onClick={()=>increment()}>Add to cart </button>
        <p>Burger 149 rupees</p> <button onClick={()=>increment()}>Add to cart </button>
        <p>Pasta 199 rupees</p> <button onClick={()=>increment()}>Add to cart </button>
        </>
    )
}
export default FoodMenu;