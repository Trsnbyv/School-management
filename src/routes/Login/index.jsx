import { Route, Routes } from 'react-router-dom'
import {SignIn, Signup } from '../../pages/Login'

function LoginPage() {
  return (
    <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
    </Routes>
  )
}

export default LoginPage
