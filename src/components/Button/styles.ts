import styled from 'styled-components'

export const Button = styled.a`
  max-width: 100%;
  background-image: linear-gradient(to left, #2f80ed, #009ad9);
  padding: 8px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  font-family: 'Teko', sans-serif;
  cursor: pointer;
  transition: 0.5s ease;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-image: linear-gradient(to left, #fff, #fff);
    color: #009ad9;
    transition: 0.5s ease;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
