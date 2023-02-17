import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import usersService from "../API/usersService"
import { endLoading, startLoading } from "../redux/actions"
import UserTitle from "../components/forUsersPage/UserTitle"
import UserInfo from "../components/forUserIdPage/UserInfo"
import UserPosts from "../components/forUserIdPage/UserPosts"
import Title from "../components/UI/title/Title"

const UserId = () => {
    const id = useParams().id
    const [user, setUser] = useState()
    const [posts, setPosts] = useState()
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.app.isLoading)
    useEffect(() => {
        (async () => {
            dispatch(startLoading())
            const responseUser = await usersService.getUserById(id)
            setUser(responseUser.data)
            const responsePosts = await usersService.getPostsOfUserById(id)
            setPosts(responsePosts.data)
            dispatch(endLoading())
        })()
    }, [])

    return (
        <>
            <div className="containe">
                <div className="userId__wrapper">
                    {user &&
                        <>
                            <UserTitle text={user.username} />
                            <UserInfo
                                name={user.name}
                                city={user.address.city}
                                company={user.company.name}
                                email={user.email}
                                website={user.website} />
                        </>
                    }
                    {posts && 
                    <>
                    <Title style={{marginBottom: '20px'}} text='Posts'/>
                    <UserPosts posts={posts} />
                    </>
                    }
                </div >
            </div>
        </>
    )
}

export default UserId