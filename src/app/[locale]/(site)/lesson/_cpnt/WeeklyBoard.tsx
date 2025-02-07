import { DaySessionBox, WeeklyBoardBox } from '@/app/_ui/StyledLesson'
import { useEffect, useState } from 'react'

export default function WeeklyBoard() {
  const month = '2024.11'
  const daySession = [
    {
      day: 'SUN',
      date: 15,
      completed: 0,
      session: '',
      sessionPassed: false,
      done: false,
      today: false,
    },
    {
      day: 'MON',
      date: 16,
      completed: 2,
      session: '1',
      sessionPassed: true,
      done: true,
      today: false,
    },
    {
      day: 'TUE',
      date: 17,
      completed: 0,
      session: '',
      sessionPassed: false,
      done: false,
      today: false,
    },
    {
      day: 'WED',
      date: 18,
      completed: 0,
      session: '2',
      sessionPassed: true,
      done: true,
      today: true,
    },
    {
      day: 'THU',
      date: 19,
      completed: 0,
      session: '',
      sessionPassed: false,
      done: false,
      today: false,
    },
    {
      day: 'FRI',
      date: 20,
      completed: 0,
      session: '3',
      sessionPassed: false,
      done: false,
      today: false,
    },
    {
      day: 'SAT',
      date: 21,
      completed: 0,
      session: '',
      sessionPassed: false,
      done: false,
      today: false,
    },
  ]

  const [currentSession, setCurrentSession] = useState(18)

  return (
    <WeeklyBoardBox>
      <div className="header">
        <span>{month}</span>
      </div>
      <div className="board">
        <div className="btn left"></div>
        <div className="items">
          {daySession.map((a, i) => {
            return (
              <DaySession
                key={i}
                day={a.day}
                date={a.date}
                completed={a.completed}
                session={a.session}
                sessionPassed={a.sessionPassed}
                done={a.done}
                today={a.today}
                current={currentSession}
                onClick={() => {
                  a.done && setCurrentSession(a.date)
                }}
              />
            )
          })}
        </div>
        <div className="btn right"></div>
      </div>
    </WeeklyBoardBox>
  )
}

function DaySession({
  day,
  date,
  completed,
  session,
  sessionPassed,
  done,
  today,
  current,
  onClick,
}: {
  day: string
  date: number
  completed?: number
  session?: string
  sessionPassed?: boolean
  done?: boolean
  today?: boolean
  current?: number
  onClick?: any
}) {
  const [completedNum, setCompletedNum] = useState(0)

  useEffect(() => {
    completed && setCompletedNum(completed)
  }, [completed])

  const [isCurrent, setIsCurrent] = useState(false)

  useEffect(() => {
    if (current === date) {
      setIsCurrent(true)
    } else {
      setIsCurrent(false)
    }
  })

  return (
    <DaySessionBox
      $active={done}
      $today={today}
      $current={isCurrent}
      onClick={onClick}>
      <div className="row1">{day}</div>
      <div className="row2">{date}</div>
      <div className="row3">
        {session && completedNum + ' / 2'}
        {/* {completed != 0 ? (
          Array.from({ length: completedNum }, (_, i: number) => (
            <div key={i} className="check"></div>
          ))
        ) : (
          <></>
        )} */}
      </div>
      {session ? (
        <div className="row4 active">{session + '회차'}</div>
      ) : (
        <div className="row4"></div>
      )}
      {sessionPassed && <div className="good-job"></div>}
    </DaySessionBox>
  )
}
