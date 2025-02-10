'use client'

import styled from 'styled-components'

export const NavBarBox = styled.div`
  height: 76px;
  padding-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`

export const NavItemBox = styled.div<{ $active: boolean }>`
  cursor: pointer;
  font-family: 'SDGdGulim', sans-serif;
  color: #fff;
  font-size: 1.2em;
  font-weight: 600;
  opacity: ${(props) => (props.$active ? 1 : 0.5)};
`
export const FilterBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
`

export const FilterButtonBox = styled.div`
  cursor: pointer;
  width: 152px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  font-weight: 600;
  text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
  color: #0ecc70;
  border-radius: 10px;
  background: #0a9b55;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2) inset;
  &.active {
    color: #ffc37c;
    background: url('/src/images/course/filter/filter-button-on.svg') center /
      contain no-repeat;
    box-shadow: none;
  }
`

export const CourseItemsBox = styled.div`
  width: calc(100% - 60px);
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CourseItemBox = styled.div`
  min-height: 200px;
  background-color: #fff;
  padding: 20px;
  border: 3px solid #ddd;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 50px 1fr 360px;
  gap: 10px;
  &.active {
    border: 3px solid var(--green);
  }
  .col-1st {
    display: flex;
    align-items: center;
    justify-content: center;
    .check-course {
      width: 50px;
      height: 50px;
      background-position: center;
      background-size: 50px;
      background-repeat: no-repeat;
      background-image: url('/src/images/course/course-items/ico-checked-off.svg');
      &.active {
        background-image: url('/src/images/course/course-items/ico-checked-on.svg');
      }
    }
  }
  .col-2nd {
    margin-left: 10px;
    font-size: 0.9em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    .row-1 {
      color: #0a9b55;
      font-size: 1.4em;
      font-weight: 700;
      letter-spacing: -1.2px;
    }
    .row-2 {
      display: grid;
      gap: 10px;
      .tr {
        display: grid;
        grid-template-columns: 24px 24px 1fr;
        gap: 10px;
        align-items: center;
        justify-content: center;
        .check-book {
          width: 24px;
          height: 24px;
          background-position: center;
          background-size: 20px;
          background-repeat: no-repeat;
          background-image: url('/src/images/course/course-items/ico-checked-s-off.svg');
          &.active {
            background-image: url('/src/images/course/course-items/ico-checked-s-on.svg');
          }
        }
      }
      .tag {
        display: flex;
        align-items: center;
        font-family: 'SDGdGulim', sans-serif;
        color: #ccc;
        width: 24px;
        height: 24px;
        &.movie-icon {
          background:
            url('/src/images/course/course-items/ico-book-movie.svg'),
            center / 24px no-repeat;
        }
        &.ebook-icon {
          background:
            url('/src/images/course/course-items/ico-book-ebook.svg'),
            center / 24px no-repeat;
        }
        &.song-icon {
          background:
            url('/src/images/course/course-items/ico-book-song.svg'),
            center / 24px no-repeat;
        }
      }
      .title {
        display: flex;
        align-items: center;
        width: fit-content;
        font-family: 'SDGdGulim', sans-serif;
        color: #2b2b2b;
        font-size: 1.1em;
      }
    }
  }
  .col-3rd {
    display: flex;
    gap: 10px;
    align-items: end;
    justify-content: end;
    .book-image {
      position: relative;
      .to-do-icon {
        position: absolute;
        top: -10px;
        right: -10px;
        z-index: 1;
        width: 30px;
        height: 30px;
        background: url('/src/images/course/course-items/ico-todo.svg') center /
          cover no-repeat;
      }
      img {
        cursor: pointer;
        display: block;
        height: auto;
        background-color: #f0f0f0;
        border-radius: 15px;
        filter: grayscale(100%);
        transform: scale(1);
        transition: transform 0.2s;
        box-shadow:
          rgba(9, 30, 66, 0.25) 0px 1px 1px,
          rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
        &.active {
          filter: grayscale(0);
        }
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
`
