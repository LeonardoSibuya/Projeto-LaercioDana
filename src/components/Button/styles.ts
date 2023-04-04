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
  transition: 0.5s ease;
  border: none;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(to left, #ccc, #eee, #fff);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.47);
    color: #000;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
  }
`
