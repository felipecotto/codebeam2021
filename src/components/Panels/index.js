import Image from 'next/image';
import styles from './Panels.module.scss';

export default function Panels() {

    return (
        <section className={styles.panels}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h3>Painel</h3>
                </div>
                </div>
                <div className="row">
                <div className="col-md-2 padding-custom">
                    <div className={styles.panelsCard}>
                        <Image
                        src="/JoseValim.jpg"
                        alt="Erick Shön"
                        width={400}
                        height={400}
                        />
                        <h2 className={styles.title}>José Valim</h2>
                        <h4 className={styles.subtitle}>Creator of Elixir / Chief Adoption Officer @ Dashbit  </h4>
                        <p className={styles.description}>Q&A Session</p>
                        <a href="https://codesync.global/speaker/jose-valim/" target="_blank">+ Mais</a>
                    </div>
                </div>
                <div className="col-md-2 padding-custom">
                    <div className={styles.panelsCard}>
                        <Image
                        src="/WillianFrantz.jpg"
                        alt="Erick Shön"
                        width={400}
                        height={400}
                        />
                        <h2 className={styles.title}>Willian Frantz</h2>
                        <h4 className={styles.subtitle}> Software Alchemist @ Trybe  </h4>
                        <p className={styles.description}>Meta-programação com Elixir</p>
                    </div>
                </div>
                <div className="col-md-2 padding-custom">
                    <div className={styles.panelsCard}>
                        <Image
                        src="/WillianFrantz.jpg"
                        alt="Erick Shön"
                        width={400}
                        height={400}
                        />
                        <h2 className={styles.title}>Willian Frantz</h2>
                        <h4 className={styles.subtitle}> Software Alchemist @ Trybe  </h4>
                        <p className={styles.description}>Meta-programação com Elixir</p>
                    </div>
                </div>
                <div className="col-md-2 padding-custom">
                    <div className={styles.panelsCard}>
                        <Image
                        src="/WillianFrantz.jpg"
                        alt="Erick Shön"
                        width={400}
                        height={400}
                        />
                        <h2 className={styles.title}>Willian Frantz</h2>
                        <h4 className={styles.subtitle}> Software Alchemist @ Trybe  </h4>
                        <p className={styles.description}>Meta-programação com Elixir</p>
                    </div>
                </div>
                <div className="col-md-2 padding-custom">
                    <div className={styles.panelsCard}>
                        <Image
                        src="/WillianFrantz.jpg"
                        alt="Erick Shön"
                        width={400}
                        height={400}
                        />
                        <h2 className={styles.title}>Willian Frantz</h2>
                        <h4 className={styles.subtitle}> Software Alchemist @ Trybe  </h4>
                        <p className={styles.description}>Meta-programação com Elixir</p>
                    </div>
                </div>
                </div>

            </div>
        </section>
    )
  }
