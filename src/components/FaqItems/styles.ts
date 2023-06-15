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

  p {
    line-height: 26px;
    font-size: 16px;
    text-align: justify;
    display: none;
    margin-top: 16px;

    @media (max-width: ${breakpoints.celphone}) {
      font-size: 12px;
    }

    &.visible {
      display: block;
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
