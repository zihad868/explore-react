import { useEffect, useState } from "react";

const Users= () => {
    const [user, setUser] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
           .then(res => res.json())
           .then(data => setUser(data))
    }, [])

    return (
        <div>
            <h2>User: {user.length}</h2>
        </div>
    )
}

export default Users;