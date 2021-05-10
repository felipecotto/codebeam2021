import styles from './Sponsors.module.scss';

export default function Sponsors() {
    return (
        <section className={styles.sponsors}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h3 className="heading up">Patrocínio</h3>
                    <h4 className="display up thin">Quer fazer parte deste projeto?</h4>
                    <p>Entre em contato através do nosso e-mail e conheça as nossas cotas especiais de patrocínio.</p>
                    <a href="mailto:contato@codebeambr.com" className="main-link">contato@codebeambr.com</a>
                </div>
                </div>
            </div>
        </section>
    )
  }