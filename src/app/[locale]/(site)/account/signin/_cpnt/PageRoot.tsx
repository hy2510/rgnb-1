'use client'

import { useApplicationType } from '@/app/_context/AppContext'
import { useCustomerInfo } from '@/app/_context/CustomerContext'
import { useLoginAction } from '@/app/_context/LoginContext'
import { LoginBodyBox } from '@/app/_ui/StyledAccount'
import { BasicButtonBox } from '@/app/_ui/StyledCommon'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'

export default function PageRoot({ to }: { to?: string }) {
  const appType = useApplicationType()
  const customer = useCustomerInfo()

  const onLogin = useLoginAction()
  const router = useRouter()

  const [loginId, setLoginId] = useState('')
  const [password, setPassword] = useState('')
  const loginIdInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const requestLogin = (id: string, password: string) => {
    onLogin({
      id,
      password,
      isSavePassword: false,
      destination: to,
      onError: (code, message, redirect) => {
        if (code === 3000) {
        } else if (code === 2001 && redirect) {
          router.replace(redirect)
        }
        alert(message)
        passwordInputRef.current?.focus()
      },
    })
  }

  const isLoginDisabled = !loginId || !password

  return (
    <LoginBodyBox>
      <div className="sign-in">
        <form autoComplete="off">
          <input
            placeholder="아이디"
            autoComplete="off"
            ref={loginIdInputRef}
            onChange={(e) => setLoginId(e.target.value)}
            value={loginId}
            onKeyDown={(e) => {
              if (e.key.toLowerCase() === 'enter') {
                if (!isLoginDisabled) {
                  requestLogin(loginId, password)
                } else if (loginId && !password) {
                  passwordInputRef?.current?.focus()
                }
              }
            }}
          />
          <input
            placeholder="패스워드"
            autoComplete="new-password"
            type="password"
            ref={passwordInputRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key.toLowerCase() === 'enter') {
                if (!isLoginDisabled) {
                  requestLogin(loginId, password)
                } else if (!loginId && password) {
                  loginIdInputRef?.current?.focus()
                }
              }
            }}
          />
          <BasicButtonBox
            $color="red"
            onClick={() => requestLogin(loginId, password)}>
            로그인
          </BasicButtonBox>
        </form>
      </div>
    </LoginBodyBox>
  )
}
