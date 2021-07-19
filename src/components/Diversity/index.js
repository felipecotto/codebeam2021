import styles from './Diversity.module.scss';

export default function Diversity() {
    return (
        <section className={styles.diversity}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h3 className="heading up">Diversidade e Inclusão</h3>
                    {/* <h4 className="display up thin">Quer fazer parte deste projeto?</h4> */}
                    <p>Estamos sempre procurando melhorar a diversidade das nossas conferências. 
                        Para ajudar a alcançar isso, nós e a EEF estamos fornecendo ingressos gratuitos para estudantes, 
                        grupos sub-representados em tecnologia ou pessoas que não poderiam arcar com o custo financeiro. 
                        As inscrições se encerram em 3 de agosto de 2021. </p>
                    <a href="" className="">inscreva-se</a>
                </div>
                </div>
            </div>
        </section>
    )
  }