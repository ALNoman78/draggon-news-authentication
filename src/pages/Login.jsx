import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../components/provider/AuthProvider"

const Login = () => {

    const { signInUser, setUser } = useContext(AuthContext)

    const handleLogIn = (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value

        console.log({ email, password })

        signInUser(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
            })
            .catch((error) => {
                alert(error.code)
            })
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 mx-auto shrink-0 md:mb-10">
                <div className="card-body">
                    <h3 className="font-bold md:py-6 py-4 text-center text-xl">Login your account</h3>
                    <form onSubmit={handleLogIn} className="fieldset ">
                        <label className="label font-semibold">Email</label>
                        <input name="email" type="email" className="input w-full bg-[#F3F3F3] rounded-none" placeholder="Email" />
                        <label className="label font-semibold">Password</label>
                        <input name="password" type="password" className="input w-full bg-[#F3F3F3] rounded-none" placeholder="Password" />
                        <div className="mt-3"><a className="link link-hover ">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 w-full bg-[#403F3F]">Login</button>
                        <div className="my-4 text-center">
                            Dont’t Have An Account ? <Link to='/auth/register' className="text-orange-600 underline font-semibold">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {}

export default Login