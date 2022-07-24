import './index.css'
import {useEffect, useState} from "react";


const Counter = (props) => {
    const {onCounterFinished} = props;

    const [counterFinished, setCounterFinished] = useState(false);

    const [count, setCount] = useState(3);

    useEffect(() => {
        if(count < 1) {
            setCounterFinished(true);
            onCounterFinished();
            return;
        }

        const interval = setInterval(() => {
            setCount(count-1)
        }, 1000);


        return () => clearInterval(interval);
    }, [count]);

    return(
        <div className="counter">
            {count}
        </div>
    )
}

export default Counter;