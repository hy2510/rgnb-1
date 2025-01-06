'use client'

import { useSiteBlueprint } from '@/app/_context/CustomerContext'
import {
  AccountInfo,
  EditChangePasswordBox,
  EditTextFieldBox,
} from '@/app/_ui/StyledAccount'
import { PageContainerBox } from '@/app/_ui/StyledCommon'
import useTranslation from '@/localization/client/useTranslations'
import DateUtils from '@/util/date-utils'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  useFetchChnagePassword,
  useFetchModifySmsReceive,
  useFetchUpdatePhoneNumberCert,
  useFetchUpdatePhoneNumberRequest,
  useFetchUpdateStudentName,
} from '@/client/store/student/info/hook'
import {
  useStudentInfo,
  useStudentInfoMainPhone,
} from '@/client/store/student/info/selector'
import { useScreenMode } from '@/ui/context/StyleContext'
import {
  BASE_TIME,
  isValidatePassword,
  isValidatePasswordVn,
  isValidateStudentName,
  isValidateStudentNameKr,
  useCountDown,
} from '../_info/account-fn'

export default function Page() {
  // @language 'common'
  const { t } = useTranslation()

  const isMobile = useScreenMode() === 'mobile'
  const swingWebViewPlugin = (window as any).swingWebViewPlugin

  const { country, isPaymentable, paymentUrl, isShowStudyEndDay, studentOpen } =
    useSiteBlueprint()
  const {
    changeUserName: isChangeStudentName,
    userEmail: isShowUserEmail,
    phoneNumber: isShowPhoneNumber,
    reportSetting: isReportSetting,
    suspendSetting: isStudySuspendSetting,
    withdraw: isWithdraw,
    nameMaxLangth,
  } = studentOpen
  const student = useStudentInfo()

  const { fetch: fetchUpdateStudentName } = useFetchUpdateStudentName()
  const [newStudentName, setNewStudentName] = useState<{
    isEdit: boolean
    value: string
  }>({ isEdit: false, value: '' })
  const onChangeStudentName = (name: string) => {
    if (name.length === 0) {
      alert(t('t176'))
      return
    }
    if (country.korea) {
      if (!isValidateStudentNameKr(name)) {
        alert(t('t177'))
        return
      }
    } else {
      if (!isValidateStudentName(name)) {
        alert(t('t177'))
        return
      }
    }
    setNewStudentName({ isEdit: false, value: name })
    fetchUpdateStudentName({
      studentName: name,
      callback: (success) => {
        if (!success) {
          alert(t('t178'))
          setNewStudentName({ isEdit: true, value: name })
        } else {
          alert(t('t179'))
        }
      },
    })
  }

  const { fetch: fetchChangePassword } = useFetchChnagePassword()
  const [newPassword, setNewPassword] = useState<{
    isEdit: boolean
    oldValue: string
    newValue: string
  }>({ isEdit: false, oldValue: '', newValue: '' })
  const onChangePassword = (oldPassword: string, newPassword: string) => {
    if (oldPassword.length === 0) {
      alert(t('t180'))
      return
    }
    if (newPassword.length === 0) {
      alert(t('t181'))
      return
    }
    if (oldPassword === newPassword) {
      alert(t('t182'))
      return
    }
    if (country.korea && !isValidatePassword(newPassword)) {
      alert(t('t183', { num1: 8, num2: 20 }))
      return
    } else if (country.vietnam && !isValidatePasswordVn(newPassword)) {
      alert(t('t184', { num1: 8, num2: 20 }))
      return
    }
    setNewPassword({
      isEdit: false,
      oldValue: oldPassword,
      newValue: newPassword,
    })
    fetchChangePassword({
      oldPassword,
      newPassword,
      callback: (success) => {
        if (!success) {
          alert(t('t178'))
          setNewPassword({
            isEdit: true,
            oldValue: oldPassword,
            newValue: newPassword,
          })
        } else {
          alert(t('t185'))
          setNewPassword({ isEdit: false, oldValue: '', newValue: '' })
        }
      },
    })
  }

  const userName = student.name
  const userLoginId = student.loginId
  let userEmail = ''
  if (student.parentEmail) {
    userEmail = student.parentEmail
  } else if (student.studentEmail) {
    userEmail = student.studentEmail
  }
  const [newPhone, setNewPhone] = useState<{
    isEdit: boolean
    phoneNumber: string
    requestValue: string
    authCode: string
    isInvalidAuthCode: boolean
  }>({
    isEdit: false,
    phoneNumber: '',
    requestValue: '',
    authCode: '',
    isInvalidAuthCode: false,
  })
  const userPhone = useStudentInfoMainPhone()
  const { timeText, reset, stop } = useCountDown({
    timeset: BASE_TIME,
    autoStart: false,
  })
  const { fetch: fetchChangePhoneNumber } = useFetchUpdatePhoneNumberRequest()
  const { fetch: fetchChangePhoneAuthCode } = useFetchUpdatePhoneNumberCert()

  const onPhoneNumberChangeMode = (isEdit: boolean) => {
    setNewPhone({
      isEdit,
      phoneNumber: '',
      requestValue: '',
      authCode: '',
      isInvalidAuthCode: false,
    })
  }

  const onRequestAuthCode = (phoneNumber: string) => {
    if (phoneNumber.length === 0) {
      alert(t('t620')) // 전화번호를 입력해 주세요.
      return
    }
    fetchChangePhoneNumber({
      phone: phoneNumber,
      callback: (isSuccess) => {
        if (isSuccess) {
          reset()
          setNewPhone({
            ...newPhone,
            phoneNumber,
            requestValue: phoneNumber,
            isInvalidAuthCode: false,
          })
        } else {
          alert(t('t621')) // 인증번호 요청에 실패하였습니다.
        }
      },
    })
  }

  const onValidateAuthCode = (phoneNumber: string, authCode: string) => {
    if (phoneNumber.length === 0 || phoneNumber !== newPhone.phoneNumber) {
      alert(t('t622')) // 인증번호를 다시 요청해주세요.
      return
    }
    fetchChangePhoneAuthCode({
      phone: phoneNumber,
      authCode,
      callback: (isSuccess) => {
        if (isSuccess) {
          onPhoneNumberChangeMode(false)
          alert(t('t623')) // 전화번호가 변경되었습니다.
        } else {
          setNewPhone({ ...newPhone, isInvalidAuthCode: true })
          alert(t('t624')) // 인증에 실패하였습니다.
        }
      },
    })
  }

  let studyEndDate = ''
  if (student.studyEndDate) {
    let endDate: Date | undefined = undefined
    if (
      student.studyEndDate.length === 8 ||
      student.studyEndDate.length === 10
    ) {
      endDate = DateUtils.createDate(student.studyEndDate)
    }
    if (endDate) {
      endDate.setDate(endDate.getDate() - 1)
      studyEndDate = DateUtils.toStringDate(endDate, {
        divide: '.',
        digitfix: false,
      })
    }
  }

  const isSmsReceive = student.smsStudyReportYn && student.smsEventInfomationYn
  const { fetch: fetchModifySmsAgree } = useFetchModifySmsReceive()
  const onChangeSmsReceive = (isReceive: boolean) => {
    if (!userPhone) {
      alert(t('t186'))
      return
    }
    fetchModifySmsAgree({
      isReceive,
      callback: (success) => {
        if (!success) {
          alert(t('t178'))
        } else {
          if (isReceive) {
            alert(t('t187'))
          } else {
            alert(t('t188'))
          }
        }
      },
    })
  }

  return (
    <AccountInfo>
      <PageContainerBox $compact style={{ padding: '20px' }}>
        <div className="heading">{t('t189')}</div>
        {/* 회원 & 결제 정보 */}
        {isShowStudyEndDay && (
          <div className="group-1">
            <div>{t('t191', { num: student.studyEndDay })}</div>
            <div>{t('t192', { txt: studyEndDate })}</div>
            {isPaymentable && <Link href={paymentUrl}>{t('t193')}</Link>}
          </div>
        )}
        {!isShowStudyEndDay && isPaymentable && (
          <div className="group-1">
            <Link href={paymentUrl}>{t('t193')}</Link>
          </div>
        )}
        <div className="group-2">
          <EditTextField
            key={userName || undefined}
            hint={t('t080')}
            value={newStudentName.isEdit ? newStudentName.value : userName}
            editMessage={t('t194')}
            saveMessage={t('t195')}
            isEdit={newStudentName.isEdit}
            isDisableEdit={!isChangeStudentName}
            maxLength={nameMaxLangth}
            onConfirmEdit={(isEdit, text) => {
              if (!isEdit) {
                setNewStudentName({ isEdit: true, value: userName })
              } else {
                const name = text.trim()
                if (name && newStudentName.value !== name) {
                  onChangeStudentName(name)
                } else {
                  setNewStudentName({ isEdit: false, value: name })
                }
              }
            }}
          />
          {isShowUserEmail ? (
            <>
              {userLoginId === userEmail ? (
                <div className="text-field">
                  ID(EMAIL): <input value={userEmail} disabled />
                </div>
              ) : (
                <>
                  <div className="text-field">
                    <div className="hint">ID</div>
                    <input value={userLoginId} disabled />
                  </div>
                  {/* <div className="text-field">
                    <div className="hint">E-MAIL</div>
                    <input value={userEmail} disabled />
                  </div> */}
                </>
              )}
            </>
          ) : (
            <>
              <div>
                ID <input value={userLoginId} disabled />
              </div>
            </>
          )}
          <EditChangePassword
            oldPassword={newPassword.oldValue}
            newPassword={newPassword.newValue}
            isEdit={newPassword.isEdit}
            onTextChange={(oldValue, newValue) => {
              setNewPassword({ ...newPassword, oldValue, newValue })
            }}
            onConfirmEdit={(oldValue, newValue) => {
              onChangePassword(oldValue, newValue)
            }}
            onModeChange={(isEdit) =>
              setNewPassword({ isEdit, oldValue: '', newValue: '' })
            }
          />
        </div>
      </PageContainerBox>
    </AccountInfo>
  )
}

