import styled from 'styled-components'

import FotoCarro from '../../images/carros/range.png'

export const Header = styled.header`
  background-color: rgba(46, 113, 36, 0.64);
  padding: 16px 0 0;
  background-image: url(${FotoCarro});
  background-repeat: no-repeat;
  background-position: right;
  box-shadow: 0 0 10px 1px;
  border-radius: 0 0px 8px 8px;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 20px;
    font-weight: bold;
    font-family: teko, sans-serif;
    letter-spacing: 1px;
    color: #fff;
    text-shadow: 1px 1px 1px #000;

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      padding: 0 6px;
    }
  }
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 24px 0;

  p {
    margin-top: 12px;
    max-width: 300px;
  }

  a {
    margin-top: 16px;
  }
`
