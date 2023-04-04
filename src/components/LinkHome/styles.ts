import { NavLink, NavLinkProps } from 'react-router-dom'

import styled from 'styled-components'

interface LinkStyleProps extends NavLinkProps {
  exact?: boolean
  activeClassName?: string
}

export const LinkStyleHome = styled(NavLink)<LinkStyleProps>`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  font-family: 'Teko', sans-serif;
  cursor: pointer;
  text-decoration: none;

  &.active {
    color: #fff;
    letter-spacing: 1px;
    text-shadow: 1px 1px 1px #000;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
