import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'
import { SubtitleStyle } from '../Subtitle/styles'

type TabButton = {
  isActive: boolean
}

export const Section = styled.section`
  padding: 160px 0 80px;
  background-image: radial-gradient(
    circle at 50% 50%,
    #ffffff 0,
    #f8fcff 50%,
    #d6e3ed 100%
  );

  ${SubtitleStyle} {
    color: ${Colors.black};
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 24px;
  margin: 16px 0 32px;

  @media (max-width: ${breakpoints.celphone}) {
    margin-bottom: 16px;
    justify-content: center;
  }
`

export const TabButton = styled.button<TabButton>`
  background-color: ${(props) => (props.isActive ? Colors.cyan : Colors.gray)};
  color: ${Colors.white};
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-radius: ${(props) => (props.isActive ? '12px' : '2px')};
  padding: 6px 16px;
  text-align: center;
  transition: 0.5s ease;

  @media (max-width: ${breakpoints.celphone}) {
    font-size: 10px;
    padding: 4px 8px;
  }

  &:hover {
    transition: 0.5s ease;
    background-color: ${Colors.black};
    border-radius: 12px;
    letter-spacing: 2px;
  }
`
export const Zoom = styled.img`
  display: none;
  width: 80px;
  height: 80px;
`

export const ImageEixoContainer = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
  }

  :hover {
    ${Zoom} {
      display: block;
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const ImageEixo = styled.img`
  max-width: 100%;
  width: 400px;
  border-radius: 24px;
  object-fit: cover;
  cursor: zoom-in;
  transition: 0.5s ease;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-top: 24px;
  }

  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
    opacity: 0.3;

    @media (max-width: ${breakpoints.tablet}) {
      transform: scale(1.1);
    }
  }
`

export const TableContainer = styled.div`
  background-color: ${Colors.white};
  border-radius: 24px;
  overflow-y: scroll;
  height: 480px;
  max-height: 100%;
  position: relative;
  border: 1px solid black;
  border-right: 0;

  @media (max-width: ${breakpoints.tablet}) {
    border-right: 1px solid #000;
  }

  ::-webkit-scrollbar {
    width: 16px;
    border-radius: 0px 24px 24px 0;
    background-color: #ccc;
    border: 1px solid #000;
    border-left: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${Colors.cyan};
    border-radius: 0px 24px 24px 0;
    height: 6px;
    width: 1px;
  }

  table {
    text-align: center;
    max-width: 100%;
    width: 100%;
    overflow-x: scroll;
    position: relative;

    @media (max-width: ${breakpoints.celphone}) {
      padding: 0 6px;
    }

    thead {
      position: sticky;
      top: 0;
      left: 0;

      tr {
        padding: 12px 0;
        background-color: ${Colors.white};
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #000;
      }

      th {
        font-weight: bold;
        font-size: 24px;
        letter-spacing: 1px;
        width: 100%;
        font-family: 'Teko', sans-serif;

        @media (max-width: ${breakpoints.celphone}) {
          font-size: 14px;
        }
      }
    }

    tbody {
      height: 100%;
      width: 100%;

      tr {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 0;

        :nth-child(even) {
          background-color: #8080804d;
        }

        td {
          padding: 3px 6px;
          font-size: 12px;
          font-weight: bold;
          width: 100%;

          @media (max-width: ${breakpoints.celphone}) {
            font-size: 10px;
          }
        }
      }
    }
  }
`
export const ContainerText = styled.div`
  margin-top: 80px;

  p {
    display: block;
    margin: 16px 0;
    color: ${Colors.black};
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;

    @media (max-width: ${breakpoints.celphone}) {
      font-size: 12px;
    }
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  img {
    width: 700px;
    height: 640px;
    max-width: 100%;
    display: block;
    background-color: #fff;
    padding: 8px;
    border-radius: 8px;

    @media (max-width: ${breakpoints.celphone}) {
      width: 320px;
      height: 400px;
    }
  }

  .closeIcon {
    height: 56px;
    width: 56px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.5s ease;

    @media (max-width: ${breakpoints.celphone}) {
      width: 32px;
      height: 32px;
    }

    &:hover {
      transition: 0.5s ease;
      transform: scale(0.8);
    }
  }
`
