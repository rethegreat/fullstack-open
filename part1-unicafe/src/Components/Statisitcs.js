import StatisticsLine from "./StatisticLine"

export default function Result(props){

    const allAnswer = props.good + props.neutral + props.bad

    const avg = ((props.good) - (props.bad)) / allAnswer

    return (
        <div>
        {(allAnswer > 0) && <div>
            <h2>Statistics</h2>
            <StatisticsLine text='Good' value={props.good} />
            <StatisticsLine text='Neutral' value={props.neutral} />
            <StatisticsLine text='Bad' value={props.bad} />
            <StatisticsLine text='All' value={props.all} />
            <StatisticsLine text='Average' value={avg} />
            <StatisticsLine text='Positive' value={props.good/allAnswer} />
        </div>}

        {(allAnswer === 0) && <h3>No Feedback was given</h3>}
        </div>

    )
}