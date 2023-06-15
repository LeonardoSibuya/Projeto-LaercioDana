import styled from 'styled-components'
import { Colors, breakpoints } from '../../styles'

export const Content = styled.section`
  margin-top: 160px;

  h3 {
    margin-bottom: 24px;
  }
`

export const TextDiv = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  img {
    max-width: 100%;
    width: 100%;
    height: 440px;
    border-radius: 8px;
    object-fit: cover;
  }

  span {
    display: block;
    margin-bottom: 12px;
    max-width: 100%;
    width: 440px;
    height: 100%;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      margin-bottom: 24px;
    }
  }

  p {
    text-align: justify;
    color: ${Colors.white};
    font-size: 14px;
    line-height: 22px;
  }
`
