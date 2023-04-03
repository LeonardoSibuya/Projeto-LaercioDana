import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-top: 80px;

  p {
    max-width: 400px;
    margin-top: 12px;
  }

  a {
    margin-top: 16px;
  }
`
export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  text-align: center;
  position: relative;

  li {
    padding: 24px 8px;
    border-radius: 8px;
    background: linear-gradient(to left, #ed2e38, #feabb0);
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);

    h3 {
      margin-bottom: 16px;
    }

    img {
      max-width: 160px;
      width: 100%;
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

  &:hover {
    background-color: #fff;
    box-shadow: 1px 1px 4px #000;
    color: #000;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 8px;
  }
`
