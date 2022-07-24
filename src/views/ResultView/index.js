import LevelImage from './img.png';
import './index.css'

const ResultView = (props) => {
    const {userPoints, userLevelName} = props;

    return(
        <div className="result__visible">
            <div className="result__inner">
                <div className="result__title">{userLevelName.toUpperCase()}</div>
                <div className="result__description">description</div>
                <div className="result__badge">
                    <img src={LevelImage}/>
                </div>
                <div className="result__description">Ваш результат</div>
                <div className="result__score">{userPoints}</div>
            </div>
        </div>
    )
}

export default ResultView;