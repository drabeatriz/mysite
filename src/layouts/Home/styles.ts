import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  max-width: 720px;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;

  background-image: url('./images/bg.webp');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;

  &:before {
    content: '';
    position: absolute;

    width: 100%;
    height: 100%;

    pointer-events: none;

    top: 0;
    left: 0;
    z-index: 1;

    background: rgba(0, 0, 0, 0.6);
  }

  img {
    width: 90%;
    z-index: 99;
  }

  a {
    z-index: 99;
    width: 90%;
  }
  button {
    margin: 50px 0 100px 0;
    width: 100%;
    background: #da989b;
    border: none;
    border-radius: 8px;
    z-index: 99;
    cursor: pointer;
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
