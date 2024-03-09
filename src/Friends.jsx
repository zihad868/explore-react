import { useEffect, useState } from 'react';
import './Friends.css'
import Friend from './Friend';

const Friends = () => {

    const [friend, setFriend] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])

    return (
        <div className='friend'>
            <h2>Friend: {friend.length}</h2>
            {
                friend.map((friend) => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

export default Friends;