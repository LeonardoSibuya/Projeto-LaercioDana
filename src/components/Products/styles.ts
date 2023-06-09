import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const SectionProduct = styled.section`
  margin: 160px 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    @media (max-width: ${breakpoints.celphone}) {
      display: block;
      width: 100%;

      &.hidden-mobile {
        display: none;
      }
    }
  }

  img {
    max-width: 100%;
    width: 240px;
    height: 200px;
    background-image: radial-gradient(
      circle at 50% 50%,
      #1f73b1 0,
      #184f7c 50%,
      #0e2e4b 100%
    );
    padding: 16px;
    border-radius: 16%;
    object-fit: cover;
    box-shadow: 0px 0px 16px #000;

    @media (max-width: ${breakpoints.celphone}) {
      width: 100%;
      border-radius: 8px;

      &.hidden-mobile {
        display: none;
      }
    }
  }
`
export const ContainerText = styled.div`
  color: ${Colors.white};
  margin-top: 32px;

  p {
    margin: 16px 0;
    max-width: 100%;
    width: 400px;
    line-height: 22px;
    text-align: justify;
    font-size: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }

  span {
    font-weight: bold;
    letter-spacing: 1px;
    color: ${Colors.cyan};
    font-size: 20px;
    display: block;

    &.old-price {
      font-size: 12px;
      color: ${Colors.gray};
      font-style: italic;
      margin-bottom: 8px;
      text-decoration: line-through;
    }
  }
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 24px;
  margin-top: 16px;
`
