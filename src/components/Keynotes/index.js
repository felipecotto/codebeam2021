import Image from 'next/image';
import styles from './Keynotes.module.scss';

export default function Keynotes() {

    return (
        <section className={styles.keynotes}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h3>Keynotes</h3>
                </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                    <div className={styles.keynoteCard}>
                        <Image
                        src="/PhotoErikSchon.jpg"
                        alt="Erick Shön"
                        width={500}
                        height={500}
                        />
                        <h2 className={styles.title}>Erik Shön</h2>
                        <h4 className={styles.subtitle}>Managing Director @ Erlang Solutions Nordic </h4>
                        <p className={styles.description}> What Can Fintech Learn from Telecom? What Are the Jobs to Be Done and What's the Right Tool For the Job?</p>
                    </div>
                </div>
                <div className="col-md-4 col-md-offset-1">
                <div className="coming-soon">
                            <h4>Em breve, mais participações confirmadas!</h4> 
                        </div>
                </div>
                </div>

            </div>
        </section>
    )
  }