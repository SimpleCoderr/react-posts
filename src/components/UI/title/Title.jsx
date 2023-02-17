import c from './Title.module.css'

const Title = ({text, className, ...props}) => {

    return (
        <div {...props} className={c.title + " " + className}>
            {text}
        </div>
    )
}

export default Title;