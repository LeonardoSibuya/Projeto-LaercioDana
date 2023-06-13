import styled from 'styled-components'
import { Colors } from '../../styles'
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
  border-radius: 30px;
  padding: 6px 16px;
  text-align: center;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    background-color: ${Colors.black};
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
`

export const ImageEixo = styled.img`
  max-width: 100%;
  width: 400px;
  border-radius: 24px;
  object-fit: cover;
  cursor: zoom-in;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease;
    opacity: 0.3;
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
  }
`
