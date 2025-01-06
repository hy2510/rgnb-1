'use client'

import { GapBox, PageBodyBox, PageContainerBox } from '@/app/_ui/StyledCommon'
import CourseList from './CourseList'
import WeeklyBoard from './WeeklyBoard'

export default function PageRoot() {
  return (
    <PageBodyBox>
      <PageContainerBox $compact>
        <GapBox $px={68} />
        <WeeklyBoard />
        <CourseList />
      </PageContainerBox>
    </PageBodyBox>
  )
}
