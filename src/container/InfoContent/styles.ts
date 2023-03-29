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

  li {
    padding: 24px 8px;
    border-radius: 8px;
    height: 200px;
    background-color: #cacaca;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);

    img {
      max-width: 160px;
      width: 100%;
      margin-bottom: 16px;
    }
  }
`
