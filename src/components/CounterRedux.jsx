import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions";

function CounterRedux() {

    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();
    return ( 
        <>
            <h1>{count}</h1>
            <Button onClick={()=>dispatch(increment(2))}>+</Button>
            <Button onClick={() => dispatch(decrement(1))}>-</Button>

            </>
     );
}

export default CounterRedux;