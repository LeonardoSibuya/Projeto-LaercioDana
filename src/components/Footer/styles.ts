import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

type MarginTopFooter = {
  marginTop: string
}

export const Footer = styled.footer<MarginTopFooter>`
  background-color: ${Colors.black};
  margin-top: ${(props) => props.marginTop};
  padding: 60px 0 24px;
  box-shadow: -6px 0 6px #000;

  p {
    color: ${Colors.white};
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    margin-top: 40px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  > img {
    max-width: 100%;
    width: 100px;
    height: 100px;
  }
`

export const ListLinks = styled.ul`
  h4 {
    color: ${Colors.gray};
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }

  li {
    margin: 16px 0;
    text-align: center;
  }
`

export const LinkItems = styled(Link)`
  text-decoration: none;
  color: ${Colors.white};
  font-weight: bold;
  font-size: 14px;
  transition: 0.5s ease;

  &:hover {
    color: ${Colors.gray};
    letter-spacing: 1px;
    transition: 0.5s ease;
  }
`

export const ListSocials = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  li {
    border-radius: 50%;
    background-color: ${Colors.white};
    width: 36px;
    height: 36px;

    transition: 0.5s ease;

    &:hover {
      transition: 0.5s ease;
      transform: scale(1.1);
    }

    a {
      text-decoration: none;

      img {
        max-width: 100%;
        width: 36px;
        height: 36px;
      }
    }
  }
`
