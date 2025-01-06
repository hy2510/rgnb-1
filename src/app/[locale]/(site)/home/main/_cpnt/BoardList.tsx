'use client'

import Link from 'next/link'

export default function BoardList({
  list,
  page,
  maxPage,
  grid,
  onPageClick,
}: {
  list: { title: string; date: string; link: string; image?: string }[]
  page: number
  maxPage: number
  grid?: boolean
  onPageClick?: (page: number) => void
}) {
  return (
    <div>
      <div>
        {list.map((a) => {
          return (
            <div key={`notice-${a.link}`}>
              <Link href={a.link}>
                <span>{`${a.title}|${a.date}`}</span>
                {a.image && <img src={a.image} />}
              </Link>
            </div>
          )
        })}
      </div>
      <div>
        <button
          onClick={() => {
            if (page - 1 >= 0) {
              if (onPageClick) {
                onPageClick(page - 1)
              }
            }
          }}>
          Previous
        </button>
        <span>{page}</span>/<span>{maxPage}</span>
        <button
          onClick={() => {
            if (page + 1 <= maxPage) {
              if (onPageClick) {
                onPageClick(page + 1)
              }
            }
          }}>
          Next
        </button>
      </div>
    </div>
  )
}
