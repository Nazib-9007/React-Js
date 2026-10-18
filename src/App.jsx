import { useState } from 'react'
import Child from './Component/Shifting_Lift/Child.jsx'
function App() {

  const [count, setCount] = useState(0)
  const handel = () => {
    setCount((prev) => { return prev + 1 })
  }
  return (
    <>
      <Child onReceiveData={handel} >
        <h1>{count}</h1>
      </Child>
    </>
  )
}
export default App
