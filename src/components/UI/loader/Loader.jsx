import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <div className='bg-loader'>
            <div className='loader'>
                <Spinner animation="grow" />
            </div>
        </div >
    )
}

export default Loader;