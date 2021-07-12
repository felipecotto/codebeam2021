import styles from './Speakers.module.scss';

export default function Speakers() {
    return (
        <section className={styles.speakers}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h3>Call4Papers</h3>
                    <p>O Call4Papers foi encerrado! Agradecemos a todas as pessoas que se inscreveram para palestrar em mais uma edição da Code BEAM BR. \o/ 
                    </p>
                    <p className={styles.mb32}>
                    O resultado será enviado em breve, cruzem os dedos! ;)
                    </p>
                    {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLScd1DdC5Nw0zuS0FaPwZW3zZRxyGwwMblBkfvI87N3qVXdaDw/viewform" target="_blank">inscreva-se aqui</a> */}
                </div>
                </div>
            </div>
        </section>
    )
  }