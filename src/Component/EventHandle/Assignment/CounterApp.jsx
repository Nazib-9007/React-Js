import { useState } from "react"
import "./index.css"
export default function CounterApp() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((preCount) => preCount + 1)
    }

    const decrement = () => {
        setCount((preCount) => preCount - 1)
    }

    const reSet = () => {
        setCount(0)
    }

    return (
        <div>
            <div className="counter center">
                <h1 className="counter__title">Counter App</h1>
                <div className="card center">
                    <h2 className="card__title">Count : {count}</h2>
                    <div className="card__btns">
                        <button className="btn card__btn" onClick={increment} disabled={count == 5 ? true : false}>+</button>
                        <button className="btn card__btn" onClick={decrement} disabled={count == -5 ? true : false}>-</button>
                        <button className="btn card__btn" onClick={reSet}>0</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
