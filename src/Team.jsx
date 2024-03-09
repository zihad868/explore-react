import { useState } from "react"

export default function Team(){
    const [player, setPlayer] = useState(11);


    const addPlayer = () =>{
        const team = player + 1;
        setPlayer(team);
    }

    const removePlayer = () => {
        const temp = player -1 ;
        setPlayer(temp);
    }

    const teamStyle = {
        border: '5px solid blue',
        padding: '10px',
        fontSize: '20px',
    }

    return (
        <div style={teamStyle}>
            <h3>Player: {player} </h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
       </div>
    )
}