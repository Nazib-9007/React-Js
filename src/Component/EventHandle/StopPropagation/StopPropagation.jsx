export default function StopPropagation() {

    const parentElement = (e) => {
        console.log("Clicked Parent", e)
    }

    const childElement = (event) => {
        event.stopPropagation();
        console.log("Clicked Child", event)
    }

    return (
        <div className="parent" onClick={parentElement}>
            <button onClick={childElement}>Click Me</button>
        </div>
    )
}
