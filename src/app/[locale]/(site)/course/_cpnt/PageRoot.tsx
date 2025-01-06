'use client'

import { PageBodyBox, PageContainerBox } from '@/app/_ui/StyledCommon'
import CourseItems from './CourseItems'
import Filter from './Filter'
import NavBar from './NavBar'

export default function PageRoot() {
  return (
    <PageBodyBox>
      <PageContainerBox $compact>
        <NavBar />
        <Filter />
        <CourseItems />
      </PageContainerBox>
    </PageBodyBox>
  )
}
