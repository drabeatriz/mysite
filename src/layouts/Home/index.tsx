import React from 'react'
import * as S from './styles'

function HomeLayout() {
  return (
    <S.Container>
      <img src="./images/odonto.png" alt="Logo dra beatriz" />
      <a href="https://wa.me/5569984391965?text=VAGA+08+%7C+Ol%C3%A1+Dra.+Beatriz%2C+gostaria+de+marcar+meu+hor%C3%A1rio+para+fazer+meu+clareamento%21">
        <button>
          <img src="./images/clique.svg" alt="Icone Button Cliques" />
          AGENDE AGORAS
        </button>
      </a>
    </S.Container>
  )
}
export default HomeLayout
