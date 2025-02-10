'use client'

import { useSiteBlueprint } from '@/app/_context/CustomerContext'
import { openWindow } from '@/app/_function/open-window'
import {
  BasicButtonBox,
  MyRgBox,
  MyRgEtcBox,
  TotalStudyScoreBox,
} from '@/app/_ui/StyledCommon'
import SITE_PATH from '@/app/site-path'
import { useChannelTalkChatbotController } from '@/external/channel-talk/component/ChannelTalkContext'
import useTranslation from '@/localization/client/useTranslations'
import NumberUtils from '@/util/number-utils'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useStudentAvatar } from '@/client/store/student/avatar/selector'
import { useStudentInfo } from '@/client/store/student/info/selector'
import { useStudentReadingUnit } from '@/client/store/student/reading-unit/selector'
import { MyRgMenu } from '../MyRgModal'

export default function MyRg({
  onMenuClick,
  onModalClose,
}: {
  onMenuClick?: (menu: MyRgMenu) => void
  onModalClose?: () => void
}) {
  // @language 'common'
  const { t } = useTranslation()

  const student = useStudentInfo()

  const { userAvatar } = useStudentAvatar()
  const { userReadingUnit } = useStudentReadingUnit()
  const { isShowStudyEndDay } = useSiteBlueprint()

  const chatbotController = useChannelTalkChatbotController()

  const onMyRgMenuClickListener = (menu: MyRgMenu) => {
    onMenuClick && onMenuClick(menu)
  }

  return (
    <MyRgBox>
      {/* <MyRgUseEndDate
        useEndDate={student.studyEndDay}
        isShowEndDate={isShowStudyEndDay}
      /> */}
      <TotalStudyScore
        userGrade={student.gradeName}
        studentName={student.name}
        userAvatar={userAvatar.imageSmall}
        userReadingUnit={userReadingUnit.image}
        totalPassed={student.brCount}
        totalEarnPoints={NumberUtils.toRgDecimalPoint(student.rgPoint)}
        onClick={() => onMyRgMenuClickListener('choose-avatar')}
      />
      <MyRgEtc
        onClickSetStudyMode={() => onMyRgMenuClickListener('study-setting')}
        onClickAccountInfo={onModalClose}
        onClickChatbot={() => {
          chatbotController.showChat()
          onModalClose && onModalClose()
        }}
        onStartLevelTest={() => {
          onMyRgMenuClickListener('study-level-test')
        }}
      />
      <BasicButtonBox
        $color="red"
        style={{ marginBottom: '5px' }}
        onClick={() =>
          setTimeout(() => {
            onMyRgMenuClickListener('logout')
          }, 500)
        }>
        {t('t050')}
      </BasicButtonBox>
    </MyRgBox>
  )
}

// My RG > 남은기간
function MyRgUseEndDate({
  useEndDate,
  isShowEndDate = false,
}: {
  useEndDate: number
  isShowEndDate?: boolean
}) {
  // @language 'common'
  const { t } = useTranslation()

  return (
    <div>
      {isShowEndDate ? (
        <>
          <span>{t('t051')}</span>
          <span>
            <b>{t('t052', { num: useEndDate })}</b>
          </span>
        </>
      ) : (
        <span>&nbsp;</span>
      )}
    </div>
  )
}

