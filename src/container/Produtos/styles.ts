import styled from 'styled-components'

export const divContainer = styled.div`
  padding-top: 160px;

  @media (max-width: 1024px) {
    padding-top: 80px;

    h2 {
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    padding-top: 80px;

    h2 {
      text-align: center;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 160px;
  gap: 36px;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 80px;
  }

  div {
    width: 100%;
  }
`

export const ImageGrande = styled.li`
  text-align: center;
  background: linear-gradient(to bottom, #fc3a3a, #f96868, #ff7a7a, #eee);
  padding: 16px 0px;
  border-radius: 8px;
  max-width: 100%;
  height: 160px;
  margin-bottom: 16px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);

  @media (max-width: 1024px) {
    padding: 6px 0px;
    height: 160px;
  }

  @media (max-width: 768px) {
    padding: 8px 0px;
    height: 120px;
  }

  img {
    width: 400px;
    height: 100%;
    transition: 0.5s;
    cursor: pointer;

    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      max-width: 90%;
    }

    :hover {
      scale: 1.1;
      transition: 0.5s;
    }
  }
`

export const ListImagePequena = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  li {
    text-align: center;
    background: linear-gradient(to bottom, #fc3a3a, #f96868, #ff7a7a, #eee);
    padding: 16px 0px;
    border-radius: 8px;
    max-width: 100%;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);
    height: 160px;

    @media (max-width: 1024px) {
      padding: 6px 0px;
      height: 160px;
    }

    @media (max-width: 768px) {
      padding: 8px 0px;
      height: 120px;
    }

    img {
      width: 80%;
      height: 100%;
      padding: 0px;
      transition: 0.5s;
      cursor: pointer;

      :hover {
        scale: 1.1;
        transition: 0.35s;
      }
    }
  }
`
export const InfoContent = styled.div`
  text-align: start;

  a {
    margin-top: 16px;
  }

  @media (max-width: 1024px) {
    text-align: center;
    margin-top: 24px;

    a {
      margin-bottom: 16px;
    }

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 24px;

    a {
      margin-bottom: 16px;
    }
  }

  p {
    margin-bottom: 16px;
  }
`
export const ListInfo = styled.ul`
margin-top: 12px;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 12px;

li {
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 12px;
}
`

export const Preco = styled.h3`
  font-size: 16px;
  margin: 16px 0 2px;
  color: #02ca02;
`
export const Parcela = styled.p`
  font-size: 12px;
  color: cacaca;
  font-style: italic;
`
