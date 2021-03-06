import Image from 'next/image';
import styles from './Talks.module.scss';

export default function Talks() {
    const data = [
        { id: 1, name: "José Valim", job: "Creator of Elixir | Chief Adoption Officer @ Dashbit", image: "/talks/JoseValim.jpg" , talk: "Q&A Session", more: "https://codesync.global/speaker/jose-valim/"  },
        { id: 2, name: "Willian Frantz", job: "Software Alchemist @ Trybe", image: "/talks/WillianFrantz.jpg", talk: "Meta-programação com Elixir", more: ""  },
        { id: 3, name: "Thiago Henrique", job: "Tech Manager @ Semantix SA", image: "/talks/ThiagoHenrique.jpg", talk: "Ingestão de dados com Elixir distribuído", more: "" },
        { id: 4, name: "Fernanda Bernardo", job: "Tech Community Manager @ Comadre", image: "/talks/FernandaBernardo.jpg", talk: "De Frontend à Tech Community Manager", more: "" },
        { id: 5, name: "Guilherme Castro", job: "Senior Developer @ Trybe", image: "/talks/GuilhermeCastro.jpg", talk: "Por que e como construímos nosso Markdown parser em Elixir", more: "" },
        { id: 6, name: "Daniel Pilon", job: "Software Engineer @ SumUp", image: "/talks/DanielPilon.jpg", talk: "Diagnosticando bugs em produção com Elixir", more: "" },
        { id: 7, name: "Pedro Castilho", job: "CTO @ Comadre", image: "/talks/PedroCastilho.jpg", talk: "Evoluindo aplicações com OTP", more: "" },
        { id: 8, name: "Morôni Sauner", job: "Backend Developer @ Stone", image: "/talks/MoroniSauner.jpg", talk: "Testando sua aplicação com ExUnit", more: "" },
        { id: 9, name: "Adolfo Neto", job: "Host do Elixir em Foco | Professor @ UTFPR", image: "/talks/adolfo.jpg", talk: "As funções que não são funções (matemáticas) em Elixir", more: "" },
        { id: 10, name: "Bernardo Amorim", job: "Software Engineer @  Saltpay", image: "/talks/BernardoAmorim.jpg", talk: "Elixir sem Mix: Aprendendo a ferramenta ao tentar não utilizá-la", more: "https://codesync.global/speaker/bernardo-amorim/"},
        { id: 10, name: "Samanta de Araujo", job: "Developer Backend @ Árvore", image: "/talks/Samantadearaujo.jpg", talk: "Onboarding no ecossistema Elixir", more: ""}
    ];

    return (
        <section id="talks" className={styles.talks}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h3>Palestras e Q&A Sessions</h3>
                </div>
                </div>
                <div className="row">
                {data.map((item) => (
                <div className="col-md-3 padding-custom">
                    <div className={styles.talksCard}>
                        <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={400}
                        />
                        <h2 className={styles.title}> {item.name} </h2>
                        <h4 className={styles.subtitle}> {item.job} </h4>
                        <p className={styles.description}> {item.talk} </p>
                        {item.more.length > 0 && <a href={item.more} target="_blank">+ Mais</a>}
                    </div>
                </div>
                ))}
                </div>

            </div>
        </section>
    )
  }
