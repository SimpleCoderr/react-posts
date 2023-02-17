import { Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/actions";

const Header = ({ title, links }) => {
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.app.isLogin)

    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <div className="header">
            <div className="container-sm">
                <div className="header__wrapper">
                    <div className="logo">{title}</div>
                    {isLogin &&
                        <>
                            <div className="menu">
                                {links.map(link =>
                                    <NavLink
                                        to={`/${link}`}
                                        className={({ isActive }) => (isActive ? "menu__link menu__link_active" : "menu__link")}
                                        key={link}
                                    >
                                        {link}
                                    </NavLink>
                                )}
                            </div>
                            <Button onClick={handleLogout} variant='danger'>logout</Button>
                        </>}
                </div>
            </div>
        </div>
    )
}

export default Header;