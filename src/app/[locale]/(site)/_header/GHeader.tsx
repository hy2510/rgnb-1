'use client'

import { GapBox } from '@/app/_ui/StyledCommon'
import {
  ContainerBox,
  CoursewareHeaderBox,
  NavItemBox,
  NavsBox,
} from '@/app/_ui/StyledHeader'
import SITE_PATH from '@/app/site-path'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'
import { use, useEffect, useState } from 'react'
import { useStudentAvatar } from '@/client/store/student/avatar/selector'
import { useStudentInfoFlagLogin } from '@/client/store/student/info/selector'
import { MyRgModal } from './MyRgModal'

// 공통상단
export default function GHeader() {
  const loginStatus = useStudentInfoFlagLogin()

  const [isShowMyRg, setShowMyRg] = useState(false)

  const pathname = usePathname()

  const { userAvatar } = useStudentAvatar()

  return (
    <>
      <CoursewareHeaderBox>
        <ContainerBox>
          <NavsBox>
            <Link href={SITE_PATH.HOME.MAIN}>
              <div className="logo"></div>
            </Link>
            {loginStatus === 'off' && (
              <Link href={SITE_PATH.ACCOUNT.SIGN_IN}>Login</Link>
            )}
            {loginStatus === 'on' && (
              <>
                <div className="menu">
                  <Link href={SITE_PATH.LESSON.MAIN}>
                    <NavItemBox
                      $active={pathname.indexOf(SITE_PATH.LESSON.MAIN) != -1}>
                      <div className="icon lesson"></div>
                      <div className="text">오늘의 수업</div>
                    </NavItemBox>
                  </Link>
                  <Link href={SITE_PATH.COURSE.MAIN}>
                    <NavItemBox
                      $active={pathname.indexOf(SITE_PATH.COURSE.MAIN) != -1}>
                      <div className="icon course"></div>
                      <div className="text">모든 코스</div>
                    </NavItemBox>
                  </Link>
                  <Link href={SITE_PATH.REVIEW.MAIN}>
                    <NavItemBox
                      $active={pathname.indexOf(SITE_PATH.REVIEW.MAIN) != -1}>
                      <div className="icon review"></div>
                      <div className="text">다시 보기</div>
                    </NavItemBox>
                  </Link>
                </div>
                <div
                  className="avatar"
                  onClick={() => {
                    setShowMyRg(true)
                  }}>
                  <Image
                    src={userAvatar.imageSmall}
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                {/* <Link href="/signoff">Logout</Link> */}
                {isShowMyRg && (
                  <MyRgModal onCloseModal={() => setShowMyRg(false)} />
                )}
              </>
            )}
          </NavsBox>
        </ContainerBox>
      </CoursewareHeaderBox>
      <GapBox $px={80} />
    </>
  )
}
