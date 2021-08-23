import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { BoxLaunchs, Launch, SeeMore, Title } from '../styles/home'
import { format } from 'date-fns'
import space from '../../public/imgs/space.png'
import { Countdown } from '../components/Countdown'

interface LaunchProps {
  nextLaunch: any;
  latestLaunch: any;
}

export default function Home (props: LaunchProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lançamentos Space X</title>
        <meta name="description" content="Lançamentos Space X" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/" passHref>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" height="80" fill="#fff" viewBox="-59.625 -12.15 516.75 72.9">
              <path d="M36 29.8H9.4v-6.6h34.3c-.9-2.8-3.8-5.4-8.9-5.4H9.9c-5.7 0-9 2.1-9 6.7v4.9c0 4 3.4 6.3 8.4 6.3h26.9v7H0c.9 3.8 3.8 5.8 9 5.8h27.1c5.7 0 8.5-2.2 8.5-6.9v-4.9c0-4.3-3.3-6.6-8.6-6.9zm54.3-11.9H57.5v30.7h9.3V36.8H91c6.7 0 10.4-2.3 10.4-7.7v-3.4c-.1-5-4.3-7.8-11.1-7.8zm3 9.8c0 2.2-.4 3.4-4 3.4H66.8l.1-8h22c4 0 4.5 1.2 4.5 3.3v1.3zm39 8.9h-19.8l-4.9 5.2h28.6l4.9 6.8h11l-23.7-32-5.6 6.9zm37.6-13.4h34.8c-.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5 0-8.8 1.8-8.8 6.7v17.2c0 4.9 4.3 6.7 8.8 6.7h26.3c6 0 8.1-1.7 9.1-5.8h-34.8zm75.6 10.2v-5.2h-28.1v20.4h41.5v-5.8h-32.1v-9.4zm-27.1-15.5h41.9v5.4h-41.9zm67.7 0h-14.6l17.2 12.6c2.5-1.7 5.4-3.5 8-5zm21.2 15.7c-2.5 1.7-5 3.6-7.4 5.4l13 9.5h14.7z"/>
              <path d="M397.5 0c-80 4.6-117 38.8-125.3 46.9l-1.7 1.6h14.8C325.3 8.4 382.8 1.3 397.5 0z"/>
            </svg>
          </a>
        </Link>
      </header>
      <main className="container">
        <Title>
          <h1 className="title">Próximo lançamento</h1>
        </Title>
        <BoxLaunchs>
          <Launch>
            <div className="info">
              <p className="name">Missão {props.nextLaunch.name}</p>
              <p>{format(new Date(props.nextLaunch.date), "dd/MM/yyyy")}</p>
            </div>
            <div className="launch">
              <Image alt="launch" src={space} />
              <Countdown date={props.nextLaunch.date}></Countdown>
            </div>
          </Launch>
        </BoxLaunchs>
        <SeeMore>
          <Link href="/proximos">Ver próximos lançamentos</Link>
        </SeeMore>
        <Title>
          <h2 className="title">Último lançamento</h2>
        </Title>
        <BoxLaunchs>
          <Launch>
            <div className="info">
              <p className="name">Missão {props.latestLaunch.name}</p>
              <p>{format(new Date(props.latestLaunch.date), "dd/MM/yyyy")}</p>
              <a target="_blank" rel="noreferrer" className="video" href={props.latestLaunch.video}>
                <button>Vídeo</button>
              </a>
            </div>
            <div className="image" style={{ backgroundImage: 'url("' + props.latestLaunch.images[0] + '")' }}></div>
          </Launch>
        </BoxLaunchs>
        <SeeMore>
          <Link href="/ultimos">Ver últimos lançamentos</Link>
        </SeeMore>
      </main>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>
  )
}

export async function getServerSideProps() {
  const resNext = await fetch('http://api-space-x.herokuapp.com/launches/next')
  const nextLaunch = await resNext.json()

  const resLatest = await fetch('http://api-space-x.herokuapp.com/launches/latest')
  const latestLaunch = await resLatest.json()
  
  return {
    props: {
      nextLaunch,
      latestLaunch
    },
  }
}