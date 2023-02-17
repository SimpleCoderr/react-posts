import c from './MyInput.module.css'

const MyInput = ({className, ...props}) => {
    return (
        <input {...props} className={c.myInp + " " + className} />
    )
}

export default MyInput;