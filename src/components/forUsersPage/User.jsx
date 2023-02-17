import { Link } from 'react-router-dom'
import avatar from '../../images/dog.jpg'
const User = ({id, city, email, username}) => {
    return (
        <div className='user'>
        <div className="user__photo">
            <img src={avatar} alt="avatar" />
        </div>
        <div className="user__info">
            <Link to={`/users/${id}`} className="user__username">{username}</Link>
            <div className="user__info-additional">
                <div className="user__city">{city}</div>
                <div className="user__email">{email}</div>
                </div>
        </div>
        </div>
    )
}

export default User