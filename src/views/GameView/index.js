import Button from "../../components/Button";
import Counter from "../../components/Counter";
import Timer from "../../components/Timer";
import {useEffect, useState} from "react";


const GameView = (props) => {
    const { onGameFinish} = props;

    const [gameStated, setGameStarted] = useState(false);
    const [gamePoints, setGamePoints] = useState(0);


    const handleUserClickButton = () => {
        const randomPoints = Math.floor(Math.random() * 50);
        setGamePoints(gamePoints + randomPoints);
    }

    const handleCounterFinished = () => setGameStarted(true);

    const handleGameFinish = () => onGameFinish({
        points: gamePoints
    })

    return (
        <>
            {
                !gameStated && (
                    <Counter
                        onCounterFinished={handleCounterFinished}
                    />
                )
            }
            {
                gameStated && (
                    <>
                        <div>{gamePoints}</div>
                        <Button onClick={handleUserClickButton}/>
                        <Timer
                            onFinish={handleGameFinish}
                        />
                    </>
                )
            }


        </>
    )
}

export default GameView;