
const UserInfoBlock = ({title, value}) => {
    return (
        <div className="userId__info-row">
            <div className="userId__info-title">{title}:</div>
            <div className="userId__info-value">{value}</div>
        </div>
    )
}

export default UserInfoBlock;