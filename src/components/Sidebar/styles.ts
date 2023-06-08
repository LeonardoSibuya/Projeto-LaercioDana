import styled from 'styled-components'

import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Colors.black};
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
  border-radius: 0 16px 16px 0;
  max-width: 280px;
  width: 100%;
  z-index: 1;
  padding: 32px 24px 0;
  background-image: linear-gradient(
    ${Colors.darkBlueOne},
    ${Colors.darkBlueTwo}
  );
  box-shadow: 1px 1px 1px #000;
  position: relative;

  ul {
    li {
      margin: 16px 0;
    }
  }
`

export const LinkItem = styled(Link)`
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
    background-image: linear-gradient(
      to left,
      ${Colors.lightBlue},
      ${Colors.gray}
    );
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
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-bottom: 48px;
  font-weight: bold;

  img {
    width: 48px;
    max-width: 100%;
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
  left: 60px;
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
