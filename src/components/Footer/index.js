import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.brFlag}>
        🇧🇷
      </span>

      <div className="row">
        <div className="container">
          <div className="col-md-3">
            <h3>Realização</h3>
            <div className={styles.brandHolder}>
              <a href="https://codesync.global/" target="_blank">
                <img
                  className="image"
                  alt="Logo da Code Sync Global"
                  src="/footer/code-sync-brand.png"

                />
              </a>
              <a href="https://www.stone.com.br/?utm_source=code-beam-br&utm_medium=referral" target="_blank">
                <img
                  className="image"
                  alt="Logo da Stone"
                  src="/footer/logo-stone-white.png"
                />
              </a>
            </div>
          </div>

          <div className="col-md-3">


            <h3 className={styles.titledestaque}>Patrocínio</h3>
            <div className={styles.brandHolder}>


              <a href="https://www.betrybe.com/" target="_blank">
                <img className="image" src="/footer/betrybe.png" alt="Be trybe" />
              </a>
              <a href="https://xerpay.com.br/" target="_blank">
                <img className="image" src="/footer/xerpay.png" alt="Xerpay" />
              </a>
            </div>
          </div>


          <div className="col-md-3">
            <h3>Acessibilidade</h3>
            <div className={styles.brandHolder}>
              <a href="https://arvore.com.br/ " target="_blank">
                <img className="image" src="/footer/arvore_negativo.png" alt="Arvore" />

              </a>
            </div>
          </div>

          <div className="col-md-3">
            <h3>Diversidade</h3>
            <div className={styles.brandHolder}>
              <a href="https://www.erlef.org/" target="_blank">
                <img className="image" src="/footer/eef.png" alt="Logo da Erlang Ecosystem Foundation" />

              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="row">
        <div className="container">
          <div className={styles.contato}>


            <div className="col-md-6">
              <h3> Contato </h3>
              <a href="mailto:contato@codebeambr.com" className={styles.mainLink, styles.contactMail}>contato@codebeambr.com</a>
              <a href="https://www.codesync.global/about-us/#Conduct" className="main-link conduct">Código de conduta</a>
            </div>
            <div className="col-md-6">
              <h3> Mídia </h3>
              <div className={styles.socialNav}>
                <a href="https://twitter.com/CodeBEAMBR" className={styles.socialLink} target="_blank"><i className="icon icon-twitter"></i></a>
                <a href="https://twitter.com/CodeBEAMio" className={styles.socialLink, styles.alt} target="_blank"><i className="icon icon-twitter"></i></a>
                <a href="https://www.youtube.com/c/codesync" className={styles.socialLink} target="_blank"><i className="icon icon-youtube"></i></a>
                <a href="https://www.facebook.com/groups/CodeSyncIO/" className={styles.socialLink} target="_blank"><i className="icon icon-facebook"></i></a>
                <a href="https://www.instagram.com/codesyncglobal/" className={styles.socialLink} target="_blank"><i className="icon icon-instagram"></i></a>
                <a href="https://www.linkedin.com/company/code-sync/" className={styles.socialLink} target="_blank"><i className="icon icon-linkedin2"></i></a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </footer>

  )
}