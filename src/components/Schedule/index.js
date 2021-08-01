import Image from 'next/image';
import styles from './Schedule.module.scss';

export default function Schedule() {
    const data = [
        { id: 1, hide: "", time: "09.00 - 10.00", level: "iniciante", name: "Getty Orawo + Okoth", type: "Abertura + Keynote", talk: "Adopting Elixir and Growing the Elixir Community Across Africa", hide2: "", name2: "", type2: "", talk2: "", level2: "" },
        { id: 2, hide: "", time: "10.10 - 10.50", level: "iniciante", name: "Thiago Henrique", type: "Palestra", talk: "Ingestão de dados com Elixir distribuido", hide2: "", name2: "Bernardo Amorim", type2: "Palestra", talk2: "Elixir sem Mix: Aprendendo a ferramenta ao tentar não utilizá-la", level2: "Avançado" },
        { id: 3, hide: "", time: "11.00 - 11.40", level: "iniciante", name: "Fernanda Bernardo", type: "Palestra", talk: "De Frontend à Tech Community Manager", hide2: "", name2: "Daniel Pilon", type2: "Palestra", talk2: "Diagnosticando Bugs em Produção com Elixir", level2: "Avançado" },
        { id: 4, hide: "", time: "11.50 - 12.30", level: "iniciante", name: "Adolfo Neto", type: "Palestra", talk: "As funções que não são funções (matemáticas) em Elixir", hide2: "", name2: "Pedro Cstilho", type2: "Palestra", talk2: "Evoluindo aplicações com OTP", level2: "Avançado" },
        { id: 5, hide: "", time: "12.40 - 13.10", level: "iniciante", name: "Getty + Okoth", type: "Ask me Anything", talk: "", hide2: "", name2: "TBD", type2: "Ask me Anything", talk2: "", level2: "Avançado" },
        { id: 6, hide: "", time: "13.20 - 14.10", level: "", name: "Brooklyn", type: "Keynote", talk: "TBD", hide2: "", name2: "", type2: "", talk2: "", level2: "" },
    ];
    return (
        <section className={styles.schedule}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Agenda</h3>
                        <div class="days-holder">

                            <a className={styles.daytrigger} data-toggle="collapse" href="#firstDay" role="button" aria-expanded="false" aria-controls="secondDay">
                                Dia 1 - 05 AG0 2021 - QUINTA
                            </a>

                            <div class="collapse show" id="firstDay">
                                <div class="card card-body">

                                    <table className={styles.tabcontent}>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p>Horário</p>
                                                </th>
                                                <th>
                                                    <p>Básico</p>
                                                </th>
                                                <th>
                                                    <p>Avançado</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item) => (
                                                <tr className={styles.bodyrow} key={item.id}>
                                                    <td>
                                                        <div className={styles.timeborder}>
                                                            <p className={styles.time}>
                                                                {item.time}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td className={item.hide}>
                                                        <p>
                                                            <a href="#" className={styles.dontbreakout}>
                                                                {item.name}
                                                            </a>
                                                        </p>
                                                        <p className={styles.heading, styles.headingmedium}>{item.type}</p>
                                                        <p className={styles.mono, styles.medium, styles.light, styles.pt00, styles.mt10}>{item.talk} </p>
                                                        <p className={styles.description, styles.mono, styles.medium, styles.light, styles.gray, styles.pt00, styles.mt10}></p>
                                                        <p className={styles.schedule, styles.grade, styles.gray, styles.mt10}>
                                                            {item.level}
                                                        </p>

                                                        <div className={styles.hashtags}>
                                                            <ul>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td className={item.hide2}>
                                                        <p>
                                                            <a href="#" className={styles.dontbreakout}>
                                                                {item.name2}
                                                            </a>
                                                        </p>
                                                        <p className={styles.heading, styles.headingmedium}>{item.type2}</p>
                                                        <p className={styles.mono, styles.medium, styles.light, styles.pt00, styles.mt10}>{item.talk2} </p>
                                                        <p className={styles.description, styles.mono, styles.medium, styles.light, styles.gray, styles.pt00, styles.mt10}></p>
                                                        <p className={styles.schedule, styles.grade, styles.gray, styles.mt10}>
                                                            {item.level2}
                                                        </p>

                                                        <div className={styles.hashtags}>
                                                            <ul>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            <a className={styles.daytrigger} data-toggle="collapse" href="#secondDay" role="button" aria-expanded="false" aria-controls="secondDay">
                                Dia 2 - 06 AG0 2021 - SEXTA
                            </a>
                            <div class="collapse show" id="secondDay">
                                <div class="card card-body">
                                    tabela 2
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                </div>
        </section>
    )
}
