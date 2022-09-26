import styled from 'styled-components'

export const Container = styled.section`
  width: 80%;
  max-width: 1440px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`
