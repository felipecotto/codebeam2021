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
            </div>
            <div class="col-md-7">
              <div class="main-section">
                <h1 class="xheading up thin">A CODE BEAM CHEGOU AO BRASIL</h1>
                <p class="thin">Com foco em Erlang, Elixir e outras tecnologias relacionadas à plataforma BEAM, as conferências da <a href="https://www.codesync.global/" target="_blank" class="neutral-link">Code Sync</a> acontecem há mais de 10 anos.</p>
                <p class="thin">Devido à COVID 19, os eventos físicos foram transferidos para um ambiente virtual, o que nos traz a oportunidade de criar um espaço ainda mais acessível, com a presença de pessoas de diferentes cidades do Brasil e do mundo.</p>
                <p class="thin">E é nesse cenário que a Code BEAM enfim chegou ao país de origem do Elixir! A primeira edição da Code BEAM BR aconteceu em 2020 e reuniu os principais nomes da comunidade Elixirlang e Erlang em um evento 100% online e pela primeira vez com palestras em português.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }