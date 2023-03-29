import styled from 'styled-components'

export const Link = styled.a`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  font-family: 'Teko', sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease;
  letter-spacing: 1px;

  &:hover {
    color: #fff;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
