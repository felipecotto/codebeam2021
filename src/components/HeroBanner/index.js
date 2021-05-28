import Image from 'next/image'
import styles from './Hero.module.scss';

export default function VideoThumb() {
  return (
    <section className={styles.hero}>
      <div class="container">
        <div class="row flex align-items-center">
          <div class="col-md-5">
            <Image
              alt="Logo - Code Beam BR"
              src="/code-beam-br.png"
              width={360}
              height={360}
            />
            <div class={styles.eventInfo}>
              <span class="heading up">5 e 6 de agosto de 2021</span>
              {/* <span class="heading up">09h às 13h GMT-3</span> */}
            </div>
          </div>
          <div class="col-md-7">
            <div class="main-section">
              <h1 class="xheading up thin uppercase">O principal evento do ecossistema Erlang está de volta ao Brasil</h1>
              <p class="thin">O país de origem do Elixir se prepara para a segunda edição da Code BEAM BR.</p>
              <p class="thin">Devido à situação da COVID 19 no país, o evento será 100% online mais uma vez, possibilitando a criação de um espaço seguro e mais acessível, com a presença de pessoas de diferentes cidades do Brasil e do mundo.</p>
              <p class="thin">Nos dias 5 e 6 de agosto de 2021, voltaremos a reunir os principais nomes da comunidade Elixir e Erlang, com a maior parte das palestras em português.</p>
              <p class="thin">O nosso Call4Papers já está aberto e a pré venda de ingressos iniciará em breve. Fiquem de olho nas nossas redes sociais. ;)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}