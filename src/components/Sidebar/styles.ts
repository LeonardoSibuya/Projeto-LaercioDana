import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const ContentDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-start;
  z-index: 1;

  &.is-visible {
    display: flex;
  }
`

export const SideBarContainer = styled.aside`
  border-radius: 0 10px 10px 0;
  max-width: 360px;
  width: 100%;
  z-index: 1;
  padding: 24px 24px 0;
  background-image: linear-gradient(#0d1520, #00060f);
  box-shadow: 1px 1px 1px #000;
  position: relative;

  ul {
    li {
      margin: 16px 0;

      a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        display: flex;
        align-items: center;
        gap: 16px;
        transition: 0.5s ease;
        letter-spacing: 1px;

        &:hover {
          border-radius: 16px;
          background-image: linear-gradient(to left, #8db1bf, #5c7f8c);
          background-color: lightblue;
          padding: 6px;
          transition: 0.5s ease;
          color: #000;
          font-weight: bold;
        }

        img {
          width: 24px;
          height: 24px;
          max-width: 100%;
          max-height: 100%;
          border-radius: 50%;
        }
      }
    }
  }
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-bottom: 32px;
  font-weight: bold;

  h2 {
    font-size: 24px;
  }

  span {
    cursor: pointer;
    img {
      cursor: pointer;
      max-width: 24px;
      max-height: 24px;
    }
  }
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 100px;
  padding-bottom: 16px;

  a {
    text-decoration: none;
    font-size: 12px;
    color: #fff;
    transition: 0s.5s ease;
    display: block;
    margin: 8px 0;

    &:hover {
      text-decoration: underline;
      transition: 0s.5s ease;
    }
  }
`
