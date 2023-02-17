import avatar from '../../images/dog.jpg'
import UserInfoAdditionalList from "./UserInfoAdditionalList"

const UserInfo = (props) => {
    return (
        <div className="userId__info">
        <div className="userId__photo">
            <img src={avatar} alt="avatar" />
        </div>
        <UserInfoAdditionalList
            {...props}
        />
        
    </div>
    )
}

export default UserInfo;