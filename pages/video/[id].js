import React from 'react'
import content from '../../db.json';
import Header from '../../src/components/Header';
import Head from 'next/head'
import styles from './Video.module.scss';
import Footer from '../../src/components/Footer';
import Sponsors from '../../src/components/Sponsors';
import Link from 'next/link';
import {  FacebookShareButton, LinkedinShareButton, TwitterShareButton, EmailShareButton } from 'react-share'
import { FacebookIcon, LinkedinIcon, TwitterIcon, EmailIcon } from 'react-share'

export default function Video(video) {
    console.log(video)
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

        <section className={styles.sectionVideos}>
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-8">
                <Link href="/">
                  <a className={styles.goToHome}> Voltar Para Home </a>
                </Link>
                <div className={styles.videoContainer}>
                <video width="100%" height="400" controls>
                  <source src={video.video.video} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                  <h2>{video.video.palestra}</h2>
                  <h3>{video.video.nome}</h3>
                  {/* <p>v{video.video.descricao}</p> */}
                </div>
                <div className={styles.socialShare}>
                  <p>Compartilhe</p>
                  <FacebookShareButton 
                    quote="Code Beam BR - A Code Beam chegou ao Brasil!"
                    url={`https://www.codebeambr.com/video/${video.video.id}`}>
                    <FacebookIcon size={48} round={true} round={false} bgStyle={{ fill : '#4EB913' }} />
                  </FacebookShareButton>
                  <LinkedinShareButton
                    title="Code Beam BR - A Code Beam chegou ao Brasil!"
                   url={`https://www.codebeambr.com/video/${video.video.id}`}>
                    <LinkedinIcon size={48} round={true} round={false} bgStyle={{ fill : '#4EB913' }} />
                  </LinkedinShareButton>
                  <TwitterShareButton 
                    title="Code Beam BR - A Code Beam chegou ao Brasil!" 
                    url={`https://www.codebeambr.com/video/${video.video.id}`}>
                    <TwitterIcon size={48} round={true} round={false} bgStyle={{ fill : '#4EB913' }} />
                  </TwitterShareButton>
                  <EmailShareButton url={`https://www.codebeambr.com/video/${video.video.id}`}>
                    <EmailIcon size={48} round={true} round={false} bgStyle={{ fill : '#4EB913' }} />
                  </EmailShareButton>
                </div>
              </div>
            </div>


          </div>
        </section>
        
        <Sponsors />
        <Footer />
      </>
    )
  }


  export async function getStaticProps({ params }) {
      const index = params.id - 1;
      const video = content[index];

      return {
        props: {
          video
        }
      }
  }

  export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '1'
                }
            },
            {
                params: {
                    id: '2'
                }
            },
            {
              params: {
                  id: '3'
              }
            },
            {
              params: {
                  id: '4'
              }
            },
            {
              params: {
                  id: '5'
              }
            },
            {
              params: {
                  id: '6'
              }
            },
            {
              params: {
                  id: '7'
              }
            },
            {
              params: {
                  id: '8'
              }
            },
            {
              params: {
                  id: '9'
              }
            },
            {
              params: {
                  id: '10'
              }
            },
            {
              params: {
                  id: '11'
              }
            },
            {
              params: {
                  id: '12'
              }
            },
            {
              params: {
                  id: '13'
              }
            },
            {
              params: {
                  id: '14'
              }
            },
            {
              params: {
                  id: '15'
              }
            },
            {
              params: {
                  id: '16'
              }
            },
            {
              params: {
                  id: '17'
              }
            },
            {
              params: {
                  id: '18'
              }
            },
        ],
        fallback: false,
    };
}

