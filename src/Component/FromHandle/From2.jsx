import { useState } from "react"

export default function Form2() {

    const [user, setUser] = useState({ name: '', email: '', pass: '' });
    const { name, email, pass } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ name: "", email: "", pass: "" })
        console.log(user)
    }
    return (
        <>
            <h1>React Form Handel</h1>
            <form action="">
                <div>
                    <label htmlFor="name">Name </label> <br />
                    <input type="text" name="name" id="name" placeholder="Enter your name" required onChange={handleChange} value={name} />
                </div>

                <div>
                    <label htmlFor="email">Email </label> <br />
                    <input type="text" name="email" id="email" placeholder="Enter your email" required onChange={handleChange} value={email} />
                </div>

                <div>
                    <label htmlFor="pass" >Password </label> <br />
                    <input type="password" name="pass" id="pass" placeholder="Enter your password" required onChange={handleChange} value={pass} />
                </div>

                <button
                    type="submit"
                    onClick={handleSubmit}
                >Submit </button>
            </form>
        </>
    )
}