import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import MyInput from "../components/UI/input/MyInput";
import Title from "../components/UI/title/Title";
import { login } from "../redux/actions";

const Login = () => {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const [pwd, setPwd] = useState('')

    const handleClick = (e) => {
        if (userName && pwd) {
            dispatch(login())
        }
    }
    return (
        <div className="login">
            <div className="containe">
                <div className="login__wrapper">
                    <Title className='login__title' text='Fake login' />
                    <MyInput
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        className='login__input'
                        placeholder='enter your username'
                    />
                    <MyInput
                        type='password'
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd} className='login__input'
                        placeholder='enter your password'
                    />
                    <Button onClick={handleClick} >
                        <span className="login__btn">login</span >
                    </Button>
                </div>
            </div >
        </div >
    )
}

export default Login;