import * as S from './styles'

type MetodoProps = {
  image: string
  title: string
  description: string
}

export const Metodo = ({ image, title, description }: MetodoProps) => {
  return (
    <S.Wrapper data-aos="zoom-in-up">
      <img
        src={image}
        alt="Icone dos pilares da Summus Digital"
        className="iconer"
      />
      <p className="titlee" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="description">{description}</p>
    </S.Wrapper>
  )
}
