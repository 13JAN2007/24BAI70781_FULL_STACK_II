import UserContext  from './UserContext';
import { useContext } from 'react';

function FoodMenu(){
    const [user, increment,decrement] = useContext(UserContext);
    return (
        <>
        <p>Pizza 299 rupees</p> 
        <button onClick={()=>increment()}>Add to cart </button><button onClick={()=>decrement()}>Remove from cart </button>
        <p>Burger 149 rupees</p> <button onClick={()=>increment()}>Add to cart </button><button onClick={()=>decrement()}>Remove from cart </button>
        <p>Pasta 199 rupees</p> <button onClick={()=>increment()}>Add to cart </button><button onClick={()=>decrement()}>Remove from cart </button>
        </>
    )
}
export default FoodMenu;