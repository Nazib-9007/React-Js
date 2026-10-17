export default function Conditional({name, age}){
    if(age<18){
        return <h1>You are too young!</h1>
    } else if(age >= 18){
        return <h1>You are Adult!</h1>
    }
    return (
        <>
        <h1>Name: {name} </h1>
        <h1>Age: {age} </h1>
        </>
    )
}