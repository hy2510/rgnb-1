'use client'

import { useApplicationType } from '@/app/_context/AppContext'
import {
  useCustomerInfo,
  useSiteBlueprint,
} from '@/app/_context/CustomerContext'
import { useDevicePlatform } from '@/app/_context/DeviceContext'
import { GFooterBox } from '@/app/_ui/StyledHeader'
import SITE_PATH from '@/app/site-path'
import useTranslation from '@/localization/client/useTranslations'
import Link from 'next/link'
import { useStudentIsLogin } from '@/client/store/student/info/selector'
import { useScreenMode } from '@/ui/context/StyleContext'

const RG_CUSTOMER_CENTER_TEL = '1599-0533'
const RG_FAX_TEL = '070-8266-8660'
const RG_CUSTOMER_EMAIL = 'rgmanager@readinggate.com'

// 공통하단
export default function GFooter() {
  const isMobile = useScreenMode() === 'mobile'

  const { target } = useSiteBlueprint()
  const appType = useApplicationType()
  const logOnStatus = useStudentIsLogin()

  if (appType === 'app' && !logOnStatus) {
    return <></>
  }
  return (
    <>
      <GFooterBox>
        <div>경기도 성남시 수정구 창업로 43, A동 807~810호(글로벌비즈센터)</div>
        <div>
          대표이사 김용환 ㅣ 사업자 등록 번호 ㅣ 통신판매번호:
          2013-경기성남-0836호 성남교육지원청 등록 제4868호
        </div>
        <div>
          대표번호 : 1599-0533 ㅣ FAX : 070-8266-8660 ㅣ Mail :
          rgmanager@readinggate.com
        </div>
      </GFooterBox>
    </>
  )
}

function Footer() {
  // @Language 'common'
  const { t } = useTranslation()

  const platform = useDevicePlatform()
  const isLogin = useStudentIsLogin()
  const customer = useCustomerInfo()
  const address = `${customer.address} ${customer.detailAddress}`
  const subInfos: { text: string; href?: string; label?: string }[] = [
    { text: t('t551') },
    { text: t('t552') },
    { text: t('t553') },
    {
      text: `${t('t554')} : `,
      href: `tel:${RG_CUSTOMER_CENTER_TEL}`,
      label: RG_CUSTOMER_CENTER_TEL,
    },
    { text: `FAX : ${RG_FAX_TEL}` },
    {
      text: 'Mail : ',
      href: `mailto:${RG_CUSTOMER_EMAIL}`,
      label: RG_CUSTOMER_EMAIL,
    },
  ]

  return (
    <>
      <hr />
      <div>
        <a href={SITE_PATH.HOME.MAIN}>
          <span>{t('t028')}</span>
        </a>
        <Link href={SITE_PATH.ABOUT.MAIN}>{t('t029')}</Link>
      </div>
      <div>
        <div style={{ marginBottom: '10px' }}>{address}</div>
        <div>
          {subInfos.map((item, i) => {
            const isLastItem = subInfos.length - 1 === i
            return (
              <span key={`i_${i}`}>
                {`${item.text}`}
                {item.href ? <Link href={item.href}>{item.label}</Link> : <></>}
                {!isLastItem && ` ㅣ `}
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}
