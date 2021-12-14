import React from 'react'

import { useForm } from 'react-hook-form'

export default function BasicForm () {
  const { register, handleSubmit, formState: { errors } } = useForm();


//   function handleChange (event) {
//     // manejar el cambio de informacion recibida
//     setData({
//       email: event.target.name === 'email' ? event.target.value : data.email,
//       password: event.target.name === 'password' ? event.target.value : data.password
//     })
//   }

  const onSubmit = (data) => {
      console.log('Data', data)
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email: </label>
          <input type="email" name="email" {...register("email", { required: true })} />
          {errors.email?.type === 'required' && " E-mail is required"}
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" {...register("password", { required: true })} />
          {errors.password?.type === 'required' && " Password is required"}
        </div>
        <div>
          <button type="submit">Log in </button>
        </div>
      </form>
    </div>
  )
}
