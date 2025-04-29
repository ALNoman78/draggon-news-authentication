import { useNavigate } from "react-router-dom"

const ErrorPage = () => {

    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center min-h-screen flex-col gap-5 font-bold ">
            <h2 className="text-3xl">Error Page</h2>
            <button onClick={() => navigate('/category/01')} className="btn ">Go Back</button>
        </div>
    )
}

ErrorPage.propTypes = {}

export default ErrorPage