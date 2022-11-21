import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [result, setResult] = useState('')

  function countString() {
    const re = new RegExp('@', 'g')
    const count = email.match(re).length
    return count
  }

  function validate(e) {
    ((email !== '' && password !== '' && passwordConfirm !== '') &&
    (email.indexOf('@') > -1) && (countString() === 1) &&
    (password.length >= 8) &&
    (password === passwordConfirm))
    ?
    setResult('User created!') :
    setResult('Error!')
    e.preventDefault()
  }

  return (
    <form onSubmit={validate}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <p><b>{result}</b></p>
      <input type='submit' value='Submit' />
    </form>
  )
}
