import { GapBox } from '@/app/_ui/StyledCommon'
import { CourseItemBox, CourseItemsBox } from '@/app/_ui/StyledCourse'
import Image from 'next/image'
import CourseItemData from './CourseItems.json'

export default function CourseItems() {
  return (
    <CourseItemsBox>
      {CourseItemData.map((a: any, i: number) => {
        return <CourseItem name={a.title} passed={a.passed} data={a.books} />
      })}
      <GapBox $px={40} />
    </CourseItemsBox>
  )
}

function CourseItem({
  name,
  passed,
  data,
}: {
  name: string
  passed: boolean
  data: any
}) {
  return (
    <CourseItemBox className={`${passed ? 'active' : null}`}>
      <div className="col-1st">
        <div className={`check-course ${passed ? 'active' : null}`}></div>
      </div>
      <div className="col-2nd">
        <div className="row-1">{name}</div>
        <div className="row-2">
          {data.map((a: any, i: number) => {
            return (
              <div className="tr" key={i}>
                <div
                  className={`check-book ${a.passed ? 'active' : null}`}></div>
                <div
                  className={`tag ${a.tag === 'movie' ? 'movie-icon' : a.tag === 'ebook' ? 'ebook-icon' : a.tag === 'song' ? 'song-icon' : null}`}></div>
                <div className="title">{a.title}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="col-3rd">
        {data.map((a: any, i: number) => {
          return (
            <div className="book-image" key={i}>
              <div className="to-do-icon"></div>
              <Image
                src={a.image}
                width={110}
                height={110}
                className={`${a.passed ? 'active' : null}`}
                alt=""
              />
            </div>
          )
        })}
      </div>
    </CourseItemBox>
  )
}