// 나의 프로필 > 학습 총점
function TotalStudyScore({
  userGrade,
  studentName,
  userAvatar,
  userReadingUnit,
  totalPassed,
  totalEarnPoints,
  onClick,
}: {
  userGrade: string
  studentName: string
  userAvatar: string
  userReadingUnit: string
  totalPassed: number
  totalEarnPoints: number
  onClick?: () => void
}) {
  // @language 'common'
  const { t } = useTranslation()

  return (
    <TotalStudyScoreBox>
      <div className="row-1">
        {/* <div className={style.user_grade}>{userGrade}</div> */}
        <div className="student-name">{studentName}</div>
        <div className="student-avatar">
          <div
            className="avatar-1"
            style={{ backgroundImage: `url('${userAvatar}')` }}></div>
          <div
            className="reading-unit"
            style={{ backgroundImage: `url('${userReadingUnit}')` }}></div>
          <div className="edit-button" onClick={onClick}></div>
        </div>
      </div>
      <div className="row-2">
        <div className="col-1st">
          <div className="label">{t('t058')}</div>
          <div className="contents">{t('t023', { num: totalPassed })}</div>
        </div>
        {/* <div className="col-2nd">
          <div className="label">{t('t060')}</div>
          <div className="contents">
            {NumberUtils.toRgDecimalPoint(totalEarnPoints)}P
          </div>
        </div> */}
      </div>
    </TotalStudyScoreBox>
  )
}

// My RG > 기타
function MyRgEtc({
  onClickSetStudyMode,
  onClickAccountInfo,
  onClickChatbot,
  onStartLevelTest,
}: {
  onClickSetStudyMode?: () => void
  onClickAccountInfo?: () => void
  onClickChatbot?: () => void
  onStartLevelTest?: () => void
}) {
  // @language 'common'
  const { t } = useTranslation()

  // 고개사별 PreK 사용여부 (DodoAbc만: 1, PreK만: 2, 둘다 사용: 3)
  const { studyOpen, isOnStudySetting } = useSiteBlueprint()

  const isDodoABC = studyOpen.DodoABC
  const isPreK = studyOpen.PreK
  const mp3Url = {
    dodo: 'https://util.readinggate.com/Library/DodoABCWorkSheetMP3Info',
    pk: 'https://wcfresource.a1edu.com/NewSystem/AppMobile/webview/randing/prek_workbook_mp3/',
  }
  const [viewPreKMp3Menu, setViewPreKMp3Menu] = useState(false)

  return (
    <MyRgEtcBox>
      <Link href={SITE_PATH.ACCOUNT.INFO} onClick={onClickAccountInfo}>
        <div className="etc-button">
          <div className="icon account-info"></div>
          <div>{t('t056')}</div>
        </div>
      </Link>
      {/* {isOnStudySetting && (
        <div className="etc-button" onClick={onClickSetStudyMode}>
          <div className="icon set-study"></div>
          <div>{t('t044')}</div>
        </div>
      )} */}
      {/* <div className={style.etc_item} onClick={onClickChatbot}>
        <Image
          alt=""
          src="/src/images/@my-rg-modal/chatbot.svg"
          width={50}
          height={50}
        />
        <div className={style.txt_l}>{t('t057')}</div>
      </div> */}

      {/* DODO ABC를 사용하고 있는 고객사의 경우 */}
      <div
        className="etc-button"
        onClick={() => {
          openWindow(mp3Url.dodo, {
            external: true,
            target: '_blank',
          })
        }}>
        <div className="icon mp3"></div>
        <div
          onClick={() => {
            // if (isDodoABC && isPreK) {
            //   setViewPreKMp3Menu(true)
            // } else if (isDodoABC) {
            //   openWindow(mp3Url.dodo, {
            //     external: true,
            //     target: '_blank',
            //   })
            // } else if (isPreK) {
            //   openWindow(mp3Url.pk, {
            //     external: true,
            //     target: '_blank',
            //   })
            // }
          }}>
          <div>Workbook</div>
        </div>
        {viewPreKMp3Menu && (
          <div>
            <div
              onClick={() => {
                setViewPreKMp3Menu(false)
              }}></div>
            <div
              onClick={() => {
                openWindow(mp3Url.dodo, {
                  external: true,
                  target: '_blank',
                  feature: 'noopener, noreferrer',
                })
              }}>
              DODO ABC Workbook MP3
            </div>
            <div
              onClick={() => {
                openWindow(mp3Url.pk, {
                  external: true,
                  target: '_blank',
                  feature: 'noopener, noreferrer',
                })
              }}>
              PreK Workbook MP3
            </div>
          </div>
        )}
      </div>
    </MyRgEtcBox>
  )
}
