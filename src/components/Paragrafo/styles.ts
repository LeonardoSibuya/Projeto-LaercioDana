import styled from 'styled-components'

export const Paragrafo = styled.p`
  font-size: 16px;
  color: #000;
  line-height: 20px;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
