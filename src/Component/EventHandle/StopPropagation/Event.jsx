import { useState } from "react"
import reactLogo from "../assets/react.svg"
import vitLogo from "../assets/vite.svg"

export default function Event() {

  const [event, setEvent] = useState("");
  const [image, setImage] = useState(vitLogo);
  const [count, setCount] = useState(0);

  const handle = (e) => {
    setEvent(e.target.value)
  }

  const changeImg = () => {
    setImage(reactLogo)
  }

  const incCount = () => {
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
    setCount((preCount) => preCount + 1);
  }

  const decCount = () => {
    setCount((preCount) => preCount - 1)
    setCount((preCount) => preCount - 1)
    setCount((preCount) => preCount - 1)
  }

  const reSet = () => {
    setCount(0)
  }

  return (
    <div>
      <h2>This is Event Handle part!</h2>
      <input type="text" onChange={handle} />
      <p>{event}</p>
      <button type="button" onClick={changeImg}>See React Img</button>
      <img src={image} width={40} alt="react logo" />

      <h2>Count {count}</h2>
      <button onClick={incCount}>Increment</button>
      <button onClick={decCount}>Decrement</button>
      <button onClick={reSet}>Reset</button>
    </div>
  )
}
