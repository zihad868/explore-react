
import { useState } from 'react';

export default function Counter(){

    const [count, setCount] = useState(0);

    const addCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    return(
        <div style={{border: '2px solid pink', padding: '20px', fontSize: '50px'}}>
            Counter: {count}

            <button onClick={addCount}>Add Count</button>
        </div>
    )
}