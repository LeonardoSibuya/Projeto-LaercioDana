import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-top: 80px;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }

  p {
    max-width: 400px;
    margin-top: 12px;

    @media (max-width: 768px) {
      max-width: 100%;
      margin-top: 12px;
    }
  }

  a {
    margin-top: 16px;

    @media (max-width: 768px) {
      margin-bottom: 32px;
    }
  }
`
export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    align-items: center;
    margin: 0 auto;
  }

  :hover > :not(:hover) {
    filter: blur(1.8px);

    @media (max-width: 768px) {
      filter: none;
    }
  }

  li {
    height: 200px;
    max-width: 180px;
    transition: 0.35s;
    cursor: pointer;

    @media (max-width: 768px) {
      margin: 0 auto 32px;
    }

    :hover {
      scale: 1.1;
      transition: 0.35s;
    }
`

export const LinkImg = styled(Link)`
  text-decoration: none;
  transition: 0.35s;

  img {
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);
    border-radius: 8px;

    @media (max-width: 768px) {
      width: 160px;
      height: 160px;
      margin-top: 8px;
    }
  }

  h3 {
    font-size: 16px;
    padding: 0;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`

export const ButtonProduto = styled(Link)`
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
  transition: 0.3s ease;
  letter-spacing: 1px;
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
    font-size: 12px;
  }
`
