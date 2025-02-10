'use client'

import styled from 'styled-components'

export const WeeklyBoardBox = styled.div`
  width: 100%;
  margin: auto;
  padding: 0 20px;
  position: relative;
  top: 0;
  z-index: 2;
  .header {
    position: absolute;
    top: -70px;
    left: calc(50% - 240px);
    width: 480px;
    height: 120px;
    background: url('/src/images/lesson/weekly-board/bg-board-header.svg')
      center / contain no-repeat;
    display: flex;
    align-items: end;
    justify-content: center;
    span {
      color: #ffc37c;
      text-align: center;
      text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
      font-family: 'SDGdGulim', sans-serif;
      font-size: 2em;
      font-weight: 800;
      margin-bottom: 27px;
    }
  }
  .board {
    height: 192px;
    background: url('/src/images/lesson/weekly-board/bg-board-body.svg')
      center / contain no-repeat;
    .btn {
      cursor: pointer;
      width: 50px;
      height: 50px;
      background: center / contain no-repeat;
      transition: transform 0.2s;
      position: absolute;
      bottom: calc(50% - 25px);
      z-index: 1;
      &:active {
        transform: scale(0.95);
      }
      &.left {
        background-image: url('/src/images/lesson/weekly-board/bg-board-btn-left.svg');
        left: 0;
      }
      &.right {
        background-image: url('/src/images/lesson/weekly-board/bg-board-btn-right.svg');
        right: 0;
      }
    }
    .items {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 20px;
      align-items: center;
      justify-items: center;
      padding: 60px 50px;
      padding-bottom: 30px;
    }
  }
`

export const DaySessionBox = styled.div<{
  $active?: boolean
  $today?: boolean
  $current?: boolean
}>`
  cursor: ${(props) => (props.$active ? 'pointer' : 'default')};
  width: 100%;
  min-height: 115px;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: center;
  background-color: ${(props) =>
    props.$active
      ? props.$today
        ? 'transparent'
        : props.$current
          ? '#0ECC70'
          : 'rgba(115, 45, 0, 0.30)'
      : 'none'};
  background-image: ${(props) =>
    props.$today
      ? props.$current
        ? `url('/src/images/lesson/weekly-board/bg-today-on.svg')`
        : `url('/src/images/lesson/weekly-board/bg-today-off.svg')`
      : 'none'};
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  box-shadow: ${(props) =>
    props.$active
      ? props.$today
        ? '0px 2px 2px 0px rgba(0, 0, 0, 0.2)'
        : '0px 2px 2px 0px rgba(0, 0, 0, 0.5) inset'
      : 'none'};
  position: relative;
  &::after {
    content: '';
    width: 30px;
    height: 30px;
    position: absolute;
    top: -8px;
    left: -10px;
    background: center / 30px no-repeat;
    background-image: ${(props) =>
      props.$today
        ? `url("/src/images/lesson/weekly-board/img-flower.svg")`
        : 'none'};
  }
  .row1 {
    color: ${(props) => (props.$current ? '#fff' : '#ffc37c')};
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
    font-family: 'SDGdGulim', sans-serif;
    font-size: 0.8em;
    margin-bottom: 5px;
  }
  .row2 {
    color: ${(props) => (props.$current ? '#fff' : '#ffc37c')};
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
    font-family: 'SDGdGulim', sans-serif;
    font-size: 1.6em;
    font-weight: 700;
  }
  .row3 {
    display: flex;
    justify-content: center;
    gap: 2px;
    font-size: 0.8em;
    font-weight: 600;
    letter-spacing: -1px;
    color: ${(props) => (props.$current ? '#fff' : '#ffc37c')};
    margin-bottom: 5px;
    .check {
      width: 12px;
      background: ${(props) =>
          props.$current
            ? `url("/src/images/lesson/weekly-board/ico-check-white.svg")`
            : `url("/src/images/lesson/weekly-board/ico-check.svg")`}
        center / 12px no-repeat;
    }
  }
  .row4 {
    width: fit-content;
    height: 20px;
    margin: auto;
    &.active {
      display: flex;
      padding: 2px 12px;
      justify-content: center;
      align-items: center;
      border-radius: 999px;
      background: ${(props) => (props.$current ? '#fff' : '#ffc37c')};
      color: ${(props) => (props.$current ? '#0ECC70' : '#732d00')};
      font-size: 10px;
      font-weight: 700;
    }
  }
  .good-job {
    width: 36px;
    height: 36px;
    background: url('/src/images/lesson/weekly-board/img-good-job.svg') center /
      cover no-repeat;
    position: absolute;
    top: -8px;
    right: -18px;
  }
`

