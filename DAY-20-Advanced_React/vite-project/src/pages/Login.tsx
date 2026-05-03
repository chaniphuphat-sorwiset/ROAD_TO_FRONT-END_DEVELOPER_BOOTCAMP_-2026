import { useState } from "react"

import Button from "../components/Button"

function Login() {
  const [counter, setCounter] = useState<number>(0) // const [counter, setCounter] = useState<number>(0)

  const decreaseCount = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <form action="">
        <label htmlFor="username"></label>
        <input type="text" />
      </form>
      <Button title="Login" color="grey" updateCount={decreaseCount}></Button>
    </div>
  )
}

export default Login
