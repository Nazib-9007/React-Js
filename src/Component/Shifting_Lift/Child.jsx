export default function Child(props) {
    return (
        <>
            {props.children}
            <button onClick={props.onReceiveData}>Count Me</button>
        </>
    )
}