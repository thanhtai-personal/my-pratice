import React from 'react'
import {
  LoginWrapper
} from './loginStyled'
import loginBgImage from 'assets/images/login_bg.jpg'
import leftPanelImage from 'assets/images/left_bg.jpg'
import { useCallback } from 'react'
import loginModel from '../../models/login.model'

const text = {
  userName: 'User name',
  password: 'Password',
  googleLogin: 'Login via Google',
  login: 'Login',
}

const LoginView = (props) => {

  const { onLogin, onGoogleLogin, onUpdateField } = props

  const handleChangeUserName = useCallback((e, data) => {
    onUpdateField(loginModel.userName, e, data)
  }, [onUpdateField])

  const handleChangePassword = useCallback((e, data) => {
    onUpdateField(loginModel.password, e, data)
  }, [onUpdateField])

  return (<LoginWrapper
    loginBackground={loginBgImage}
    leftPanelImage={leftPanelImage}
  >
    <div className={'left-panel'}></div>
    <div className={'right-panel'}>
      <form onSubmit={onLogin}>
        <label><h1>{text.login}</h1></label>
        <label>
          <input type='text' onChange={handleChangeUserName} name='name' placeholder={text.userName} />
        </label>
        <label>
        <input type='text' onChange={handleChangePassword} name='password' placeholder={text.password} />
        </label>
        <div className='actions'>
          <input type='submit' value='Login' />
          <button onClick={onGoogleLogin} >{text.googleLogin}</button>
        </div>
      </form>
    </div>
  </LoginWrapper>)
}

export default LoginView