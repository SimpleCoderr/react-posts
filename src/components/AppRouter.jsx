import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../router/routes"

const AppRouter = () => {
    const isLogin = useSelector(state => state.app.isLogin)

    const mypublicRoutes =
        publicRoutes.map(elem => <Route key={elem.path} path={elem.path} element={elem.element} />)

    const myPrivateRoutes =
        privateRoutes.map(elem => <Route key={elem.path} path={elem.path} element={elem.element} />)
    return (
        <>
            <Routes>
                {isLogin ?
                    mypublicRoutes
                    :
                    myPrivateRoutes
                }
            </Routes>
        </>
    )
}

export default AppRouter