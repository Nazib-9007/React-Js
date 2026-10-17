export default function Compo ({naam, age}){
    return (
        <div className="text-2xl text-center mt-2 font-sans font-semibold">
        {/* <button className="bg-black text-green-400 font-bold p-2 border-2 rounded-xl">I am a button</button> */}

        {age > 18 &&
        <>
        <p>Name: {naam}</p>
        <p>Age: {age}</p>
        <p>You are adult now!</p>
        </>
        }
        {age < 18 &&
        <>
        <p>Name: {naam}</p>
        <p>Age: {age}</p>
        <p>You are too young bro!</p>
        </>
        }
        </div>
    )
}