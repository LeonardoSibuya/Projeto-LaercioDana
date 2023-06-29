import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const ContainerPill = styled.div`
  color: ${Colors.white};
  max-width: 100%;
  width: 100%;
  background-image: linear-gradient(
    ${Colors.darkBlueOne},
    ${Colors.darkBlueTwo}
  );
  padding: 24px;
  border-radius: 32px;
  overflow: hidden;

  p {
    line-height: 26px;
    font-size: 16px;
    text-align: justify;
    display: none;
    margin-top: 16px;
    padding-right: 24px;
    transition: height, 0.9s ease;

    @media (max-width: ${breakpoints.celphone}) {
      font-size: 12px;
      padding-right: 0px;
    }

    &.visible {
      display: block;
      max-height: 1000px;
      transition: height, 0.9s ease;
    }

    a {
      background-color: ${Colors.cyan};
      font-size: 12px;
      color: ${Colors.white};
      font-weight: bold;
      font-family: 'Teko', sans-serif;
      cursor: pointer;
      transition: 0.5s ease;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 1px;
      border-radius: 8px;
      display: block;
      text-align: center;
      width: 80px;
      margin-top: 16px;

      &:hover {
        background-color: ${Colors.white};
        color: ${Colors.cyan};
        transition: 0.5s ease;
      }

      @media (max-width: 1024px) {
        font-size: 14px;
      }

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`
export const ContainerTitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  h4 {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Teko', sans-serif;
    letter-spacing: 1px;

    @media (max-width: ${breakpoints.celphone}) {
      font-size: 18px;
    }
  }

  span {
    img {
      width: 24px;
      height: 24px;

      @media (max-width: ${breakpoints.celphone}) {
        width: 16px;
        height: 16px;
      }
    }
  }
`
