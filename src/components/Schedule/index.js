import Image from 'next/image';
import styles from './Schedule.module.scss';


export default function Schedule() {
    const data = [
        { id: 1, mergecol: "2", time: "09.00 - 10.00", level: "", name: "GETTY ORAWO E OKOTH KONGO", type: "Keynote", talk: "Adopting Elixir and Growing the Elixir Community Across Africa", mergecol2: "displaynone", name2: "", type2: "", talk2: "", level2: "" },
        { id: 2, mergecol: "", time: "10.10 - 10.50", level: "Iniciante", name: "Thiago Henrique", type: "", talk: "Ingestão de dados com Elixir distribuido", mergecol2: "", name2: "Bernardo Amorim", type2: "", talk2: "Elixir sem Mix: Aprendendo a ferramenta ao tentar não utilizá-la", level2: "Intermediário / Avançado" },
        { id: 3, mergecol: "", time: "11.00 - 11.40", level: "Iniciante", name: "Fernanda Bernardo", type: "", talk: "De Frontend à Tech Community Manager", mergecol2: "", name2: "Daniel Pilon", type2: "", talk2: "Diagnosticando Bugs em Produção com Elixir", level2: "Intermediário / Avançado" },
        { id: 4, mergecol: "", time: "11.50 - 12.30", level: "Iniciante", name: "Adolfo Neto", type: "", talk: "As funções que não são funções (matemáticas) em Elixir", mergecol2: "", name2: "Pedro Castilho", type2: "", talk2: "Evoluindo aplicações com OTP", level2: "Intermediário / Avançado" },
        { id: 5, mergecol: "2", time: "12.40 - 13.10", level: "", name: "GETTY ORAWO E OKOTH KONGO", type: "Ask me Anything", talk: "", mergecol2: "displaynone", name2: "", type2: "", talk2: "", level2: "" },
        { id: 6, mergecol: "2", time: "13.20 - 14.10", level: "", name: "BROOKLYN ZELENKA", type: "Keynote", talk: "Living on the edge", mergecol2: "displaynone", name2: "", type2: "", talk2: "", level2: "" },
    ];
    const data2 = [
        { id: 1, mergecolx: "2", time: "09.00 - 09.50", level: "", name: "Erick Schön", type: "Keynote", talk: "What can Fintech learn from Telecom", mergecolx2: "displaynone", name2: "", type2: "", talk2: "", level2: "" },
        { id: 2, mergecolx: "2", time: "10.00 - 10.30", level: "", name: "José Valim", type: "Ask me Anything", talk: "", mergecolx2: "displaynone", name2: "", type2: "", talk2: "", level2: "" },
        { id: 3, mergecolx: "", time: "10.40 - 11.20", level: "Iniciante", name: "Morôni Sauner", type: "", talk: "Testando sua aplicação com ExUnit", mergecolx2: "", name2: "Willian Frantz", type2: "", talk2: "Meta programação com Elixir", level2: "Intermediário / Avançado" },
        { id: 4, mergecolx: "2", time: "11.30 - 12.10", level: "Iniciante", name: "Elixir lab + Elixir em Foco", type: "Painel", talk: "Disseminando Elixir para a comunidade: desafios e aprendizados", mergecolx2: "displaynone", name2: "", type2: "", talk2: "", level2: "" },
        { id: 5, mergecolx: "", time: "12.20 - 13.00", level: "Iniciante", name: "Guilherme Castro", type: "", talk: "Porque e como construimos markdown parser em Elixir", mergecolx2: "", name2: "Samanta de Araujo", type2: "", talk2: "Onboarding no Ecossistema Elixir", level2: "Iniciante" },
        { id: 6, mergecolx: "2", time: "13.10 - 14.00", level: "", name: "Robert Virding e Mariano Guerra", type: "Keynote", talk: "The platform of the system", mergecolx2: "displaynone", name2: "", type2: "", talk2: "", level2: "" },
    ];
    return (
        <section id="schedule" className={styles.schedule}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Agenda</h3>
                        <div className="days-holder">

                            <a className={styles.daytrigger} data-toggle="collapse" href="#firstDay" role="button" aria-expanded="false" aria-controls="secondDay">
                                Dia 1 - 05 AG0 2021 - QUINTA
                            </a>

                            <div className="collapse show" id="firstDay">
                                <div className="card card-body">

                                    <table className={styles.tabcontent}>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p>Horário</p>
                                                </th>
                                                <th>
                                                    <p>Track 1</p>
                                                </th>
                                                <th>
                                                    <p>Track 2</p>
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
                                                    <td colspan={item.mergecol}>
                                                      {/*** colspan={item.mergecol} */}

                                                    <div className={styles.verticalborder}>

                                                        <p className={styles.name}>
                                                            {item.name}
                                                        </p>
                                                        <p className={styles.heading, styles.headingmedium}>{item.type}</p>
                                                        <p className={styles.mono, styles.medium, styles.light, styles.pt00, styles.mt10}>{item.talk} </p>
                                                        <p className={styles.gray}>
                                                                {item.level}
                                                        </p>

                                                       
                                                        </div>
                                                    </td>
                                                    <td className={item.mergecol2}>
                                                        <p className={styles.name}>
                                                            {item.name2}
                                                        </p>
                                                        <p className={styles.heading, styles.headingmedium}>{item.type2}</p>
                                                        <p className={styles.mono, styles.medium, styles.light, styles.pt00, styles.mt10}>{item.talk2} </p>
                                                        <p className={styles.gray}>
                                                            {item.level2}
                                                        </p>
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
                            <div className="collapse show" id="secondDay">
                                <div class="card card-body">

                                    <table className={styles.tabcontent}>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <p>Horário</p>
                                                </th>
                                                <th>
                                                    <p>Track 1</p>
                                                </th>
                                                <th>
                                                    <p>Track 2</p>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data2.map((item) => (
                                                <tr className={styles.bodyrow} key={item.id}>
                                                    <td>
                                                        <div className={styles.timeborder}>
                                                            <p className={styles.time}>
                                                                {item.time}
                                                            </p>
                                                        </div>
                                                    </td>
                                                    <td colspan={item.mergecolx}>
                                                        <div className={styles.verticalborder}>

                                                            <p className={styles.name}>
                                                                {item.name}
                                                            </p>
                                                            <p className={styles.heading, styles.headingmedium}>{item.type}</p>
                                                            <p className={styles.mono, styles.medium, styles.light, styles.pt00, styles.mt10}>{item.talk} </p>
                                                            <p className={styles.gray}>
                                                                {item.level}
                                                            </p>
                                                        </div>

                                                    </td>
                                                    <td className={item.mergecolx2}>
                                                        <p className={styles.name}>
                                                            {item.name2}
                                                        </p>
                                                        <p className={styles.heading, styles.headingmedium}>{item.type2}</p>
                                                        <p className={styles.mono, styles.medium, styles.light, styles.pt00, styles.mt10}>{item.talk2} </p>
                                                        <p className={styles.gray}>
                                                            {item.level2}
                                                        </p>
                                                    </td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
