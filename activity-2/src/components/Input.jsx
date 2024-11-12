const Input = () => {
    return (
        <div className='score-widget'>
                <h2>Score: {props.points}</h2>
                <h2>Player Name: {props.playerName}</h2>
                <ReactList points={30}/>
            </div>
    )
}

export default Input;