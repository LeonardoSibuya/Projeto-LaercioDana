import styled from 'styled-components'

export const Header = styled.header`
  background-color: #79a473;
  padding: 16px 0 24px;
  box-shadow: 0 0 10px 1px;
  border-radius: 0px 0px 8px 8px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
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
      position: relative;

      a {
        :after {
          content: '';
          position: absolute;
          background-color: #fff;
          height: 2px;
          width: 0;
          left: 0;
          bottom: -5px;
          transition: 0.8s ease;
        }

        :hover {
          color: #fff;
          transition: 0.2s ease;
        }

        :hover:after {
          width: 100%;
        }
    }
  }
`
