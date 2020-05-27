import Head from 'next/head'
import style from './index.module.css'
import plaidshirtSvg from './plaidshirt.svg'

export default function Home() {
  const date = new Date().getFullYear()

  return (
    <div className={style.container}>
      <Head>
        <title>Plaid Shirt</title>
        <link rel="icon" href={plaidshirtSvg} />
      </Head>

      <header className={style.tartanHeader}></header>

      <main>
        <h1 className={style.title}>
          Plaid Shirt
          <img className={style.shirt} src={plaidshirtSvg} alt="Plaid Shirt" />
        </h1>
      </main>

      <footer>
        Hello {date}.
      </footer>
    </div>
  )
}
