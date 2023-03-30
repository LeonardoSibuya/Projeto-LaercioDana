import styled from 'styled-components'

import CarroBg from '../../images/carros/bg-carro-edit.jpg'

export const ContainerFooter = styled.div`
  background-image: url(${CarroBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 80px 0;
`
export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-around;

  img {
    max-width: 480px;
  }
`

export const InfoContent = styled.div`
  max-width: 480px;

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
`
