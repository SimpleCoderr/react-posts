import UserInfoBlock from "./UserInfoBlock";

const UserInfoAdditionalList = (props) => {
    let arrayInfoBlocks = [];
    for (let value in props) {
        arrayInfoBlocks.push(<UserInfoBlock key={value} title={value} value={props[value]}/>)
    }
    return (
        <div className="userId__info-additional">
           {arrayInfoBlocks}
        </div>
    )
}

export default UserInfoAdditionalList;