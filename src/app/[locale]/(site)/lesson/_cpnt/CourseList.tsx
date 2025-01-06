import {
  CheckCourseCompletionBox,
  CourseContentsBox,
  CourseItemBox,
  CourseListBox,
  EmptyMessageBox,
  GridBox,
  SessionNameBox,
} from '@/app/_ui/StyledLesson'
import Image from 'next/image'

export default function CourseList() {
  return (
    <CourseListBox>
      {/* Empty - 관리자의 수업 세팅이 1개도 없을 때 */}
      {/* <EmptyMessage /> */}

      {/* Empty - 활성화된 날짜에 코스가 없을 때 */}
      {/* <EmptyMessage status={1} /> */}

      {/* Empty - 마지막 수업 이후 */}
      {/* <EmptyMessage status={2} /> */}

      {/* 코스가 있는 경우 */}
      <>
        <SessionNameBox>수업 2회차</SessionNameBox>
        <GridBox>
          <CourseContents
            courseName="1. 신나는 영상과 동요로 만나는 알파벳 A"
            coursePassed={true}
            bookPassed1={true}
            bookPassed2={true}
            bookPassed3={true}
          />
          <CourseContents
            courseName="2. 신나는 영상과 동요로 만나는 알파벳 B"
            coursePassed={false}
            bookPassed1={true}
            bookPassed2={false}
            bookPassed3={false}
          />
          <CourseContents
            courseName="3. 신나는 영상과 동요로 만나는 알파벳 B"
            coursePassed={false}
            bookPassed1={true}
            bookPassed2={false}
            bookPassed3={false}
          />
        </GridBox>
      </>
    </CourseListBox>
  )
}

function CourseContents({
  courseName,
  coursePassed,
  bookPassed1,
  bookPassed2,
  bookPassed3,
}: {
  courseName?: string
  coursePassed?: boolean
  bookPassed1?: boolean
  bookPassed2?: boolean
  bookPassed3?: boolean
}) {
  return (
    <>
      <CheckCourseCompletion onCompletion={coursePassed} />
      <CourseContentsBox>
        <div className="title">{courseName}</div>
        <CourseItem onCompletion={bookPassed1} />
        <CourseItem onCompletion={bookPassed2} />
        <CourseItem onCompletion={bookPassed3} />
      </CourseContentsBox>
    </>
  )
}

function CheckCourseCompletion({ onCompletion }: { onCompletion?: boolean }) {
  return (
    <CheckCourseCompletionBox className={`${onCompletion ? 'checkd' : null}`}>
      <div className={`checked ${onCompletion ? 'on' : 'off'}`}></div>
    </CheckCourseCompletionBox>
  )
}

function CourseItem({ onCompletion }: { onCompletion?: boolean }) {
  const bookImage =
    'https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-pk-301.jpg'
  const bookBgImage =
    'https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-301.jpg'

  return (
    <CourseItemBox className={onCompletion ? 'check' : ''}>
      <div className={`check ${onCompletion ? 'on' : 'off'}`}></div>
      <div className="book-image">
        <Image src={bookImage} width={120} height={160} alt="" />
      </div>
      <div className="book-name">
        <div className="book-code">EB-KA-001</div>
        <div className="book-title">Alphabet Aa</div>
      </div>
      <div
        className={`book-bg ${onCompletion ? 'completed' : null}`}
        style={{ backgroundImage: `url(${bookBgImage})` }}></div>
      <div className="tag">Movie</div>
    </CourseItemBox>
  )
}

function EmptyMessage({ status }: { status?: number }) {
  return (
    <EmptyMessageBox>
      <div
        className={`empty-image ${status == 1 ? 'close-lesson' : status == 2 ? 'after-final-lesson' : 'no-setting'}`}></div>
      <div className="empty-message">
        {status == 1 ? (
          <>
            <div className="text-1">오늘은 수업이 없어요.</div>
            <div className="text-2">
              학습을 하려면 다른 날짜를 선택하거나 모든 코스 메뉴를 이용해
              보세요.
            </div>
          </>
        ) : status == 2 ? (
          <div className="text-1">마지막 수업 입니다.</div>
        ) : (
          <div className="text-1">아직 수업이 준비되지 않았습니다.</div>
        )}
      </div>
    </EmptyMessageBox>
  )
}
