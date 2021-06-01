import styles from './Tickets.module.scss';

export default function Tickets() {
    return (
        <section className={styles.tickets}>
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                        <h3> Ingressos </h3>
                        <p>Os ingressos para a edição 2021 já estão à venda! Garanta já o seu ;)</p>
                        <div 
                        id="sympla-widget-1202471" 
                        height="auto" 
                        style={{ maxWidth: 600 }}>
                        <iframe 
                            src="https://www.sympla.com.br/tickets-grid-widget?eid=1202471&amp;lang=pt" 
                            id="symplaw" frameborder="0" vspace="0" hspace="0" marginheight="0" marginwidth="5" 
                            style={{ "width": "100%", height: 249 }}>
                        </iframe>
                    </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


