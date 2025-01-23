'use client'

import {
  ModalBodyBox,
  ModalBox,
  ModalContainerBox,
  ModalHeaderBox,
} from '@/app/_ui/StyledCommon'
import useTranslation from '@/localization/client/useTranslations'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useStudentAvatar } from '@/client/store/student/avatar/selector'
import { useStudentReadingUnit } from '@/client/store/student/reading-unit/selector'
import { ChooseAvatarAndReadingUnit } from './MyRgModal/ChooseAvatarAndReadingUnit'
import MyRg from './MyRgModal/MyRg'

/** 연속 학습일 아이템은 최대 10000일 까지만 획득 가능 */
const CONTINUOUS_MAX_DAY = 10000
/** 연속 학습일 아이템은 300일 까지만 개별 이미지가 존재함 */
const CONTINUOUS_IMAGE_DAY = 300
/** 연속 학습일은 20일 단위로 누적됨 */
const CONTINUOUS_DAY_STEP = 20

export const CONTINUOUS_SETTING = {
  CONTINUOUS_MAX_DAY,
  CONTINUOUS_IMAGE_DAY,
  CONTINUOUS_DAY_STEP,
}

/** 일일 목표 완료 아이템은 최대 1050회 까지만 획득 가능 */
export const DAILY_SUCCESS_MAX_STUDY = 1050

export type MyRgMenu =
  | '/'
  | 'choose-avatar'
  | 'todo'
  | 'favorite'
  | 'daily-goal'
  | 'study-level'
  | 'study-level-test'
  | 'daily-goal-award'
  | 'streak-award'
  | 'level-master-award'
  | 'challenge-award'
  | 'study-setting'
  | 'chatbot'
  | 'account'
  | 'logout'

// My RG 모달
export function MyRgModal({ onCloseModal }: { onCloseModal?: () => void }) {
  // @Language 'common'
  const { t } = useTranslation()

  const [viewName, setViewName] = useState<MyRgMenu>('/')

  const router = useRouter()
  const { userAvatar } = useStudentAvatar()
  const [avatarId, setAvatarId] = useState(userAvatar.avatarId)

  const { userReadingUnit } = useStudentReadingUnit()
  const [readingUnitId, setReadingUnitId] = useState(
    userReadingUnit.readingUnitId,
  )
  const onChangeAvatarAndReadingUnit = (
    avatarId: string,
    readingUnitId: string,
  ) => {
    setAvatarId(avatarId)
    setReadingUnitId(readingUnitId)
  }

  const isRoot = viewName === '/'
  const headerTitle = getMenuTitle(t, viewName)

  const onMenuSelectListener = (menu: MyRgMenu) => {
    if (menu === 'logout') {
      router.replace('/signoff')
      onModalClose()
      return
    }
    setViewName(menu)
  }
  const onModalClose = () => {
    onCloseModal && onCloseModal()
  }

  return (
    // <Modal
    //   compact
    //   header={isRoot}
    //   navTop={!isRoot}
    //   title={headerTitle}
    //   onClickBack={() => {
    //     if (viewName !== '/') {
    //       setViewName('/')
    //     }
    //   }}
    //   onClickDelete={onModalClose}
    //   onClickLightbox={onModalClose}>
    <ModalBox className={`${viewName === '/' ? 'change-dropdown' : null}`}>
      <ModalContainerBox
        className={`${viewName === '/' ? 'change-dropdown' : null}`}>
        <ModalHeaderBox style={{ display: viewName === '/' ? 'none' : 'flex' }}>
          <div className="title">My Info</div>
          <button
            onClick={() => {
              onModalClose && onModalClose()
            }}
            className="delete-button"></button>
        </ModalHeaderBox>
        <ModalBodyBox
          className={`${viewName === '/' ? 'change-dropdown' : null}`}>
          {viewName === '/' && (
            <MyRg
              onMenuClick={onMenuSelectListener}
              onModalClose={onModalClose}
            />
          )}
          {viewName === 'choose-avatar' && (
            <ChooseAvatarAndReadingUnit
              defaultAvatar={avatarId}
              defaultReadingUnit={readingUnitId}
              onChangeAvatarAndReadingUnit={onChangeAvatarAndReadingUnit}
            />
          )}
          {viewName === 'study-setting' && <div>학습 설정</div>}
        </ModalBodyBox>
      </ModalContainerBox>
      <div
        onClick={() => {
          onModalClose && onModalClose()
        }}
        className="light-box"></div>
    </ModalBox>
  )
}

function getMenuTitle(t: (id: string, params?: any) => string, menu: MyRgMenu) {
  let title: string
  switch (menu) {
    case 'choose-avatar':
      title = t('t037')
      break
    case 'daily-goal':
      title = t('t042')
      break
    case 'study-level':
    case 'study-level-test':
      title = t('t043')
      break
    case 'daily-goal-award':
      title = t('t038')
      break
    case 'streak-award':
      title = t('t039')
      break
    case 'level-master-award':
      title = t('t041')
      break
    case 'challenge-award':
      title = t('t040')
      break
    case 'study-setting':
      title = t('t044')
      break
    default:
      title = t('t034')
  }
  return title
}
