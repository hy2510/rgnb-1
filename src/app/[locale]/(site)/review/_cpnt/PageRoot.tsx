'use client'

import { GapBox, PageBodyBox, PageContainerBox } from '@/app/_ui/StyledCommon'
import Reports from './Reports'
import SearchBoard from './SearchBoard'

const isDodoNfriends = true

export default function PageRoot() {
  return (
    <PageBodyBox className={isDodoNfriends ? 'dodo-n-friends' : 'rgclass'}>
      <PageContainerBox $compact>
        <SearchBoard />
        <Reports />
      </PageContainerBox>
      <GapBox $px={40} />
    </PageBodyBox>
  )
}
