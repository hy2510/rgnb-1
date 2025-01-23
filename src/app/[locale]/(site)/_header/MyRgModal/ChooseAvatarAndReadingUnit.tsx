'use client'

import {
  AvatarItemBox,
  BasicButtonBox,
  ChooseAvatarAndReadingUnitBox,
} from '@/app/_ui/StyledCommon'
import useTranslation from '@/localization/client/useTranslations'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useStudentAvatar } from '@/client/store/student/avatar/selector'
import { useFetchSetStudentAvatarAndReadingUnit } from '@/client/store/student/info/hook'
import { useStudentReadingUnit } from '@/client/store/student/reading-unit/selector'

const STYLE_ID = 'global_option_my_rg'

// 아바타 (리딩유닛) 수정
export function ChooseAvatarAndReadingUnit({
  defaultAvatar,
  defaultReadingUnit,
  onChangeAvatarAndReadingUnit,
}: {
  defaultAvatar: string
  defaultReadingUnit: string
  onChangeAvatarAndReadingUnit?: (
    avatarId: string,
    readingUnitId: string,
  ) => void
}) {
  // @language 'common'
  const { t } = useTranslation()

  const { userAvatar, avatarList } = useStudentAvatar()
  const [selectedAvatar, setSelectedAvatar] = useState(defaultAvatar)

  const { earnReadingUnit } = useStudentReadingUnit()
  const [selectedReadingUnit, setSelectedReadingUnit] =
    useState(defaultReadingUnit)

  const { fetch: changeFetch, loading: changeLoading } =
    useFetchSetStudentAvatarAndReadingUnit()

  const onChangeOption = () => {
    if (!changeLoading) {
      changeFetch({
        avatarId: selectedAvatar,
        readingUnitId: selectedReadingUnit,
        callback: (isSuccess) => {
          if (isSuccess) {
            onChangeAvatarAndReadingUnit &&
              onChangeAvatarAndReadingUnit(selectedAvatar, selectedReadingUnit)
          }
        },
      })
    }
  }

  const router = useRouter()

  return (
    <ChooseAvatarAndReadingUnitBox>
      {/* 학습 캐릭터 */}
      <div className="sub-title">Reading Unit</div>
      {/* 학습 캐릭터는 '퀘스트'에서 새로운 친구의 스토리를 잠금 해제할 때마다 자동으로 추가 됩니다. */}
      {/* <div>{t('t549')}</div> */}
      <select
        onChange={(e) => {
          setSelectedReadingUnit(e.target.value)
        }}
        value={selectedReadingUnit}>
        {earnReadingUnit.map((unit) => {
          return (
            <option key={unit.readingUnitId} value={unit.readingUnitId}>
              {unit.name}
            </option>
          )
        })}
      </select>

      <div className="sub-title">My Avatar</div>
      <div className="avatar-table">
        {avatarList.map((avatar) => {
          return (
            <div key={`choose_${avatar.avatarId}`}>
              <AvatarItem
                avtImgSrc={avatar.imageLarge}
                avtName={avatar.name}
                selected={selectedAvatar === avatar.avatarId}
                onClickAvatar={() => setSelectedAvatar(avatar.avatarId)}
              />
            </div>
          )
        })}
      </div>
      <BasicButtonBox
        $color="red"
        onClick={() => {
          onChangeOption()
          router.refresh()
          alert('나의 리딩유닛과 아바타가 변경되었습니다.')
        }}>
        {t('t083')}
      </BasicButtonBox>
    </ChooseAvatarAndReadingUnitBox>
  )
}

// 아바타 수정 > 아바타 아이템
function AvatarItem({
  selected,
  check,
  avtImgSrc,
  avtName,
  onClickAvatar,
}: {
  selected: boolean
  check?: boolean
  avtImgSrc: string
  avtName: string
  onClickAvatar?: () => void
}) {
  return (
    <AvatarItemBox
      className={`${selected ? 'selected' : null}`}
      onClick={() => {
        onClickAvatar && onClickAvatar()
      }}>
      <div className="avatar-image-container">
        <div
          className="avatar-image"
          style={{ backgroundImage: `url(${avtImgSrc})` }}></div>
      </div>
      <div className="avatar-name">{avtName}</div>
    </AvatarItemBox>
  )
}
