import styled from 'styled-components'

export const divContainer = styled.div`
  padding-top: 160px;
`

export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-top: 24px;
  margin-bottom: 160px;
  gap: 36px;
`
export const ImageGrande = styled.li`
  text-align: center;
  background: linear-gradient(to bottom, rgba(46, 113, 36, 0.64), #a6c8a1);
  padding: 16px 0px;
  border-radius: 8px;
  max-width: 100%;
  margin-bottom: 8px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);

  img {
    max-width: 360px;
  }
`

export const ListImagePequena = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  li {
    text-align: center;
    background: linear-gradient(to bottom, rgba(46, 113, 36, 0.64), #a6c8a1);
    padding: 32px 0;
    border-radius: 8px;
    max-width: 100%;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);

    img {
      max-width: 240px;
    }
  }
`
export const InfoContent = styled.div`
  text-align: start;

  p {
    margin-bottom: 16px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;

    li {
      font-weight: bold;
    }
  }
`
export const Preco = styled.h3`
  font-size: 16px;
  margin: 16px 0 2px;
  color: #02ca02;
`
export const Parcela = styled.p`
  font-size: 12px;
  margin-bottom: 16px;
  color: cacaca;
  font-style: italic;
`
