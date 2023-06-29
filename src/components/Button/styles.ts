import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors } from '../../styles'

export const ButtonPage = styled(Link)`
  max-width: 100%;
  background-image: linear-gradient(
    to bottom,
    ${Colors.lightBlue},
    ${Colors.gray}
  );
  padding: 8px;
  font-size: 14px;
  color: ${Colors.white};
  font-weight: bold;
  font-family: 'Teko', sans-serif;
  cursor: pointer;
  transition: 0.5s ease;
  border: none;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 8px;

  &:hover {
    background-image: linear-gradient(${Colors.white}, ${Colors.white});
    color: ${Colors.lightBlue};
    transition: 0.5s ease;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
export const ButtonLink = styled.a`
  max-width: 100%;
  background-color: ${Colors.cyan};
  padding: 8px;
  font-size: 14px;
  color: ${Colors.white};
  font-weight: bold;
  font-family: 'Teko', sans-serif;
  cursor: pointer;
  transition: 0.5s ease;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 8px;

  &:hover {
    background-color: ${Colors.white};
    color: ${Colors.cyan};
    transition: 0.5s ease;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
