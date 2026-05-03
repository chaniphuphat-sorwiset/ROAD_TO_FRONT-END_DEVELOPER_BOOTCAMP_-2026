import { useState } from "react"
import Heading from "./Heading"
import Button from "./Button"
import Footer from "./Footer"
import "./App.css"

function App() {
  const [counter, setCounter] = useState<number>(0)

  const increaseCount = () => {
    setCounter(counter + 1)
  }
  const decreaseCount = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <button onClick={increaseCount}>Increase</button>
      <Heading title="ABC" counter={counter}>
        Now Counting = {counter}
      </Heading>
      <Button title="Increase" color="red" updateCount={increaseCount}></Button>
      <Button
        title="Decrease"
        color="grey"
        updateCount={decreaseCount}
      ></Button>
      <h1>Hello World</h1>
      <Footer counter={counter}></Footer>
    </>
  )
}

export default App
