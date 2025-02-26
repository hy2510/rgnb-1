import { VideoModalBox } from '@/app/_ui/StyledCommon'
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

const isDodoNfriends = true

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
        <SessionNameBox
          className={isDodoNfriends ? 'dodo-n-friends' : 'rgclass'}>
          수업 2회차
        </SessionNameBox>
        <GridBox>
          <CourseContents
            courseName="3. 신나는 영상과 동요로 만나는 알파벳 C"
            coursePassed={false}
            bookImage1="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-pk-303.jpg"
            bookBgImage1="https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-303.jpg"
            bookImage2="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-ka-102.jpg"
            bookBgImage2="https://wcfresource.a1edu.com/newsystem/neulbom/ebook/thurmnail-list/eb-ka-102.png"
            bookImage3="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-pk-722.jpg"
            bookBgImage3="https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-722.jpg"
            bookCode1="EB-PK-303"
            bookCode2="EB-KA-102"
            bookCode3="EB-PK-722"
            bookTitle1="Alphabet Cc"
            bookTitle2="I Want a Cake!"
            bookTitle3="Three Little Bunnies"
            bookPassed1={true}
            bookPassed2={false}
            bookPassed3={false}
          />
          <CourseContents
            courseName="4. 신나는 영상과 동요로 만나는 알파벳 D"
            coursePassed={false}
            bookImage1="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-pk-304.jpg"
            bookBgImage1="https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-304.jpg"
            bookImage2="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-ka-004.jpg"
            bookBgImage2="https://wcfresource.a1edu.com/newsystem/neulbom/ebook/thurmnail-list/eb-ka-004.png"
            bookImage3="https://wcfresource.a1edu.com/newsystem/image/br/covernew1/eb-pk-705.jpg"
            bookBgImage3="https://wcfresource.a1edu.com/newsystem/image/dodoabc/cover/eb-pk-705.jpg"
            bookCode1="EB-PK-304"
            bookCode2="EB-KA-004"
            bookCode3="EB-PK-705"
            bookTitle1="Alphabet Dd"
            bookTitle2="A Duck's Train"
            bookTitle3="Three Little Ducks"
            bookPassed1={false}
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
  bookImage1,
  bookImage2,
  bookImage3,
  bookBgImage1,
  bookBgImage2,
  bookBgImage3,
  bookPassed1,
  bookPassed2,
  bookPassed3,
  bookCode1,
  bookCode2,
  bookCode3,
  bookTitle1,
  bookTitle2,
  bookTitle3,
}: {
  courseName?: string
  coursePassed?: boolean
  bookImage1?: string
  bookImage2?: string
  bookImage3?: string
  bookBgImage1?: string
  bookBgImage2?: string
  bookBgImage3?: string
  bookPassed1?: boolean
  bookPassed2?: boolean
  bookPassed3?: boolean
  bookCode1?: string
  bookCode2?: string
  bookCode3?: string
  bookTitle1?: string
  bookTitle2?: string
  bookTitle3?: string
}) {
  return (
    <>
      <CheckCourseCompletion onCompletion={coursePassed} />
      <CourseContentsBox>
        <div className="title">{courseName}</div>
        <CourseItem
          onCompletion={bookPassed1}
          bookImage={bookImage1}
          bookBgImage={bookBgImage1}
          bookCode={bookCode1}
          bookTitle={bookTitle1}
          tag="Movie, Activity"
        />
        <CourseItem
          onCompletion={bookPassed2}
          bookImage={bookImage2}
          bookBgImage={bookBgImage2}
          bookCode={bookCode2}
          bookTitle={bookTitle2}
          tag="eBook"
        />
        <CourseItem
          onCompletion={bookPassed3}
          bookImage={bookImage3}
          bookBgImage={bookBgImage3}
          bookCode={bookCode3}
          bookTitle={bookTitle3}
          tag="Song"
        />
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

function CourseItem({
  onCompletion,
  bookImage,
  bookBgImage,
  bookCode,
  bookTitle,
  tag,
}: {
  onCompletion?: boolean
  bookImage?: string
  bookBgImage?: string
  bookCode?: string
  bookTitle?: string
  tag?: string
}) {
  return (
    <CourseItemBox className={onCompletion ? 'check' : ''}>
      <div className={`check ${onCompletion ? 'on' : 'off'}`}></div>
      <div className="book-image">
        <Image
          src={bookImage ? bookImage : ''}
          width={120}
          height={160}
          alt=""
        />
      </div>
      <div className="book-name">
        <div className="book-code">{bookCode}</div>
        <div className="book-title">{bookTitle}</div>
      </div>
      <div
        className={`book-bg ${onCompletion ? 'completed' : null}`}
        style={{ backgroundImage: `url(${bookBgImage})` }}></div>
      <div className="tag">{tag}</div>
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
