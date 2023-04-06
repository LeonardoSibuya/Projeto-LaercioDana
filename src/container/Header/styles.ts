import styled from 'styled-components'

import BgCarro from '../../images/carros/bg-carro-gimp-claro.jpg'

export const Header = styled.header`
  background: linear-gradient(
    to bottom,
    #ff000c,
    #fc2024,
    #fc494c,
    #ff5656,
    #ff7070,
    #ff9b9b
  );
  padding: 16px 0 0;
  background-repeat: no-repeat;
  background-position: right;
  box-shadow: 0 0 10px 1px;
  border-radius: 0 0px 8px 8px;

  @media (max-width: 1024px) {
    background-image: url(${BgCarro});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    h2 {
      color: #fff;
      padding-top: 6px;
    }

    p {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    background-image: url(${BgCarro});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    h2 {
      color: #fff;
      padding-top: 6px;
    }

    p {
      color: #fff;
    }
  }
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    background: linear-gradient(
      to bottom,
      #ff000c,
      #fc2024,
      #fc494c,
      #ff5656,
      #ff7070,
      #ff9b9b
    );
    padding: 8px 80px;
    margin: -1px auto 0px;
    z-index: 3;
    border-radius: 0 0px 8px 8px;
    position: fixed;
    top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    background: linear-gradient(
      to bottom,
      #ff000c,
      #fc2024,
      #fc494c,
      #ff5656,
      #ff7070,
      #ff9b9b
    );
    padding: 6px 36px;
    margin: -1px auto 0px;
    z-index: 3;
    border-radius: 0 0px 8px 8px;
    position: fixed;
    top: 0;
    left: 0;
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    font-family: teko, sans-serif;
    letter-spacing: 1px;
    color: #fff;
    text-shadow: 1px 1px 1px #000;

    @media (max-width: 1024px) {
      font-size: 16px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      padding: 0 6px;
      position: relative;

      a {
        :after {
          content: '';
          position: absolute;
          background-color: #fff;
          height: 2px;
          width: 0;
          left: 0;
          bottom: -5px;
          transition: 0.8s ease;
        }

        :hover {
          color: #fff;
          transition: 0.2s ease;
        }

        :hover:after {
          width: 100%;
        }
      }
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 480px;
    width: 100%;

    @media (max-width: 1024px) {
      display: none;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 24px 0;

  @media (max-width: 1024px) {
    display: block;
    text-align: center;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }

  p {
    margin-top: 12px;
    max-width: 300px;
  }

  a {
    margin-top: 16px;

    @media (max-width: 1024px) {
      background: linear-gradient(
        to bottom,
        #ff000c,
        #fc2024,
        #fc494c,
        #ff5656,
        #ff7070,
        #ff9b9b
      );
      text-shadow: 1px 1px 1px #000;
    }

    :hover {
      text-shadow: none;
    }

    @media (max-width: 768px) {
      background: linear-gradient(
        to bottom,
        #ff000c,
        #fc2024,
        #fc494c,
        #ff5656,
        #ff7070,
        #ff9b9b
      );
      text-shadow: 1px 1px 1px #000;
    }

    :hover {
      text-shadow: none;
    }
  }
`
