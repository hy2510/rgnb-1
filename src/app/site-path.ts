import { supportLanguages } from '@/localization/localize-config'

const ACCOUNT = {
  SIGN_IN: '/account/signin',
  INFO: '/account/account-info',
  FORGOT_PASSWORD: '/account/forgot-password',
  CHANGE_PASSWORD: '/account/change-password',
}
const ABOUT = {
  MAIN: '/about',
}
const HOME = {
  MAIN: '/main',
}
const LESSON = {
  MAIN: '/lesson',
}
const COURSE = {
  MAIN: '/course',
}
const REVIEW = {
  MAIN: '/review',
  SPEAK: '/review/speak',
  WRITE: '/review/write',
  QUICK: '/review/quick-view',
  DETAIL: '/review/detailed-view',
}
export const STAFF_PATH = {
  MAIN: '/staff',
  MIRAGE: '/mirage',
  BOARD: '/staff/board',
  GALLERY: '/staff/gallery',
}

const PARAMS_PATH: string[] = []

export function isValidatePath(path: string): boolean {
  let isStartWithLocale = false
  for (let i = 0; i < supportLanguages.length; i++) {
    if (path.startsWith(`/${supportLanguages[i]}`)) {
      isStartWithLocale = true
    }
  }

  const searchPath = (
    isStartWithLocale
      ? path.indexOf('/', 1) >= 0
        ? path.substring(path.indexOf('/', 1))
        : ''
      : path
  ).split('?')[0]
  if (searchPath === '') {
    return true
  }
  let isContainPath = false
  const entries = Object.entries(SITE_PATH)
  for (let i = 0; i < entries.length; i++) {
    const item = entries[i]
    const itemValue = item[1]
    const type = typeof itemValue
    if (type === 'object') {
      const paths = Object.values(itemValue)
      for (let j = 0; j < paths.length; j++) {
        const p = paths[j]
        isContainPath = p === searchPath
        if (isContainPath) {
          break
        }
      }
    }
    if (isContainPath) {
      break
    }
  }
  if (!isContainPath) {
    const paramPattern = /^\[[a-zA-Z0-9-_]+\]$/
    let patternMatch = false
    for (let i = 0; i < PARAMS_PATH.length; i++) {
      const pathDiv = searchPath.split('/')
      const paramPathDiv = PARAMS_PATH[i].split('/')
      patternMatch =
        pathDiv.length > 0 && pathDiv.length === paramPathDiv.length

      if (patternMatch) {
        for (let j = 0; j < pathDiv.length; j++) {
          const p1 = pathDiv[j]
          const p2 = paramPathDiv[j]
          if (paramPattern.test(p2)) {
            continue
          }
          patternMatch = p1 === p2
          if (!patternMatch) {
            break
          }
        }
        if (patternMatch) {
          break
        }
      }
    }
    isContainPath = patternMatch
  }
  return isContainPath
}

export function getValidatePath(path: string): string {
  const isContainPath = isValidatePath(path)
  if (!isContainPath) {
    return HOME.MAIN
  }
  return path
}

export const CUSTOMER_CENTER_URL = {
  private:
    'https://ossified-smell-f52.notion.site/RG-a8fc674ab32f458ca70d659e1916e34c',
  school:
    'https://ossified-smell-f52.notion.site/bcdb1eaf03a34c34a4a0567eec292601',
  academy:
    'https://ossified-smell-f52.notion.site/44d6a2eb4c1c4199bc5745077033b1ea',
  vietnam:
    'https://concrete-meteor-3e2.notion.site/RGVN-CSKH-1204e876aa85808a9d7ccd04783ec488',
}

export const EXTERNAL_URL = {
  kakaoChannel: 'https://pf.kakao.com/_iUbiM',
  academyPromotion: 'https://guest2.readinggate.com/ko/home/academy-promotion',
  googlePlay:
    'https://play.google.com/store/apps/details?id=com.a1edu.readinggate',
  appleAppStore: 'https://apps.apple.com/kr/app/id1207688674',
}

const SITE_PATH = {
  ACCOUNT,
  ABOUT,
  HOME,
  LESSON,
  COURSE,
  REVIEW,
}
export default SITE_PATH
