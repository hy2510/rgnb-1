'use client'

import styled from 'styled-components'

export const PageBodyBox = styled.div`
  min-height: calc(100vh - 80px);
  background-image: url('/src/images/@common/bg-flower.svg'),
    url('/src/images/@common/bg-glass.svg'),
    url('/src/images/@common/bg-item-reading-unit01.png'),
    url('/src/images/@common/bg-item-reading-unit02.png'),
    url('/src/images/@common/bg-item-reading-unit03.png'),
    url('/src/images/@common/bg-stump.png');
  background-size:
    auto 130px,
    auto 900px,
    220px auto,
    220px auto,
    160px auto,
    1800px auto;
  background-position:
    top 20px center,
    top -620px center,
    left 5% top 300px,
    right 1.5% bottom 20px,
    right 2.5% bottom 50vh,
    top 50px center;
  background-repeat: no-repeat, repeat-x, no-repeat, no-repeat, no-repeat,
    repeat-y;
  background-attachment: scroll;
  background-color: rgb(244, 237, 211);
  @media screen and (max-width: 1280px) {
    background-image: url('/src/images/@common/bg-flower.svg'),
      url('/src/images/@common/bg-glass.svg'),
      url('/src/images/@common/bg-stump.png');
    background-size:
      auto 130px,
      auto 900px,
      1400px auto;
    background-position:
      top center,
      top -620px center,
      top 30px center;
    background-repeat: no-repeat, repeat-x, repeat-y;
  }
  /* @media (pointer: coarse) {
    background-image: url('/src/images/@common/bg-flower.svg'),
      url('/src/images/@common/bg-glass.svg');
    background-size:
      auto 130px,
      auto 900px;
    background-position:
      top 100px center,
      top -530px center;
    background-repeat: no-repeat, repeat-x;
    background-attachment: fixed, fixed;
  } */
`

export const PageContainerBox = styled.div<{ $compact?: boolean }>`
  width: 100%;
  max-width: ${(props) => (props.$compact ? '1024px' : '1168px')};
  margin: auto;
  /* background-image: url('/src/images/@common/bg-stump.svg'); */
`

export const GapBox = styled.div<{ $px?: number }>`
  height: ${(props) => props.$px + 'px'};
`

export const PillsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const PillItemBox = styled.div<{ $active: boolean }>`
  cursor: pointer;
  background-color: ${(props) => (props.$active ? '#0a9b55' : '#f0f0f0')};
  color: ${(props) => (props.$active ? '#fff' : '#929292')};
  padding: 12px 20px 10px 20px;
  border: 2px solid #4e1e0020;
  border-radius: 100px;
  font-size: 1.05em;
  font-family: 'SDGdGulim', sans-serif;
  font-weight: 500;
`

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  display: flex;
  align-items: start;
  justify-content: center;
  .light-box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #00000090;
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
  }
  &.change-dropdown {
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    bottom: auto;
    z-index: 2;
    .light-box {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: transparent;
      -webkit-backdrop-filter: blur(0);
      backdrop-filter: blur(0);
    }
  }
`

export const ModalContainerBox = styled.div`
  margin-top: 70px;
  width: 500px;
  background-color: #f4edd3;
  border-radius: 20px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  &.change-dropdown {
    width: 280px;
    padding: 10px;
    border-radius: 15px;
    box-shadow: 0 0 2px #00000050;
  }
`

export const ModalHeaderBox = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 1px solid #f0f0f0; */
  .title {
    font-family: 'SDGdGulim', sans-serif;
    font-size: 1.4em;
    font-weight: 500;
    margin-left: 5px;
  }
  .delete-button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background: url('/src/images/@common/x_black.svg') center / 24px no-repeat;
  }
`

export const ModalBodyBox = styled.div`
  padding: 20px;
  padding-top: 0;
  min-height: 450px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  &.change-dropdown {
    padding: 0;
    min-height: 0;
  }
`

