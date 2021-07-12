import Image from 'next/image';
import styles from './Keynotes.module.scss';

export default function Keynotes() {
    const data = [
        { 
            id: 1, 
            name: "Erik Shön", 
            job: "Managing Director @ Erlang Solutions Nordic", 
            description: "What Can Fintech Learn from Telecom? What Are the Jobs to Be Done and What's the Right Tool For the Job?",
            image: "/PhotoErikSchon.jpg",
            showMore: ""
        },
        { 
            id: 2, 
            name: "Robert Virding", 
            job: "Erlang Co-creator | Senior Systems Architect @ Erlang Solutions", 
            description: "The Platform of the System",
            image: "/RobertVirding.jpg",
            showMore: "https://codesync.global/speaker/robert-virding/"
        },
        { 
            id: 3, 
            name: "Mariano Guerra", 
            job: "Co-founder @ Instadeq", 
            description: "The Platform of the System",
            image: "/MarianoGuerra.jpg",
            showMore: "https://codesync.global/speaker/mariano-guerra/"
        },
        {
            id: 4,
            name: "Getty Orawo",
            job: "GirlsGetGeeky Founder  | Elixir/BEAM Africa Coordinator | Software Engineer @ SokowatchGirls",
            description: "Adopting Elixir and Growing the Elixir Community Across Africa",
            image: "/GettyOrawo.jpg",      
            showMore: ""
        },
        {
            id: 5,
            name: "Okoth Kongo",
            job: "Tech Evangelist @ Beam Kenya and  ElixirConfAfrica ",
            description: "Adopting Elixir and Growing the Elixir Community Across Africa",
            image: "/OkothKongo.jpg",      
            showMore: ""
        }
    ];
    return (
        <section className={styles.keynotes}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h3>Keynotes</h3>
                </div>
                </div>
                <div className="row">
                {data.map((item) => (
                <div className="col-md-4">
                    <div className={styles.keynoteCard} key={item.id}>
                        <Image
                        src={item.image}
                        alt={item.name}
                        width={500}
                        height={500}
                        />
                        <div>
                            <h2 className={styles.title}>{item.name}</h2>
                            <h4 className={styles.subtitle}> {item.job} </h4>
                            <p className={styles.description}> {item.description}</p>
                        </div>
                        {item.showMore.length > 0 && <a href={item.showMore} target="_blank">+ Mais</a>}
                    </div>
                </div>
                ))}
                                {/* <div className="col-md-3 padding-custom">
                <div className="coming-soon">
                            <h4>Em breve, mais participações confirmadas!</h4> 
                        </div>
                </div> */}
                </div>

            </div>
        </section>
    )
  }