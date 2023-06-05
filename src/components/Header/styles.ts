import styled from 'styled-components'

export const HeaderContainer = styled.div`
  text-align: center;
  background-image: linear-gradient(to right, #0f151c, #0b0d0e);
  padding: 24px 0;
  color: #fff;
  position: relative;
  width: 680px;
  border-radius: 80px;
  margin: 0 auto;
  box-shadow: 0px 3px 6px #000;

  h1 {
    padding: 4px;
    width: 100%;
    max-width: 160px;
    text-align: center;
    margin: 0 auto;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    padding: 32px 40px 0;

    &.is-hidden {
      display: none;
    }

    img {
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
  }
`
