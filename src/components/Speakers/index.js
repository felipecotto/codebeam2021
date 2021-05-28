import styles from './Speakers.module.scss';

export default function Speakers() {
    return (
        <section className={styles.speakers}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h3>Palestrantes</h3>
                    <p>O Call4Papers está aberto! Submeta sua palestra e participe da segunda edição da Code BEAM BR! 
                        Não se preocupe com a sua localização, o evento será 100% online! Talks em português e 
                        em inglês são bem-vindas. ;)
                    </p>
                    <p className={styles.mb32}>
                    O Call4Papers ficará aberto até 23h59 GMT-3 do dia 11 de julho de 2021. 
                    </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScd1DdC5Nw0zuS0FaPwZW3zZRxyGwwMblBkfvI87N3qVXdaDw/viewform" target="_blank">inscreva-se aqui</a>
                </div>
                </div>
            </div>
        </section>
    )
  }