'use client'

import { GapBox, PageBodyBox, PageContainerBox } from '@/app/_ui/StyledCommon'
import CourseList from './CourseList'
import VideoModal from './VideoModal'
import WeeklyBoard from './WeeklyBoard'

const isDodoNfriends = true

export default function PageRoot() {
  return (
    <PageBodyBox className={isDodoNfriends ? 'dodo-n-friends' : 'rgclass'}>
      <PageContainerBox $compact>
        <GapBox $px={68} />
        <WeeklyBoard />
        <CourseList />
        {/* <VideoModal /> */}
      </PageContainerBox>
    </PageBodyBox>
  )
}
