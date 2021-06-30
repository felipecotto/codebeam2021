import Image from 'next/image';
import styles from './Panels.module.scss';

export default function Panels() {
    const data = [
        { id: 1, name: "Adolfo Neto", job: "host do Elixir em Foco e professor @ UTFPR ", image: "/adolfo.jpg" },
        { id: 2, name: "Herminio Torres", job: "Criador do Elixercism, host do Elixir em Foco e e software developer @ Solfácil", image: "/herminio.jpg"  },
        { id: 3, name: "Matheus Pessanha", job: "host do Elixir em Foco e backend developer @ Solfácil", image: "/matheuspessanha.jpg" },
        { id: 4, name: "Cristine Guadelupe", job: "host do Elixir em Foco e developer @ Comadre", image: "/cristine.jpg" },
        { id: 5, name: "Elaine Naomi", job: "host do ElixirLab e software engineer @ TheRealReal", image: "/elaine.jpg" },
        { id: 6, name: "Juliana Helena", job: "host do ElixirLab e backend developer @ SumUP", image: "/juliana.jpg"},
        { id: 7, name: "Rachel Curioso", job: "host do ElixirLab e software consultant @ Erlang Solutions", image: "/rachel.jpg"},
    ];
    return (
        <section className={styles.panels}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Painel</h3>
                    </div>
                </div>
                <div className="row">
                    {data.map((item) => (
                        <div className="col-md-3 padding-custom" key={item.id}>
                            <div className={styles.panelsCard}>
                                <div className={styles.panelsCardImage}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={400}
                                        height={400}
                                    />
                                </div>
                                <div>
                                    <h2 className={styles.title}>{item.name}</h2>
                                    <h4 className={styles.subtitle}> {item.job}  </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
