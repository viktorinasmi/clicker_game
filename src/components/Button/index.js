import "./index.css"

const Button = ({onClick}) => {
    return(
        <button className="button" onClick={onClick}>
            Лупа и пупа
        </button>
    )
}

export default Button;