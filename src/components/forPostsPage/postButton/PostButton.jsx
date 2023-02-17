import c from './PostButton.module.css'
const PostButton = ({children,  ...props}) => {
    return (
        <button {...props} className={c.postButton}>
            {children}
        </button>
    )
}

export default PostButton;