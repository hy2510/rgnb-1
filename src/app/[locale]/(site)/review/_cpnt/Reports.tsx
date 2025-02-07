import { GapBox, PillItemBox, PillsBox } from '@/app/_ui/StyledCommon'
import {
  EmptyMessageBox,
  ReportItemBox,
  ReportItemsBox,
  ReportMoreBox,
  ReportsBox,
} from '@/app/_ui/StyledReview'
import Image from 'next/image'
import reporItemtData from './Reports.json'

export default function Reports() {
  return (
    <ReportsBox>
      <PillsBox>
        <PillItemBox $active={true}>All 8권</PillItemBox>
        <PillItemBox $active={false}>Passed 7권</PillItemBox>
        <PillItemBox $active={false}>Failed 1권</PillItemBox>
      </PillsBox>
      <GapBox $px={20} />
      {/* 리포트가 없는 경우 */}
      {/* <EmptyMessage /> */}

      {/* 리포트 리스트 */}
      <ReportItemsBox>
        {reporItemtData.map((a, i) => {
          return (
            <ReportItem
              key={i}
              bookCode={a.bookCode}
              title={a.title}
              imgSrc={a.imgSrc}
              date={a.date}
              totalScore={a.totalScore}
              passed={a.passed}
              passCount={a.passCount}
            />
          )
        })}
      </ReportItemsBox>
      <GapBox $px={30} />
      <ReportMoreBox>More</ReportMoreBox>
    </ReportsBox>
  )
}

function ReportItem({
  bookCode,
  title,
  imgSrc,
  date,
  totalScore,
  passed,
  passCount,
}: {
  bookCode: string
  title: string
  imgSrc: string
  date: string
  totalScore: number
  passed: boolean
  passCount?: number
}) {
  return (
    <ReportItemBox className={`${passed ? 'passed' : 'failed'}`}>
      <div className="row-1 ">
        <Image
          src={imgSrc}
          width={150}
          height={210}
          alt=""
          className={`book-image ${passed ? 'passed' : 'failed'}`}
        />
      </div>
      <div className={`row-2 ${passed ? 'passed' : 'failed'}`}>
        <div className="book-code">{bookCode}</div>
        <div className="book-title">{title}</div>
        <div className="result-table">
          <div>학습일</div>
          <div>{date}</div>
          <div>총점</div>
          <div>{totalScore}</div>
          <div>학습결과</div>
          <div>
            {passed
              ? 'PASS' +
                ' / ' +
                (passCount == 1 ? '1st' : passCount == 2 ? '2nd' : '3rd')
              : 'FAIL'}
          </div>
        </div>
      </div>
    </ReportItemBox>
  )
}

function EmptyMessage() {
  return (
    <EmptyMessageBox>
      <div className="empty-image"></div>
      <div className="empty-message">
        기간내 학습 기록을 찾아봤지만 표시할 내용이 없어요.
      </div>
    </EmptyMessageBox>
  )
}
