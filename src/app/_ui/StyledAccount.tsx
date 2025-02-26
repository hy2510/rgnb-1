'use client'

import styled from 'styled-components'

export const LoginBodyBox = styled.div<{ $dodo?: boolean }>`
  min-height: 100vh;
  background: url('/src/images/@common/bg-glass.svg') top -200px left 0 / auto
    900px repeat-x #f4edd3;
  background-image: url('/src/images/@common/bg-forest.png'),
    url('/src/images/@common/bg-glass.svg');
  background-size:
    1440px auto,
    auto 900px;
  background-position:
    top -150px center,
    top -300px left 0;
  background-repeat: no-repeat, repeat-x;
  position: relative;
  z-index: 1;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00000050;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    z-index: -1;
  }
  .sign-in {
    width: 500px;
    height: 370px;
    margin-top: 5vh;
    position: absolute;
    top: calc(50% - 180px);
    left: calc(50% - 250px);
    background-color: #fff;
    z-index: 2;
    padding: 60px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: url('/src/images/@common/bg-log-in-body.svg') top / contain
      no-repeat;
    &::before {
      content: '';
      position: absolute;
      left: calc(50% - 240px);
      right: 0;
      bottom: calc(100% - 30px);
      width: 100%;
      height: 200px;
      background: url('/src/images/@common/dodo_16_5 1.png') center / auto 180px
        no-repeat;
    }
    &::after {
      content: '';
      position: absolute;
      top: -70px;
      left: 0;
      right: 0;
      width: 100%;
      height: 130px;
      background: url('/src/images/@common/bg-log-in-header.png') center / auto
        120px no-repeat;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        width: 100%;
        height: 60px;
        padding: 0 16px;
        border-radius: 15px;
        border: 1px solid #311700;
        background: #733600;
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5) inset;
        color: #fff;
        &::placeholder {
          color: #ffc37c;
        }
      }
      button {
        background-color: var(--red);
        color: #fff;
        width: 100%;
        height: 60px;
        padding: 0 16px;
        border-radius: 10px;
        font-size: 1.2em;
        font-weight: 500;
      }
    }
  }
  .sign-in-dodo-n-friends {
    width: 500px;
    height: 370px;
    margin-top: 5vh;
    position: absolute;
    top: calc(50% - 180px);
    left: calc(50% - 250px);
    background-color: #fff;
    z-index: 2;
    padding: 60px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: url('/src/images/@common/bg-log-in-body.svg') top / contain
      no-repeat;
    &::before {
      content: '';
      position: absolute;
      left: calc(50% - 240px);
      right: 0;
      bottom: calc(100% - 30px);
      width: 100%;
      height: 200px;
      background: url('/src/images/@common/dodo_16_5 1.png') center / auto 180px
        no-repeat;
    }
    &::after {
      content: '';
      position: absolute;
      top: -70px;
      left: 0;
      right: 0;
      width: 100%;
      height: 130px;
      background: url('/src/images/@common/bg-log-in-header_dodo_n_freinds.png')
        center / auto 120px no-repeat;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      input {
        width: 100%;
        height: 60px;
        padding: 0 16px;
        border-radius: 15px;
        border: 1px solid #311700;
        background: #733600;
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5) inset;
        color: #fff;
        &::placeholder {
          color: #ffc37c;
        }
      }
      button {
        background-color: var(--red);
        color: #fff;
        width: 100%;
        height: 60px;
        padding: 0 16px;
        border-radius: 10px;
        font-size: 1.2em;
        font-weight: 500;
      }
    }
    .btn-link {
      cursor: pointer;
      color: #ffc37c;
      text-align: center;
      width: fit-content;
      margin: auto;
      margin-top: 8px;
      font-weight: 500;
      font-size: 1.1em;
    }
  }
`

export const AccountInfo = styled.div`
  min-height: calc(100vh - 80px);
  background-color: #f4edd3;
  .heading {
    font-size: 1.5em;
    font-weight: 600;
    padding: 20px 0;
  }
  .group-1 {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: 500;
    margin-bottom: 20px;
    a {
      color: var(--red);
    }
  }
  .group-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .text-field {
      display: flex;
      flex-direction: column;
      position: relative;
      background-color: #fff;
      padding: 10px;
      border: 2px solid #f0f0f0;
      border-radius: 15px;
      .hint {
        font-size: 0.9em;
        margin-left: 5px;
        color: #d2d2d2;
      }
    }
  }
`

export const EditTextFieldBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  padding: 10px;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  .edit-button {
    cursor: pointer;
    position: absolute;
    font-size: 14px;
    top: calc(50% - 12px);
    right: 20px;
  }
  .hint {
    font-size: 0.9em;
    margin-left: 5px;
    color: #d2d2d2;
  }
`

export const EditChangePasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  padding: 10px;
  border: 2px solid #f0f0f0;
  border-radius: 15px;
  .edit-button {
    cursor: pointer;
    position: absolute;
    font-size: 14px;
    top: calc(50% - 12px);
    right: 20px;
    &.left {
      top: auto;
      bottom: 16px;
    }
    &.right {
      top: auto;
      bottom: 16px;
      right: 70px;
    }
  }
  .hint {
    font-size: 0.9em;
    margin-left: 5px;
    color: #d2d2d2;
  }
  input.active {
    background-color: #f0f0f0;
    border-radius: 5px;
  }
`

export const AccountListBox = styled.div`
  .account-list-container {
    width: 100%;
    max-width: 1024px;
    margin: auto;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .btn-link {
    cursor: pointer;
    width: fit-content;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    color: #fff;
    font-weight: 600;
    font-size: 1.1em;
  }
`

export const AccountCardBox = styled.div`
  position: relative;
  .container-account-card {
    cursor: pointer;
    width: 300px;
    height: 371px;
    background: center no-repeat url('/src/images/@common/bg-account-card.svg');
    display: flex;
    /* gap: 10px; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .img-avatar {
      width: 150px;
      height: 150px;
      background-size: 180px;
      background-position: top 15px center;
      background-repeat: no-repeat;
      background-color: #733600;
      border: 2px solid #311700;
      border-radius: 100px;
    }
    .txt-student-name {
      color: #fff;
      text-align: center;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
      font-size: 2em;
      font-weight: 700;
      max-width: 280px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .txt-student-id {
      color: #ffd3ac;
      text-align: center;
      font-size: 1.2em;
      font-weight: 700;
      max-width: 280px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .btn-delete {
    cursor: pointer;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 15px;
    right: 15px;
    background-image: url('/src/images/@common/icon_delete.svg');
    background-repeat: no-repeat;
    background-size: 24px;
    background-position: center;
  }
`

export const VerifyPasswordModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  .container-verify-password {
    width: 300px;
    height: 371px;
    background: center no-repeat url('/src/images/@common/bg-account-card.svg');
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    .box-student-info {
      margin-bottom: 20px;
      .txt-student-name {
        color: #fff;
        text-align: center;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
        font-size: 2em;
        font-weight: 700;
      }
      .txt-student-id {
        color: #ffd3ac;
        text-align: center;
        font-size: 1.2em;
        font-weight: 700;
      }
    }
    .box-input-password {
      width: calc(100% - 40px);
      border-radius: 15px;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #311700;
      background: #733600;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5) inset;
      form {
        input {
          color: #ffffff;
          font-size: 1.1em;
          &::placeholder {
            color: #ffc37c;
          }
        }
      }
    }
    .box-btn-log-in {
      width: calc(100% - 40px);
    }
  }
  .container-light-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    z-index: 1;
  }
`
