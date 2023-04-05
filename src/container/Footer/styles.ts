import styled from 'styled-components'

import CarroBg from '../../images/carros/bg-carro-edit.jpg'

export const ContainerFooter = styled.div`
  background-image: url(${CarroBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 80px;

  @media (max-width: 768px) {
    padding-bottom: 40px;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`

export const ListCard = styled.ul`
  display: flex;
  gap: 6px;
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }

  li {
    flex: 1;
    overflow: hidden;
    transition: 0.5s;
    box-shadow: 0 4px 8px #ccc;
    border-radius: 8px;
    cursor: pointer;

    :hover {
      flex: 0 1 60%;
    }

    img {
      width: 200%;
      height: 260px;
      object-fit: cover;
      transition: 0.6s;

      @media (max-width: 768px) {
        height: 160px;
      }

      :hover {
        width: 100%;
      }
    }
  }
`

export const InfoContent = styled.div`
  max-width: 480px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  p {
    margin-top: 12px;
    font-weight: bold;
    background-color: rgba(202, 202, 202, 0.33);
  }

  ul {
    margin-top: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    li {
      padding: 8px 0;

      @media (max-width: 768px) {
        font-size: 10px;
      }
    }
  }

  a {
    margin-top: 12px;
  }
`

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`
