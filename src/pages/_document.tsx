/* eslint-disable @next/next/no-title-in-document-head */
import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <title>Dra Beatriz | Dentista em Ji-Paraná</title>
        <meta
          name="description"
          content="Dra. Beatriz S Benitez | Clínica-Geral • Facetas • Limpeza • Clareamento • Restaurações • Cirurgias • Odontopediatria"
        />

        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="./images/logo.svg" type="image/svg" />

          <meta itemProp="name" content="Dra Beatriz | Dentista em Ji-Paraná" />
          <meta
            itemProp="description"
            content="Dra. Beatriz S Benitez | Clínica-Geral • Facetas • Limpeza • Clareamento • Restaurações • Cirurgias • Odontopediatria
"
          />
          <meta
            itemProp="image"
            content="https://scontent.fpbq1-1.fna.fbcdn.net/v/t39.30808-6/299192897_5331178360335883_5245899706644090382_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=J_eHKE2ZHpAAX_VqsYN&_nc_oc=AQlnEwOtb7Oyw3Q7a1EZ-S3ScXdvcYoLaZPiLmn-vw3bBxmw_xlJLXShDFo9ppWFiBE&_nc_ht=scontent.fpbq1-1.fna&oh=00_AT8pF6eeZDYiWqUMm9H23x1tR_F_pojR9nzP3_PrKnf4eA&oe=63363F23"
          />

          <meta property="og:url" content="https://www.dentistaemjipa.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Dra Beatriz | Dentista em Ji-Paraná"
          />
          <meta
            property="og:description"
            content="Dra. Beatriz S Benitez | Clínica-Geral • Facetas • Limpeza • Clareamento • Restaurações • Cirurgias • Odontopediatria
"
          />
          <meta
            property="og:image"
            content="https://scontent.fpbq1-1.fna.fbcdn.net/v/t39.30808-6/299192897_5331178360335883_5245899706644090382_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=J_eHKE2ZHpAAX_VqsYN&_nc_oc=AQlnEwOtb7Oyw3Q7a1EZ-S3ScXdvcYoLaZPiLmn-vw3bBxmw_xlJLXShDFo9ppWFiBE&_nc_ht=scontent.fpbq1-1.fna&oh=00_AT8pF6eeZDYiWqUMm9H23x1tR_F_pojR9nzP3_PrKnf4eA&oe=63363F23"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Dra Beatriz | Dentista em Ji-Paraná"
          />
          <meta
            name="twitter:description"
            content="Dra. Beatriz S Benitez | Clínica-Geral • Facetas • Limpeza • Clareamento • Restaurações • Cirurgias • Odontopediatria
"
          />
          <meta
            name="twitter:image"
            content="https://scontent.fpbq1-1.fna.fbcdn.net/v/t39.30808-6/299192897_5331178360335883_5245899706644090382_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=J_eHKE2ZHpAAX_VqsYN&_nc_oc=AQlnEwOtb7Oyw3Q7a1EZ-S3ScXdvcYoLaZPiLmn-vw3bBxmw_xlJLXShDFo9ppWFiBE&_nc_ht=scontent.fpbq1-1.fna&oh=00_AT8pF6eeZDYiWqUMm9H23x1tR_F_pojR9nzP3_PrKnf4eA&oe=63363F23"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
