'use client'

import { PageBodyBox, PageContainerBox } from '@/app/_ui/StyledCommon'
import CourseItems from './CourseItems'
import Filter from './Filter'
import NavBar from './NavBar'

const isDodoNfriends = true

export default function PageRoot() {
  return (
    <PageBodyBox className={isDodoNfriends ? 'dodo-n-friends' : 'rgclass'}>
      <PageContainerBox $compact>
        <NavBar />
        <Filter />
        <CourseItems />
      </PageContainerBox>
    </PageBodyBox>
  )
}
