import './Friends.css'

export default function Friend(friend){
    const {name, email} = (friend.friend);
    return(
        <div className='friend'>
            <h4>Name: {name}</h4>
            <h5>Email: {email}</h5>
        </div>
    )
}