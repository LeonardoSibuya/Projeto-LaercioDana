import styled from 'styled-components'

import banner from '../../images/carros/opala-capo.jpg'
import { Colors, Container, breakpoints } from '../../styles'

export const BannerContent = styled.div`
  background-image: url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 640px;
  position: relative;
  padding-top: 32px;
  box-shadow: 0px 4px 8px #000;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.9;
  }

  ${Container} {
    position: relative;
    z-index: 1;
  }
`
export const Content = styled.div`
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 80px auto;
  max-width: 100%;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 60px auto;
  }

  h2 {
    font-weight: bold;
    font-size: 56px;
    letter-spacing: 1px;
    font-family: 'Teko', sans-serif;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 40px;
      max-width: 100%;
      width: 70%;
    }

    @media (max-width: ${breakpoints.celphone}) {
      font-size: 32px;
      width: 100%;
    }
  }

  p {
    font-size: 16px;
    line-height: 22px;
    margin: 24px 0;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 100%;
      width: 80%;
    }

    @media (max-width: ${breakpoints.celphone}) {
      width: 100%;
      font-size: 12px;
    }
  }
`

export const MenuHamburguer = styled.div`
  position: absolute;
  top: 32;
  left: 0;
  z-index: 1;
  width: 32px;
  height: 32px;
  color: #fff;
  padding-left: 32px;
`
export const ListIcons = styled.ul`
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
  }

  img {
    max-width: 36px;
    width: 100%;
  }
`
