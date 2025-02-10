'use client'

import styled from 'styled-components'

export const CoursewareHeaderBox = styled.div`
  min-height: 80px;
  background-color: var(--green);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`

export const ContainerBox = styled.div`
  width: 100%;
  max-width: 1168px;
  padding: 0 20px;
  margin: auto;
`

export const NavsBox = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  align-items: center;
  height: 80px;
  position: relative;
  .logo {
    display: block;
    width: 100%;
    height: 55px;
    background: url('/src/images/g-header/img-logo.png') left center / auto 45px
      no-repeat;
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  .avatar {
    cursor: pointer;
    width: 55px;
    height: 55px;
    border: 2px solid #fff;
    background-color: #0a9b55;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-left: auto;
    img {
      width: 120%;
      height: auto;
      padding-top: 15px;
    }
  }
`

export const NavItemBox = styled.div<{ $icon?: string; $active?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: ${(props) => (props.$active ? 1 : 0.5)};
  &.active {
    opacity: 1;
  }
  .icon {
    width: 30px;
    height: 30px;
    background: center / 30px no-repeat;
    &.lesson {
      background-image: url('/src/images/g-header/ico-lesson.svg');
    }
    &.course {
      background-image: url('/src/images/g-header/ico-course.svg');
    }
    &.review {
      background-image: url('/src/images/g-header/ico-review.svg');
    }
  }
  .text {
    color: #fff;
    font-weight: 600;
    font-size: 1.2em;
    margin-bottom: 3px;
    font-family: 'HakgyoansimDunggeunmisoTTF-B', sans-serif;
  }
`
export const GFooterBox = styled.div`
  width: 100%;
  max-width: 1128px;
  padding: 50px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  color: #b3b9c2;
  font-size: 0.9em;
`
