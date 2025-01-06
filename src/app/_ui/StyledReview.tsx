'use client'

import styled from 'styled-components'

export const SearchBoardBox = styled.div`
  width: 100%;
  padding: 30px;
  padding-bottom: 0;
  margin-bottom: 24px;
  .container {
    height: 186px;
    background: url('/src/images/lesson/weekly-board/bg-board-body.svg') top /
      auto 186px no-repeat;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    .row-1 {
      display: flex;
      gap: 20px;
      justify-content: center;
      .menu-item {
        cursor: pointer;
        color: #ffc37c90;
        font-size: 1.1em;
        font-weight: 500;
        &.active {
          color: #ffc37c;
          text-shadow: 0 1px 0 #000;
          font-weight: 600;
        }
      }
    }
    .row-2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;
      .col-left {
        display: flex;
        gap: 20px;
        .search-date {
          display: flex;
          gap: 10px;
          align-items: center;
          /* input {
            width: 150px;
            min-height: 50px;
            font-size: 1em;
            padding: 8px 10px;
            border: 1px solid #732d00;
            border-radius: 8px;
            background: rgba(115, 45, 0, 0.3);
            box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5) inset;
            color: #ffc37c;
          } */
          input[type='date'] {
            position: relative;
            appearance: none; /* 기본 브라우저 스타일 제거 */
            -webkit-appearance: none;
            width: 150px;
            min-height: 50px;
            font-size: 1em;
            padding: 8px 10px;
            border: 1px solid #732d00;
            border-radius: 8px;
            box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5) inset;
            color: #ffc37c;
            background: url('/src/images/review/ico-calendar.svg') no-repeat
              right 15px center / 16px rgba(115, 45, 0, 0.3);
            &::-webkit-calendar-picker-indicator {
              opacity: 0;
            }
          }
        }
        .search-title {
          input {
            width: 450px;
            min-height: 50px;
            font-size: 1em;
            padding: 8px 10px;
            border: 1px solid #732d00;
            border-radius: 8px;
            background: rgba(115, 45, 0, 0.3);
            box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5) inset;
            &::placeholder {
              color: #ffc37c;
            }
          }
        }
      }
      .col-right {
        .search-button {
          cursor: pointer;
          width: 50px;
          height: 50px;
          background: url('/src/images/review/img-search-button.svg') center /
            50px no-repeat;
          transform: scale(1);
          transition: transform 0.2s;
          &:active {
            transform: scale(0.9);
          }
        }
      }
    }
  }
`

export const ReportsBox = styled.div`
  min-height: 480px;
  padding: 0 30px;
  /* background-color: #fff; */
  border-radius: 15px;
`

export const ReportItemsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`

export const ReportItemBox = styled.div`
  cursor: pointer;
  border-radius: 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: end;
  overflow: hidden;
  transform: scale(1);
  transition: transform 0.2s;
  &.passed {
    border: 3px solid #0a9b5530;
  }
  &.failed {
    border: 3px solid #ff274f30;
  }
  &:hover {
    transform: scale(1.03);
  }
  .row-1 {
    display: flex;
    align-items: end;
    justify-content: center;
    padding: 20px 0 10px 0;
    .book-image {
      display: block;
      border: 1px solid #f0f0f0;
      border-radius: 15px;
      width: 150px;
      height: auto;
      background-color: #f0f0f0;
      &.passed {
        filter: contrast(1.1);
      }
      &.failed {
        filter: grayscale(100%);
      }
    }
  }
  .row-2 {
    padding: 20px;
    padding-top: 30px;
    &.passed {
      background: url('/src/images/@common/waves-2-large-landscape.svg') center
        top / auto 20px repeat-x #0ecc7030;
    }
    &.failed {
      background: url('/src/images/@common/waves-2-large-landscape.svg') center
        top / auto 20px repeat-x #ff274f30;
    }
    .book-code {
      color: rgba(0, 0, 0, 0.3);
      font-size: 0.9em;
      margin-bottom: 5px;
    }
    .book-title {
      font-family: 'SDGdGulim', sans-serif;
      font-size: 1.1em;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .result-table {
      display: grid;
      grid-template-columns: 80px 1fr;
      gap: 5px;
      font-size: 0.9em;
      div:nth-child(odd) {
        color: rgba(0, 0, 0, 0.3);
      }
      div:nth-child(even) {
        font-weight: 500;
      }
    }
  }
`

export const ReportMoreBox = styled.div`
  cursor: pointer;
  width: 200px;
  height: 50px;
  font-weight: 500;
  background-color: #f2f2f2;
  border-radius: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
    filter: sepia(20%);
    background: url('/src/images/review/empty-board.svg') center / 150px
      no-repeat;
  }
  .empty-message {
    color: #8a785f;
    font-size: 1em;
    font-weight: 500;
  }
`
