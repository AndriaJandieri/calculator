import "./DisplayInput.css"

const DisplayInput = ({ inputText, resultText }) => {
    return <div className="display-wrapper">

        <div className="result">
            <h1>{resultText}</h1>
        </div>
        <div className="input-text">
            <h2>{inputText}</h2>
        </div>
    </div>;
}

export default DisplayInput;