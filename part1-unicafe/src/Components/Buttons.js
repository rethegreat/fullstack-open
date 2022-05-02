export default function Buttons(props){
    return (
        <div>
            <button onClick={props.clickGood}>Good</button>
            <button onClick={props.clickNeutral}>Neutral</button>
            <button onClick={props.clickBad}>Bad</button>
        </div>
    )
}