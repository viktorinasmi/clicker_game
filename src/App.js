import './App.css';
import {useState} from "react";
import GreetingView from "./views/GreetingView";
import ResultView from "./views/ResultView";
import GameView from "./views/GameView";

function App() {

    const [userPoints, setUserPoints] = useState(0);
    const [userRoute, setUserRoute] = useState('GreetingView');

    const handleUserRoute = (route) => {
        setUserRoute(route)
    }

    const handleGameFinish = ({points}) => {
        setUserPoints(points);
        setUserRoute('ResultView');
    }

    const userLevels = {
        noob: 100,
        beginner: 500,
        average: 1000,
        skilled: 1500,
        specialist: 2000,
        expert: 2500,
        legend: Infinity
    }

    const [userLevelName] = Object.entries(userLevels).find(([_, points]) => userPoints <= points);

    const AppRouter = () => {
        if (userRoute === 'GreetingView') {
            return (
                <GreetingView
                    handleUserRoute={() => handleUserRoute('GameView')}
                />
            )
        }

        if (userRoute === 'GameView') {
            return (
                <GameView
                    onGameFinish={handleGameFinish}
                />
            )
        }

        if (userRoute === 'ResultView') {
            return (
                <ResultView
                    userPoints={userPoints}
                    userLevels={userLevels}
                    userLevelName={userLevelName}
                />
            )
        }
    }

    return (
        <div className="App">
            <AppRouter/>
        </div>
    );
}

export default App;
