import styled from 'styled-components'
import { Colors } from '../../styles'

export const DivTitle = styled.div`
  margin: 160px 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TextImg = styled.h4`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${Colors.white};
  letter-spacing: 1px;
  text-shadow: 2px 1px 3px #000;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  display: none;
  font-family: 'Teko', sans-serif;
`

export const ContentList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  position: relative;

  li {
    position: relative;
    cursor: pointer;
    transition: 0.5s ease;

    span {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translate(-50%, 0%);

      background-color: ${Colors.lightBlue};
      color: ${Colors.white};
      font-size: 16px;
      font-weight: bold;
      padding: 8px;
      text-align: center;
      width: 60%;
      border-radius: 24px;
      letter-spacing: 1px;
    }

    &:hover {
      transition: 0.5s ease;
      transform: scale(1.1);

      span {
        display: none;
      }

      ${TextImg} {
        display: block;
        transition: 0.5s ease;
        z-index: 1;
      }

      img {
        opacity: 0.15;
        transition: 0.5s ease;
      }
    }
  }

  img {
    max-width: 100%;
    width: 320px;
    height: 320px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 2px 2px 6px #000;
  }
`
