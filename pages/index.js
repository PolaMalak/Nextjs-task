import Head from 'next/head'
import News from '../components/News'

export default function Home({news}) {
  return (
    <div >
    {/* <Head>
      <title>Webdev news</title>
      <meta name='keywords' content='web development' />
    </Head>
     <h1>Welcome to home</h1> */}
     <News news={news}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(` http://80.240.21.204:1337/news?skip=12&limit=10`)
  const news = await res.json()
  return {
    props:{
      news
    }
  }
}