// 수정하기 기능이 있는 텍스트 필드
const EditTextField = ({
  hint,
  value,
  editMessage,
  saveMessage,
  password,
  email,
  maxLength,
  isEdit,
  isDisableEdit,
  onConfirmEdit,
}: {
  hint?: string
  value?: string
  editMessage?: string
  saveMessage?: string
  password?: boolean
  email?: boolean
  maxLength?: number
  isEdit?: boolean
  isDisableEdit?: boolean
  onConfirmEdit?: (isEdit: boolean, text: string) => void
}) => {
  const [text, setText] = useState(value)
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (isEdit) {
      ref.current?.focus()
    }
  }, [isEdit])

  return (
    <EditTextFieldBox>
      {!isDisableEdit && (
        <div
          onClick={() => {
            onConfirmEdit && onConfirmEdit(!!isEdit, text || '')
          }}
          className="edit-button">
          {!isEdit ? editMessage : <span>{saveMessage}</span>}
        </div>
      )}
      <div className="hint">{hint}</div>
      <input
        ref={ref}
        value={text}
        disabled={!isEdit}
        type={password ? 'password' : email ? 'email' : 'text'}
        maxLength={maxLength}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
    </EditTextFieldBox>
  )
}

// 비밀번호 변경하기
const EditChangePassword = ({
  oldPassword,
  newPassword,
  isEdit,
  onTextChange,
  onConfirmEdit,
  onModeChange,
}: {
  oldPassword?: string
  newPassword?: string
  isEdit?: boolean
  onTextChange?: (oldValue: string, newValue: string) => void
  onConfirmEdit?: (oldPassword: string, newPassword: string) => void
  onModeChange?: (isEdit: boolean) => void
}) => {
  //@language 'common'
  const { t } = useTranslation()

  const oldPwRef = useRef<HTMLInputElement>(null)
  const newPwRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEdit) {
      oldPwRef.current?.focus()
    }
  }, [isEdit])

  return (
    <EditChangePasswordBox>
      {!isEdit ? (
        <>
          <div
            onClick={() => {
              onModeChange && onModeChange(true)
            }}
            className="edit-button">
            {t('t194')}
          </div>
          <div className="hint">비밀번호</div>
          <input value={'************'} disabled type="password" />
        </>
      ) : (
        <>
          <div className="edit">
            <div className="hint">현재 비밀번호</div>
            <input
              ref={oldPwRef}
              type="password"
              value={oldPassword}
              onChange={(e) => {
                onTextChange && onTextChange(e.target.value, newPassword || '')
              }}
              className="active"
            />
          </div>
          <div>
            <div className="edit">
              <div
                onClick={() => {
                  onModeChange && onModeChange(false)
                }}
                className="edit-button right">
                {t('t204')}
              </div>
              <div
                onClick={() => {
                  onConfirmEdit &&
                    onConfirmEdit(oldPassword || '', newPassword || '')
                }}
                className="edit-button left">
                {t('t097')}
              </div>
            </div>
            <div className="hint">변경할 비밀번호</div>
            <input
              ref={newPwRef}
              type="password"
              value={newPassword}
              onChange={(e) => {
                onTextChange && onTextChange(oldPassword || '', e.target.value)
              }}
              className="active"
            />
          </div>
        </>
      )}
    </EditChangePasswordBox>
  )
}
