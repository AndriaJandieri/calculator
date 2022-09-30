import "./Button.css";

const Button = ({ symbol, bgColor, symbolColor, handleClick }) => {
    return <div
    onClick={()=>handleClick(symbol)}
        className="button-wrapper" style={{ backgroundColor: bgColor, color: symbolColor }}>{symbol}
    </div>
}
export default Button;