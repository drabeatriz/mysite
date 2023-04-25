import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 720px;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 0 auto;

  background-image: url('./images/bg.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  header {
    width: 100%;
    background: #fe6983;
    min-height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    .txt-header {
      width: 90%;
      font-weight: 500;
      font-size: 16px;
      line-height: 120%;

      text-align: center;

      color: #ffffff;

      padding: 12px 0;

      span {
        font-weight: 700;
      }

      @media screen and (max-width: 264px) {
        font-size: 14px;
      }
      @media screen and (max-width: 164px) {
        font-size: 12px;
      }
    }
  }

  img {
    width: 100%;
  }

  a {
    width: 90%;
  }
  button {
    margin: 50px 0 100px 0;
    width: 100%;
    background: #fe6983;
    border: none;
    border-radius: 8px;

    font-weight: 700;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: 0.08em;

    text-align: center;

    color: #ffffff;

    padding: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    img {
      width: 32px;

      @media screen and (max-width: 360px) {
        width: 24px;
      }
      @media screen and (max-width: 260px) {
        width: 16px;
      }
    }

    @media screen and (max-width: 360px) {
      font-size: 16px;
      margin: 25px 0 50px 0;
    }
    @media screen and (max-width: 260px) {
      font-size: 14px;
    }
  }
`
