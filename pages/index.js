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
import Tickets from '../src/components/Tickets';
import Keynotes from '../src/components/Keynotes';
import Talks from '../src/components/Talks';
import Panels from '../src/components/Panels';
import Schedule from '../src/components/Schedule';


export default function Home(props) {
  const [limitVideos, setLimitVideos] = useState(8);
  console.log(limitVideos);
  return (
    <>
      <Head>
        <title>Code BEAM BR - A Code BEAM chegou ao Brasil!</title>
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


      
  
        <section id="schedule" className={styles.schedule}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Agenda</h3>
                        <div className="days-holder">

                            <a className="daytrigger" data-toggle="collapse" href="#firstDay" role="button" aria-expanded="false" aria-controls="secondDay">
                                Dia 1 - 05 AG0 2021 - QUINTA
                            </a>

                            <div className="collapse show" id="firstDay">
                                <div className="card card-body">

                                    <table className={styles.tabcontent}>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p>Horário</p>
                                                </th>
                                                <th>
                                                    <p>Track 1</p>
                                                </th>
                                                <th>
                                                    <p>Track 2</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          
                                                <tr className={styles.bodyrow}>
                                                    <td>
                                                        <div className={styles.timeborder}>
                                                            <p className={styles.time}>
                                                                09.00 - 10.00
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className={styles.aligntop}>
                                                    <div className={styles.verticalborder}>

                                                        <p className={styles.name}>
                                                            nome aqui
                                                        </p>
                                                        <p className={styles.heading, styles.headingmedium}>keynote</p>
                                                        <p className={styles.mono, styles.medium, styles.light, styles.pt00, styles.mt10}>palestra maneira</p>
                                                        <p className={styles.gray}>
                                                                iniciante
                                                        </p>

                                                       
                                                        </div>
                                                    </td>
                                                    <td className={styles.aligntop}>
                                                        <p className={styles.name}>
                                                            outro nome
                                                        </p>
                                                        <p className={styles.heading, styles.headingmedium}>palestra</p>
                                                        <p className={styles.mono, styles.medium, styles.light, styles.pt00, styles.mt10}> palestra mais maneira ainda </p>
                                                        <p className={styles.gray}>
                                                            iniciante
                                                        </p>
                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            <a className="daytrigger" data-toggle="collapse" href="#secondDay" role="button" aria-expanded="false" aria-controls="secondDay">
                                Dia 2 - 06 AG0 2021 - SEXTA
                            </a>
                            <div className="collapse show" id="secondDay">
                                <div class="card card-body">

                                    <table className={styles.tabcontent}>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p>Horário</p>
                                                </th>
                                                <th>
                                                    <p>Track 1</p>
                                                </th>
                                                <th>
                                                    <p>Track 2</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                                <tr className={styles.bodyrow}>
                                                    <td>
                                                        <div className={styles.timeborder}>
                                                            <p className={styles.time}>
                                                                09.00 - 10.00
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className={styles.aligntop}>
                                                        <div className={styles.verticalborder}>

                                                            <p className={styles.name}>
                                                                thais
                                                            </p>
                                                            <p className={styles.heading, styles.headingmedium}>Palestra foda</p>
                                                            <p className={styles.mono, styles.medium, styles.light, styles.pt00, styles.mt10}> unica palestra </p>
                                                            <p className={styles.gray}>
                                                                avançado
                                                            </p>
                                                        </div>

                                                    </td>
                                                    <td className={styles.aligntop}>
                                                        <p className={styles.name}>
                                                            thais
                                                        </p>
                                                        <p className={styles.heading, styles.headingmedium}>esporro</p>
                                                        <p className={styles.mono, styles.medium, styles.light, styles.pt00, styles.mt10}>aprenda fazendo </p>
                                                        <p className={styles.gray}>
                                                            iniciante
                                                        </p>
                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}






      <HeroBanner />
      <Keynotes />
      <Talks />
      <Panels />
      <Schedule />
      <Tickets />
      <Sponsors />
      <Footer />
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
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
