import React, { useState } from 'react';
import Head from 'next/head'
import VideoThumb from '../src/components/VideoThumb'
import HeroBanner from '../src/components/HeroBanner'
import Sponsors from '../src/components/Sponsors'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../src/styles/Home.module.scss'
import db from '../db.json';
import {  FacebookShareButton, LinkedinShareButton, TwitterShareButton, EmailShareButton } from 'react-share'
import { FacebookIcon, LinkedinIcon, TwitterIcon, EmailIcon } from 'react-share'

export default function Home(props) {
  const [limitVideos, setLimitVideos] = useState(8);
  console.log(limitVideos);
  return (
    <>
      <Head>
        <title>Code Beam BR - A Code Beam chegou ao Brasil!</title>
        <meta name="description" content="Temos o orgulho de anunciar que a Code BEAM enfim 
        chegou ao país de origem do Elixir! A primeira Code BEAM Brasil vai reunir os principais 
        nomes da comunidade Elixirlang e Erlang em um evento 100% online e pela primeira vez com 
        palestras em português." />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeroBanner />
      <section className={styles.postsContainer}>
        <div className="container">
          <div className={styles.title}>
            <h2>Edições Anteriores</h2>
            <h2>2020</h2>
          </div>
          
          <div className="row d-flex-wrap">
          {props.data.slice(0,limitVideos).map((project) => {
          return (
            <div className="col-md-3">
              <article className={styles.postsContainer__post} key={project.id}>
                <Link href={`/video/${encodeURIComponent(project.id)}`}>
                  <div style={{ marginBottom: '24px' }}>
                    <Image
                      src={project.img}
                      alt="Picture of the author"
                      width={500}
                      height={420}/>
                  </div>
                </Link>
                <Link href={`/video/${encodeURIComponent(project.id)}`}>
                  <a>{project.palestra}</a>
                </Link>
                <h4>{project.nome}</h4>
                <div className={styles.socialShare}>
                  <p>Compartilhe</p>
                  <FacebookShareButton 
                    quote="Code Beam BR - A Code Beam chegou ao Brasil!"
                    url={`https://www.codebeambr.com/video/${project.id}`}>
                    <FacebookIcon size={32} round={true} round={false} bgStyle={{ fill : '#4EB913' }} />
                  </FacebookShareButton>
                  <LinkedinShareButton
                    title="Code Beam BR - A Code Beam chegou ao Brasil!"
                   url={`https://www.codebeambr.com/video/${project.id}`}>
                    <LinkedinIcon size={32} round={true} round={false} bgStyle={{ fill : '#4EB913' }} />
                  </LinkedinShareButton>
                  <TwitterShareButton 
                    title="Code Beam BR - A Code Beam chegou ao Brasil!" 
                    url={`https://www.codebeambr.com/video/${project.id}`}>
                    <TwitterIcon size={32} round={true} round={false} bgStyle={{ fill : '#4EB913' }} />
                  </TwitterShareButton>
                  <EmailShareButton url={`https://www.codebeambr.com/video/${project.id}`}>
                    <EmailIcon size={32} round={true} round={false} bgStyle={{ fill : '#4EB913' }} />
                  </EmailShareButton>
                </div>
              </article>
            </div>
          )
        })}
          </div>
            {limitVideos <= 17 &&
              <div className={styles.ShowMore}>
              <button onClick={() => setLimitVideos(limitVideos + 4)}>
                Ver Mais
              </button>
              </div>
            } 
        </div>
      </section>
      <Sponsors />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const data = db
  return {
    props: {
      data
    }
  }
}

