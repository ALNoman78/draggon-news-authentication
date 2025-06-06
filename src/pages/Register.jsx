import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../components/provider/AuthProvider'

const Register = () => {
    const { createNewUser, setUser } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // get form data here
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")

        createNewUser(email, password)
            .then((response) => {
                const user = response.user
                setUser(user)
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
            })
        console.log({ name, email, password, photo })
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-lg rounded-none p-10 mx-auto shrink-0 md:mb-10">
                <div className="card-body">
                    <h3 className="font-bold md:py-6 py-4 text-center text-xl">Login your account</h3>
                    <form onSubmit={handleSubmit} className="fieldset ">
                        <label className="label font-semibold">Your Name</label>
                        <input name='name' type="name" className="input w-full bg-[#F3F3F3] rounded-none" placeholder="Name" />
                        <label className="label font-semibold">Photo URL</label>
                        <input name='photo' type="url" className="input w-full bg-[#F3F3F3] rounded-none" placeholder="Photo URL" />
                        <label className="label font-semibold">Email</label>
                        <input name='email' type="email" className="input w-full bg-[#F3F3F3] rounded-none" placeholder="Email" />
                        <label className="label font-semibold">Password</label>
                        <input name='password' type="password" className="input w-full bg-[#F3F3F3] rounded-none" placeholder="Password" />
                        <div className='flex items-center gap-4 my-3'>
                            <input type="checkbox" name="" id="" />
                            <div><a className="link link-hover ">Accept Term & Conditions</a></div>
                        </div>
                        <button className="btn btn-neutral mt-4 w-full bg-[#403F3F]">Register</button>
                        <div className="my-4 text-center">
                            Already have an Account ? {""}
                            <Link to='/auth/login' className="text-orange-600 underline font-semibold">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {}

export default Register