import styled from 'styled-components'

export const DivContent = styled.div`
  padding-top: 160px;

  @media (max-width: 768px) {
    padding-top: 80px;
  }

  h2 {
    text-align: center;
    margin-bottom: 24px;
  }

  h3 {
    margin-bottom: 12px;

    @media (max-width: 1024px) {
      text-align: center;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  }
`

export const ManualContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 46px;
  margin-bottom: 160px;
  height: 660px;

  @media (max-width: 1024px) {
    display: block;
    margin: 0 auto 560px;
    height: 400px;
  }

  @media (max-width: 768px) {
    display: block;
    height: 400px;
    margin-bottom: 340px;
  }
`

export const DivImage = styled.div`
  max-width: 100%;

  @media (max-width: 1024px) {
    width: 100%;
    max-height: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  img {
    width: 520px;
    height: 100%;

    @media (max-width: 1024px) {
      max-width: 100%;
      max-height: 100%;
      display: block;
      text-align: center;
      margin: 32px auto 0;
      }

    @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    display: block;
    text-align: center;
    margin: 24px auto 0;
    }

    transition: 0.5s;
        cursor: pointer;

        :hover {
          scale: 1.1;
          transition: 0.5s;
        }
      }
  }
`

export const TabelaContainer = styled.div`
  overflow-y: scroll;
  max-height: 100%;
  position: relative;
  border: 1px solid #666666;
  border-radius: 8px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  ::-webkit-scrollbar {
    width: 8px;
    border: 1px solid #000;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #666666;
    border: 1px solid #000;
    border-radius: 8px;
  }
`

export const Tabela = styled.table`
  text-align: center;
  max-width: 100%;
  overflow-x: scroll;
  position: relative;

  @media (max-width: 1024px) {
    width: 100%;
  }

  thead {
    position: sticky;
    width: 100%;
    top: 0;
    left: 0;

    tr {
      padding: 8px 0;
      background-color: #fff;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #000;

      @media (max-width: 1024px) {
        padding: 12px 4px;
      }

      @media (max-width: 768px) {
        padding: 8px 4px;
      }
    }

    th {
      font-weight: bold;
      font-size: 16px;
      width: 100%;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }

  tbody {
    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 0;

      :nth-child(even) {
        background-color: #8080804d;
      }

      td {
        padding: 0 6px;
        font-size: 12px;
        width: 100%;

        @media (max-width: 768px) {
          font-size: 10px;
          padding: 0 4px;
        }
      }
    }
  }
`
