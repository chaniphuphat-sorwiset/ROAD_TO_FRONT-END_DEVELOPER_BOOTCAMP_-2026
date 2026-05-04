import React, { useState } from "react"

function Bmi() {
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [bmi, setBmi] = useState<number>(0)
  const handleSubmitted = (event: React.SubmitEvent<HTMLFormElement>) => {
    const bmi = weight / (height / 100) ** 2
    event.preventDefault()
    setBmi(bmi)
    console.log(height)
    console.log(weight)
    console.log(bmi)
  }
  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(+event.target.value)
  }
  const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value)
  }
  return (
    <div>
      <h1>{bmi}</h1>
      <form onSubmit={handleSubmitted}>
        <label htmlFor="height">Height:</label>
        <input onChange={handleHeightChange} type="number" id="height"></input>
        <label htmlFor="weight">Weight:</label>
        <input onChange={handleWeightChange} type="number" id="weight"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}

export default Bmi
