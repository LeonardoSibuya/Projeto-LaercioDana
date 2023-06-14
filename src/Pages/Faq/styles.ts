import styled from 'styled-components'
import { Colors } from '../../styles'

export const List = styled.ul`
  margin-top: 160px;

  li {
    margin: 24px 0;
  }
`
export const Text = styled.p`
  color: ${Colors.gray};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 80px;

  a {
    color: ${Colors.white};
    text-decoration: none;
    transition: 0.1s ease;

    &:hover {
      text-decoration: underline;
      transition: 0.1s ease;
      font-style: italic;
    }
  }
`
