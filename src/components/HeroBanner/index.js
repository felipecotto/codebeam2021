import Image from 'next/image'
import styles from './Hero.module.scss';

export default function VideoThumb() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row flex align-items-center">
          <div className="col-md-5">
            <Image
              alt="Logo - Code Beam BR"
              src="/code-beam-br.png"
              width={360}
              height={360}
            />
            <div className={styles.eventInfo}>
              <span className="heading up">5 e 6 de agosto de 2021</span>
              <span className="heading up">09h - 14h GMT-3</span> 
            </div>
          </div>
          <div className="col-md-7">
            <div className="main-section">
              <h1 className="xheading up thin uppercase">O principal evento do ecossistema Erlang está de volta ao Brasil</h1>
              <p className="thin">O país de origem do Elixir se prepara para a segunda edição da Code BEAM BR.</p>
              <p className="thin">Devido à situação da COVID 19 no país, o evento será 100% online mais uma vez, possibilitando a criação de um espaço seguro e mais acessível, com a presença de pessoas de diferentes cidades do Brasil e do mundo.</p>
              <p className="thin">Nos dias 5 e 6 de agosto de 2021, voltaremos a reunir os principais nomes da comunidade Elixir e Erlang, com a maior parte das palestras em português.</p>
              <p className="thin">A nossa venda de ingressos e o Call4Papers já tão abertos! Fiquem de olho nas nossas redes sociais. ;)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}