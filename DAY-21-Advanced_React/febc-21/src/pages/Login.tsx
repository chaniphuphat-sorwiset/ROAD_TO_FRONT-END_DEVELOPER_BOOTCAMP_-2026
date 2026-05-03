import React, { useState } from "react"
import { useForm } from "react-hook-form"

import Button from "../components/Button"

interface RegisterForm {
  username: string
  password: string
  confirmPassword: string
  email: string
  firstname: string
  lastname: string
}

function Login() {
  const { register, handleSubmit } = useForm<RegisterForm>()
  const onSubmit = (data: RegisterForm) => {
    console.log(data)
  }
  // const [username, setUsername] = useState<string>("")
  // const [password, setPassword] = useState<string>("")
  // const handleSubmitted = (event: React.SubmitEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   console.log(username)
  //   console.log(password)
  // }
  // const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUsername(event.target.value)
  //   console.log(username)
  // }

  // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value)
  //   console.log(password)
  // }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username"),{required: true, maxLength:20}} type="text" id="username" />
        <input {...register("email")} type="email" id="email" />
        <input {...register("firstname")} type="text" id="firstname" />
        <input {...register("lastname")} type="text" id="lastname" />
        <input {...register("password")} type="password" id="password" />
        <input {...register("confirmPassword")} type="password" id="password" />
        <input type="submit" value="Submit" />
      </form>
      {/*<form onSubmit={handleSubmitted} action="">
        <label htmlFor="username">username</label>
        <input onChange={handleUsernameChange} type="text" id="username" />
        <label htmlFor="password">password</label>
        <input onChange={handlePasswordChange} type="password" id="password" />
        <input type="submit" value="Submit" />
      </form>*/}
      {/*<Button title="Login" color="grey" updateCount={decreaseCount}></Button>*/}
    </div>
  )
}

export default Login
