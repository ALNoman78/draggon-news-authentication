import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 mx-auto shrink-0 md:mb-10">
                <div className="card-body">
                    <h3 className="font-bold md:py-6 py-4 text-center text-xl">Login your account</h3>
                    <fieldset className="fieldset ">
                        <label className="label font-semibold">Email</label>
                        <input type="email" className="input w-full bg-[#F3F3F3] rounded-none" placeholder="Email" />
                        <label className="label font-semibold">Password</label>
                        <input type="password" className="input w-full bg-[#F3F3F3] rounded-none" placeholder="Password" />
                        <div className="mt-3"><a className="link link-hover ">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 w-full bg-[#403F3F]">Login</button>
                        <div className="my-4 text-center">
                            Dont’t Have An Account ? <Link to='/auth/register' className="text-orange-600 underline font-semibold">Register</Link>
                        </div>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {}

export default Login