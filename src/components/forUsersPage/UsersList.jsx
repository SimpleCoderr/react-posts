import User from "./User"

const UsersList = ({ users }) => {
    return (
        <div className="users__list">
            {users.map(user => <User
                key={user.id}
                id={user.id}
                username={user.username}
                email={user.email}
                city={user.address.city}
            />)}
        </div>
    )
}

export default UsersList