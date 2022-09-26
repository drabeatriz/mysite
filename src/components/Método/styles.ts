import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  padding: 20px 0;
  gap: 16px;

  border-radius: 16px;

  width: 100%;
  max-width: 500px;

  .iconer {
    width: 56px;

    @media screen and (max-width: 1600px) {
      width: 50px;
    }
    @media screen and (max-width: 1269px) {
      width: 44px;
    }
    @media screen and (max-width: 1069px) {
      width: 38px;
    }
    @media screen and (max-width: 669px) {
      width: 32px;
    }
  }

  .titlee {
    font-weight: 700;
    font-size: 40px;
    line-height: 120%;
    color: #e1e1e1;
    span {
      color: #04d361;
    }

    @media screen and (max-width: 1600px) {
      font-size: 36px;
    }
    @media screen and (max-width: 1269px) {
      font-size: 32px;
    }
    @media screen and (max-width: 1069px) {
      font-size: 28px;
    }
  }

  .description {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    /* or 33px */

    color: rgba(255, 255, 255, 0.6);

    @media screen and (max-width: 1600px) {
      font-size: 17px;
    }
    @media screen and (max-width: 1269px) {
      font-size: 16px;
    }
    @media screen and (max-width: 1069px) {
      font-size: 14px;
    }
  }
`