export const MyRgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TotalStudyScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  .row-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    border-bottom: 2px solid #1a1a1a;
    background-color: #0a9b55;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      background: url('/src/images/@common/bg-flower.svg') left top / auto 100px
        repeat-x #0a9b55;
      opacity: 0.5;
    }
    .student-name {
      position: relative;
      font-size: 1.2em;
      font-weight: 600;
      color: #fff;
      z-index: 1;
      /* margin-left: 10px; */
    }
    .student-avatar {
      position: relative;
      min-height: 80px;
      width: 90px;
      margin-right: 30px;
      .avatar-1 {
        width: 55px;
        height: 55px;
        background-position: top 5px center;
        background-size: 55px;
        background-repeat: no-repeat;
        border-radius: 20px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
      }
      .reading-unit {
        width: 50px;
        height: 50px;
        background-position: top;
        background-size: 55px;
        background-repeat: no-repeat;
        border-radius: 20px;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 1;
      }
      .edit-button {
        cursor: pointer;
        width: 40px;
        height: 40px;
        background: url('/src/images/@common/pencil_white_2.svg') center / 20px
          no-repeat;
        position: absolute;
        right: -30px;
        bottom: 0;
        z-index: 3;
      }
    }
  }
  .row-2 {
    /* min-height: 100px;
    display: grid;
    grid-template-columns: repeat(2, 1fr); */
    padding: 15px 20px;
    background: url('/src/images/@common/bg-wood.svg') center / cover no-repeat;
    .col-1st,
    .col-2nd {
      color: #fff;
      display: flex;
      flex-direction: column;
      /* gap: 5px; */
      /* padding: 0 20px; */
      .label {
        font-size: 0.9em;
        font-weight: 500;
      }
      .contents {
        font-size: 1.2em;
        font-weight: 600;
        margin-left: auto;
      }
    }
    /* .col-1st {
      border-right: 1px solid #00000050;
      padding-left: 0;
    }
    .col-2nd {
      padding-right: 0;
    } */
  }
`

export const MyRgEtcBox = styled.div`
  /* min-height: 100px; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  .etc-button {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    text-align: center;
    font-size: 1em;
    font-weight: 500;
    border-radius: 12px;
    background: rgba(115, 45, 0, 0.05);
    .icon {
      width: 30px;
      height: 30px;
      &.account-info {
        background: url('/src/images/@common/icon_etc_user_info.svg') center /
          30px auto no-repeat;
      }
      &.set-study {
        background: url('/src/images/@common/icon_etc_set_study.svg') center /
          30px auto no-repeat;
      }
      &.mp3 {
        background: url('/src/images/@common/icon_etc_mp3.svg') center / 30px
          auto no-repeat;
      }
    }
  }
`

export const BasicButtonBox = styled.div<{ $color?: string }>`
  cursor: ${(props) => (props.$color == 'gray' ? 'default' : 'pointer')};
  width: 100%;
  text-align: center;
  color: ${(props) => (props.$color == 'gray' ? '#ffffff50' : '#ffffff')};
  font-size: 1.1em;
  font-weight: 500;
  background-color: ${(props) =>
    props.$color == 'red'
      ? '#ff274f'
      : props.$color == 'gray'
        ? '#c2c2c280'
        : '#00a0fd'};
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 3px 0
    ${(props) =>
      props.$color == 'red'
        ? '#ac112d'
        : props.$color == 'gray'
          ? '#aeaeae80'
          : '#007bc2'};
  transform: scale(1);
  transition: transform 0.2s;
  &:active {
    transform: ${(props) =>
      props.$color == 'gray' ? 'scale(1)' : 'scale(0.98)'};
  }
`

export const ChooseAvatarAndReadingUnitBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .sub-title {
    font-family: 'SDGdGulim', sans-serif;
    font-size: 1.1em;
    font-weight: 600;
    padding-left: 5px;
  }
  select {
    height: 50px;
    border: 1.5px solid #d2d2d2;
    border-radius: 10px;
    padding: 10px;
    font-weight: 600;
    font-size: 1em;
  }
  .avatar-table {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`

export const AvatarItemBox = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 100px;
  .avatar-image-container {
    width: 120px;
    height: 120px;
    border: 3px solid #fff;
    border-radius: 100px;
    background-color: #ffffff50;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    .avatar-image {
      margin-top: 50px;
      min-width: 150px;
      min-height: 150px;
      background-size: contain;
      background-repeat: no-repeat;
      filter: grayscale(100%);
    }
  }
  &.selected {
    .avatar-image-container {
      background-color: #00000010;
      border: 3px solid var(--green);
      .avatar-image {
        filter: grayscale(0);
      }
    }
  }
  .avatar-name {
    font-family: 'SDGdGulim', sans-serif;
    font-size: 0.9em;
  }
`

export const VideoModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000090;
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 999;
  .video-modal-container {
    width: 760px;
    height: 427.5px;
    background-color: #000000;
    position: relative;
    video {
      width: 100%;
      height: auto;
    }
    .delete-button {
      cursor: pointer;
      position: absolute;
      width: 40px;
      height: 40px;
      top: -40px;
      right: -40px;
      z-index: 1;
      background: url('/src/images/@common/x_white.svg') center / 24px no-repeat
        #000000;
      border-radius: 100px;
    }
  }
  .buttons {
    width: 380px;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`
