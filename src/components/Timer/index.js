import './index.css'
import {memo, useEffect, useState} from "react";


const Timer =  memo((props) => {
    const {onStart, onFinish} = props;

    const [timerStarted, setTimerStarted] = useState(true);
    const [timerFinished, setTimerFinished] = useState(false);
    const [secondsRemaining, setSecondsRemaining] = useState(10);
    const [millisecondsRemaining, setMillisecondsRemaining] =useState(0);

    useEffect(() => {
        if (!timerStarted) {
            return;
        }

        if (secondsRemaining === 0 && millisecondsRemaining === 0) {
            setTimerFinished(true);
            setTimerStarted(false);
            onFinish();
            return ;
        }

        const intervalId = setInterval(() => {
            if (millisecondsRemaining > 0) {
                setMillisecondsRemaining(millisecondsRemaining-1);
            } else {
                setSecondsRemaining(secondsRemaining - 1);
                setMillisecondsRemaining(99);
            }
        }, 10);
        return () => clearInterval(intervalId);
    }, [timerStarted, millisecondsRemaining, secondsRemaining, onStart, onFinish]);

    const timerClassName = timerFinished ? 'timer timer--finished' : 'timer';
    const secondsString = secondsRemaining.toString().length < 2 ? `0${secondsRemaining}` : secondsRemaining;
    const millisecondsString = millisecondsRemaining.toString().length < 2 ? `0${millisecondsRemaining}` : millisecondsRemaining;


    return(
        <div className={timerClassName}>
            {secondsString}:{millisecondsString}
        </div>
    )
});

export default Timer;