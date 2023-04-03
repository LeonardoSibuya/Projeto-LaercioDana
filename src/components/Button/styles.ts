import styled from 'styled-components'

export const Button = styled.a`
  border-radius: 12px;
  width: 100px;
  text-align: center;
  background-color: #000;
  display: inline-block;
  padding: 4px;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  font-family: 'Teko', sans-serif;
  cursor: pointer;
  transition: 0.3s ease;
  letter-spacing: 1px;
  border: none;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    box-shadow: 1px 1px 4px #000;
    color: #000;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
  }
`
