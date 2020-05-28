import Head from 'next/head'
import dynamic from 'next/dynamic'
import style from './index.module.css'
import plaidshirtSvg from './plaidshirt.svg'

const DynamicFooter = dynamic(() => import('./footer'))

export default function Home() {
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

      <DynamicFooter />
    </div>
  )
}
