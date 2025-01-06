'use client'

import { useRouter } from 'next/navigation'

export default function BoardDetail({
  backLabel,
  backLink,
  title,
  date,
  htmlContents,
  image,
  backColorWhite = true,
}: {
  backLabel: string
  backLink?: string
  title: string
  date: string
  htmlContents: string
  image?: string
  backColorWhite?: boolean
}) {
  const router = useRouter()

  return (
    <main>
      <div
        onClick={() => {
          if (backLink) {
            router.push(backLink)
          } else {
            router.back()
          }
        }}>{`BackLink: ${backLabel}`}</div>

      <div>
        <div>
          <div>{title}</div>
          <div>{date}</div>
        </div>
        <div>
          {image && (
            <div>
              <img src={image} style={{ width: '100%' }} />
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: htmlContents }} />
        </div>
      </div>
    </main>
  )
}
