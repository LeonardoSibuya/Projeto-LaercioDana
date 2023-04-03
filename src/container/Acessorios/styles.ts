import styled from 'styled-components'

export const Content = styled.div`
  h2 {
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 18px;

    :hover > :not(:hover) {
      filter: blur(3px);
    }

    li {
      max-width: 100%;
      margin-bottom: 24px;
      transition: 0.35s;
      cursor: pointer;

      :hover {
        scale: 1.1;
        transition: 0.35s;
      }

      a {
        text-decoration: none;
        transition: 0.35s;
      }

      img {
        max-width: 100%;
        text-align: center;
        background: linear-gradient(to left, #ed2e38, #feabb0);
        padding: 24px 0;
        border-radius: 8px;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.58);
      }
    }

    h3,
    h4 {
      padding-left: 8px;
    }

    h4 {
      font-size: 16px;
      color: #02ca02;
    }
  }
`
