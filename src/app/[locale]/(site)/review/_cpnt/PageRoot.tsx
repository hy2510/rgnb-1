'use client'

import { GapBox, PageBodyBox, PageContainerBox } from '@/app/_ui/StyledCommon'
import Reports from './Reports'
import SearchBoard from './SearchBoard'

export default function PageRoot() {
  return (
    <PageBodyBox>
      <PageContainerBox $compact>
        <SearchBoard />
        <Reports />
      </PageContainerBox>
      <GapBox $px={40} />
    </PageBodyBox>
  )
}
