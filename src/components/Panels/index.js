import Image from 'next/image';
import styles from './Panels.module.scss';

export default function Panels() {
    const data = [
        { id: 1, name: "Adolfo Neto", job: "Host do Elixir em Foco | Professor @ UTFPR ", image: "/panels/adolfo.jpg" },
        { id: 2, name: "Herminio Torres", job: "Host do Elixir em Foco | Criador do Elixercism | Software Developer @ Solfácil", image: "/panels/herminio.jpg"  },
        { id: 3, name: "Matheus Pessanha", job: "Host do Elixir em Foco | Backend Developer @ Solfácil", image: "/panels/matheuspessanha.jpg" },
        { id: 4, name: "Cristine Guadelupe", job: "Host do Elixir em Foco | Developer @ Comadre", image: "/panels/cristine.jpg" },
        { id: 5, name: "Elaine Naomi", job: "Host do ElixirLab | Software Engineer @ TheRealReal", image: "/panels/elaine.jpg" },
        { id: 6, name: "Juliana Helena", job: "Host do ElixirLab | Backend Developer @ SumUP ", image: "/panels/juliana.jpg"},
        { id: 7, name: "Rachel Curioso", job: "Host do ElixirLab | Software Consultant @ Erlang Solutions", image: "/panels/rachel.jpg"},
    ];
    return (
        <section id="panels"  className={styles.panels}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Painel</h3>
                        <h4>Disseminando Elixir para a comunidade: desafios e aprendizados</h4>
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
