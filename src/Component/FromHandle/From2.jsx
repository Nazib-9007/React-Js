import { useState } from "react"

export default function Form2() {

    const [user, setUser] = useState({ name: '', email: '', pass: '' });
    const { name, email, pass } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }
    return (
        <>
            <h1 className="text-center font-semibold text-xl m-2">React Form Handel</h1>
            <form action="" className="flex flex-col items-center m-1.5 font-mono">
                <div className="m-1.5 text-center">
                    <label htmlFor="name">Name </label> <br />
                    <input type="text" name="name" id="name" placeholder="Enter your name" className="border-2 border-amber-400 rounded-lg p-1.5" required onChange={handleChange} value={name} />
                </div>

                <div className="m-1.5 text-center">
                    <label htmlFor="email">Email </label> <br />
                    <input type="text" name="email" id="email" placeholder="Enter your email" className="border-2 border-amber-400 rounded-lg p-1.5" required onChange={handleChange} value={email} />
                </div>

                <div className="m-1.5 text-center">
                    <label htmlFor="pass" >Password </label> <br />
                    <input type="password" name="pass" id="pass" placeholder="Enter your password" className="border-2 border-amber-400 rounded-lg p-1.5" required onChange={handleChange} value={pass} />
                </div>

                <button
                    type="submit"
                    className="m-1.5 rounded-lg border-2 border-green-400 bg-gray-500 px-4 py-2 text-sm font-medium text-white cursor-pointer" onClick={handleSubmit}
                >Submit </button>
            </form>
        </>
    )
}