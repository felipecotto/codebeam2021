import Image from 'next/image';
import styles from './Talks.module.scss';

export default function Talks() {

    return (
        <section className={styles.talks}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h3>Call4Papers e Q&A Sessions</h3>
                </div>
                </div>
                <div className="row">
                <div className="col-md-3">
                    <div className={styles.talksCard}>
                        <Image
                        src="/JoseValim.jpg"
                        alt="Erick Shön"
                        width={200}
                        height={200}
                        />
                        <h2 className={styles.title}>José Valim</h2>
                        <h4 className={styles.subtitle}>Creator of Elixir / Chief Adoption Officer @ Dashbit  </h4>
                        <p className={styles.description}>Q&A Session</p>
                        <a href="https://codesync.global/speaker/jose-valim/" target="_blank">+ Mais</a>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
  }