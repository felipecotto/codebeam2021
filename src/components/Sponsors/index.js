import styles from './Sponsors.module.scss';

export default function Sponsors() {
    return (
        <section className={styles.sponsors}>
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <h3 class="heading up">Patrocínio</h3>
                    <h4 class="display up thin">Quer fazer parte deste projeto?</h4>
                    <p>Entre em contato através do nosso e-mail e conheça as nossas cotas especiais de patrocínio.</p>
                    <a href="mailto:contato@codebeambr.com" class="main-link">contato@codebeambr.com</a>
                </div>
                </div>
            </div>
        </section>
    )
  }