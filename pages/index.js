import Head from 'next/head'
import dynamic from 'next/dynamic'
import style from './index.module.css'
import PlaidShirtSVG from './plaidshirt.svg'

const DynamicFooter = dynamic(() => import('./footer'))

export default function Home() {
  return (
    <>
      <Head>
        <title>Plaid Shirt</title>
        <link rel="icon" href={PlaidShirtSVG} />
      </Head>

      <div className={style.container}>
        <header className={style.tartanHeader}></header>

        <main>
          <h1 className={style.title}>
            Plaid Shirt
            <img className={style.shirt} src={PlaidShirtSVG} alt="Plaid Shirt" />
          </h1>
        </main>

        <DynamicFooter />
      </div>
    </>
  )
}