export const CourseListBox = styled.div`
  width: calc(100% - 60px);
  padding: 40px 0;
  margin: auto;
`

export const SessionNameBox = styled.div`
  font-family: 'HakgyoansimDunggeunmisoTTF-B', sans-serif;
  font-size: 2em;
  text-align: center;
  margin-bottom: 40px;
`

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: start;
  gap: 10px;
  position: relative;
  z-index: 1;
`

export const CourseContentsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
  .title {
    font-size: 1.4em;
    font-weight: 700;
    letter-spacing: -2px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
`

export const CheckCourseCompletionBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  position: relative;
  &::after {
    content: '';
    width: 6px;
    height: 100%;
    background: url('/src/images/@common/dot-pt.svg') center / contain repeat-y;
    position: absolute;
    top: 50px;
    left: calc(50% - 3px);
    bottom: 0;
    z-index: 0;
  }
  &.checkd {
    &::after {
      content: '';
      width: 6px;
      height: 100%;
      background: url('/src/images/@common/dot-pt-green.svg') center / contain
        repeat-y;
      position: absolute;
      top: 50px;
      left: calc(50% - 3px);
      bottom: 0;
      z-index: 0;
    }
  }
  &:nth-last-child(2) {
    &::after {
      content: '';
      background: none;
    }
  }
  .checked {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    position: relative;
    z-index: 1;
    &.on {
      background: url('/src/images/lesson/course-list/ico-checked-on.svg')
        center / cover no-repeat;
      border: 3px solid #0a9b55;
    }
    &.off {
      background: url('/src/images/lesson/course-list/ico-checked-off.svg')
        center / cover no-repeat;
      border: 3px solid #ddd;
    }
  }
`

export const CourseItemBox = styled.div`
  cursor: pointer;
  width: calc(100% - 40px);
  min-height: 160px;
  padding: 20px;
  background-color: #ffffff;
  border: 3px solid #ddd;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  &.check {
    border: 3px solid var(--green);
  }
  .check {
    width: 24px;
    height: 24px;
    background: center/ cover no-repeat;
    &.on {
      background-image: url('/src/images/lesson/course-list/ico-checked-s-on.svg');
    }
    &.off {
      background-image: url('/src/images/lesson/course-list/ico-checked-s-off.svg');
    }
  }
  .book-image {
    img {
      width: 80px;
      height: auto;
      display: block;
      border-radius: 10px;
      background-color: #e0e0e0;
    }
  }
  .book-name {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .book-code {
      font-family: 'SDGdGulim', sans-serif;
      color: #d2d2d2;
      font-size: 0.9em;
      font-weight: 500;
    }
    .book-title {
      font-family: 'SDGdGulim', sans-serif;
      font-size: 1.4em;
      font-weight: 600;
    }
  }
  .book-bg {
    width: 330px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: center / cover no-repeat;
    filter: grayscale(100%);
    opacity: 0.5;
    &.completed {
      filter: grayscale(0%);
      opacity: 1;
    }
    &::after {
      content: '';
      width: 20px;
      height: 100%;
      position: absolute;
      top: 0;
      left: -5px;
      bottom: 0;
      background: url('/src/images/@common/waves-2-large.svg') left / 20px
        repeat-y;
    }
  }
  .tag {
    position: absolute;
    top: 0;
    right: 0;
    color: #ffffff;
    font-size: 0.8em;
    font-weight: 600;
    border-radius: 0 10px;
    padding: 4px 12px;
    padding-bottom: 6px;
    background-color: #1a1a1a;
  }
`

export const EmptyMessageBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  .empty-image {
    width: 150px;
    height: 150px;
    background-position: center;
    background-size: 150px auto;
    background-repeat: no-repeat;
    &.no-setting {
      background-image: url('/src/images/lesson/course-list/img-empty-02.svg');
    }
    &.close-lesson {
      background-image: url('/src/images/lesson/course-list/img-empty-01.svg');
    }
    &.after-final-lesson {
      background-image: url('/src/images/lesson/course-list/img-empty-03.svg');
    }
  }
  .empty-message {
    color: #8a785f;
    .text-1 {
      font-size: 1.4em;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .text-2 {
      font-size: 1em;
      font-weight: 500;
    }
  }
`
