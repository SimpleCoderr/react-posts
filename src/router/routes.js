import { Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Posts from '../pages/Posts';
import UserId from '../pages/UserId';
import Users from '../pages/Users';

export const publicRoutes = [
    {path: '/posts', element: <Posts/>},
    {path: '/users', element: <Users/>},
    {path: '/users', element: <Users/>},
    {path: '/users/:id', element: <UserId/>},
    {path: '*', element: <Navigate replace to="/posts"/>}
]

export const privateRoutes = [
    {path: '/login', element: <Login/> },
    {path: '*', element: <Navigate replace to="/login"/>}
]