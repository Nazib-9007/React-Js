import { useState } from "react"

export default function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handelName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePass = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const info = {
            name, email, pass
        }
        console.log(info)
        setName("")
        setEmail("")
        setPass("")
    }
    return (
        <>
            <h1 className="text-center font-semibold text-xl m-2">React Form Handel</h1>
            <form action="" className="flex flex-col items-center m-1.5 font-mono">
                <div className="m-1.5 text-center">
                    <label htmlFor="name" name="name" id="name">Name </label> <br />
                    <input type="text" placeholder="Enter your name" className="border-2 border-amber-400 rounded-lg p-1.5" required onChange={handelName} value={name} />
                </div>

                <div className="m-1.5 text-center">
                    <label htmlFor="email" name="email" id="email">Email </label> <br />
                    <input type="text" placeholder="Enter your email" className="border-2 border-amber-400 rounded-lg p-1.5" required onChange={handleEmail} value={email} />
                </div>

                <div className="m-1.5 text-center">
                    <label htmlFor="pass" name="pass" id="pass">Password </label> <br />
                    <input type="password" placeholder="Enter your password" className="border-2 border-amber-400 rounded-lg p-1.5" required onChange={handlePass} value={pass} />
                </div>

                <button
                    type="submit"
                    className="m-1.5 rounded-lg border-2 border-green-400 bg-gray-500 px-4 py-2 text-sm font-medium text-white cursor-pointer" onClick={handleSubmit}
                >Submit </button>
            </form>
        </>
    )
}