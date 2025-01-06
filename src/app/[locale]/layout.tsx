import AppLoader from '@/app/_app/AppLoader'
import LanguagePackContextProvider from '@/localization/client/LanguagePackContext'
import { getLanguageResources } from '@/localization/server/i18next-server'
import { Viewport } from 'next'
import PreloadScript from '../_app/PreloadScript'

export const metadata = {
  'apple-mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-status-bar-style': 'white-translucent',
}
export const viewport: Viewport = {
  userScalable: false,
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
}

function generateStaticParams() {
  return [{ locale: 'ko' }, { locale: 'en' }, { locale: 'vi' }]
}

export default async function LanguageLayout(props: {
  params: Promise<{
    locale: string
  }>
  children?: React.ReactNode
}) {
  const params = await props.params

  const { children } = props

  const locale = params.locale
  const resCommon = await getLanguageResources(locale)

  return (
    <html lang={locale}>
      <link rel="manifest" href="/manifest.json" />
      <body>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          rel="stylesheet"
        />
        <LanguagePackContextProvider
          language={locale}
          namespace="common"
          res={JSON.stringify(resCommon)}>
          <AppLoader>{children}</AppLoader>
        </LanguagePackContextProvider>
        <PreloadScript />
        {/* <SiteMapLinkMenu /> */}
      </body>
    </html>
  )
}
