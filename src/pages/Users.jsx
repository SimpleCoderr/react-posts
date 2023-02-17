import { useEffect, useMemo } from "react";
import Title from "../components/UI/title/Title";
import { useDispatch, useSelector } from "react-redux";
import { changePageUsers, loadUsers } from "../redux/actions";
import { Pagination } from "react-bootstrap";
import createPaginationItems from "../scripts/createPaginationItems";
import UsersList from "../components/forUsersPage/UsersList";

const Users = () => {
    const state = useSelector(state => state.usersPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUsers(state.page, state.limit))
    }, [state.page])

    const changePage = (e) => {
        dispatch(changePageUsers(+e.currentTarget.id))
    }

    const paginationItems = useMemo(() => {
        return createPaginationItems(state.totalCount, state.limit, state.page, changePage )
    }, [state.totalCount, state.page])

    return (
        <>
            <div className="containe">
                <div className="users__wrapper">
                    <Title style={{marginBottom: '50px'}} text='Users List' />
                    <UsersList users={state.users}/>
                    <Pagination>
                        {paginationItems}
                    </Pagination>
                </div >
            </div >
        </>
    )
}

export default Users;