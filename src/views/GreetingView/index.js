import './index.css'

const GreetingView = (props) => {
    const {handleUserRoute} = props;

    return (
        <div className="greeting">
            <div className="greeting__title">Добро пожаловать!</div>
            <div className="greeting__description ">Сыграем в игру</div>
            <button onClick={handleUserRoute} className="greeting__btn">Начать</button>
        </div>
    )
}

export default GreetingView;