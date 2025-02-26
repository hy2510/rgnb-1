import {
  AccountCardBox,
  AccountListBox,
  VerifyPasswordModalBox,
} from '@/app/_ui/StyledAccount'
import { BasicButtonBox, GapBox } from '@/app/_ui/StyledCommon'
import { useState } from 'react'

export default function AccountList() {
  return (
    <AccountListBox>
      <GapBox $px={40} />
      <div className="account-list-container">
        <AccountCard />
        <AccountCard />
      </div>
      <div className="btn-link">Add Account</div>
      <GapBox $px={40} />
    </AccountListBox>
  )
}

// 어카운트 카드
function AccountCard() {
  const avatarImage =
    'https://wcfresource.a1edu.com/newsystem/image/character/maincharacter/dodo_01.png' // 학생 아바타
  const studentName = '퐁퐁짱짱민민' // 학생이름
  const studentId = 'pjm@readinggate.com' // 학생 아이디
  const deleteAccountCardMessage =
    'Do you want to delete the selected account from the list?' // 계정 삭제 버튼을 눌렀을 때 나오는 메세지

  const [isCardSelected, setIsCardSelected] = useState(false)

  return (
    <>
      <AccountCardBox>
        <div
          className="container-account-card"
          onClick={() => {
            isCardSelected ? setIsCardSelected(false) : setIsCardSelected(true)
          }}>
          <div
            className="img-avatar"
            style={{
              backgroundImage: `url(${avatarImage})`,
            }}></div>
          <GapBox $px={20} />
          <div className="txt-student-name">{studentName}</div>
          <div className="txt-student-id">({studentId})</div>
        </div>
        {/* 계정 삭제 버튼 */}
        <div className="btn-delete"></div>
      </AccountCardBox>
      {isCardSelected && (
        <VerifyPasswordModal
          studentName={studentName}
          studentId={studentId}
          setIsCardSelected={setIsCardSelected}
        />
      )}
    </>
  )
}

// 비밀번호 입력창
function VerifyPasswordModal({
  studentName,
  studentId,
  setIsCardSelected,
}: {
  studentName: string
  studentId: string
  setIsCardSelected: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <VerifyPasswordModalBox>
      <div className="container-verify-password">
        <div className="box-student-info">
          <div className="txt-student-name">{studentName}</div>
          <div className="txt-student-id">({studentId})</div>
        </div>
        <div className="box-input-password">
          <form autoComplete="off">
            <input type="password" placeholder="Password" />
          </form>
        </div>
        <div className="box-btn-log-in">
          <BasicButtonBox $color="red">로그인</BasicButtonBox>
        </div>
      </div>
      <div
        className="container-light-box"
        onClick={() => {
          setIsCardSelected(false)
        }}></div>
    </VerifyPasswordModalBox>
  )
}
