import React from 'react'
import * as S from './styles'

function HomeLayout() {
  return (
    <S.Container>
      <header>
        <p className="txt-header">
          Restam apenas
          <span> 3 Vagas </span>
          para ver o conteúdo dessa página.
        </p>
      </header>

      <img
        src="./images/banner.webp"
        alt="Sorriso Antes e depois de clareamento"
      />

      <a href="https://wa.me/5569984391965?text=VAGA+08+%7C+Ol%C3%A1+Dra.+Beatriz%2C+gostaria+de+marcar+meu+hor%C3%A1rio+para+fazer+meu+clareamento%21">
        <button>
          <img src="./images/clique.svg" alt="Icone Button Cliques" />
          AGENDAR AGORA
        </button>
      </a>
    </S.Container>
  )
}
export default HomeLayout
