import styled from 'styled-components'

import banner from '../../images/carros/opala-capo.jpg'
import { Colors, Container } from '../../styles'

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

  h2 {
    font-weight: bold;
    font-size: 56px;
    letter-spacing: 1px;
    font-family: 'Teko', sans-serif;
  }

  p {
    font-size: 16px;
    line-height: 22px;
    margin: 24px 0;
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
  }

  img {
    max-width: 36px;
    width: 100%;
  }
`
