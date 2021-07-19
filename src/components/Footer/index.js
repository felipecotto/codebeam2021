import styles from './Footer.module.scss';
import Image from 'next/image'

export default function Footer() {
    return (
    <footer className={styles.footer}>
      <span className={styles.brFlag}>
        🇧🇷
      </span>
      <div className="container">
        <div className="row">

          <div className="col-md-3">
            <h3>Realização</h3>
            <div className={styles.brandHolder}>
              <a href="https://codesync.global/" target="_blank">
                <Image 
                  alt="Logo da Code Sync Global"  
                  src="/code-sync-brand.png"
                  width={120}
                  height={71}
                />
              </a>
              <a href="https://www.stone.com.br/?utm_source=code-beam-br&utm_medium=referral" target="_blank">
                <Image 
                  alt="Logo da Stone"
                  src="/logo-stone-white.png" 
                  width={120}
                  height={47}
                />
              </a>
            </div>
           
          </div>

          <div className="col-md-3">
            <h3>Diversidade</h3>
            <a href="https://www.erlef.org/" target="_blank">
              <Image src="/eef.png" alt="Erlang Ecosystem Foundation" width={140} height={69}/>
            </a>
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
            <h3> Contato </h3>
            <a href="mailto:contato@codebeambr.com" className={styles.mainLink, styles.contactMail}>contato@codebeambr.com</a>
            <a href="https://www.codesync.global/about-us/#Conduct" className="main-link conduct">Código de conduta</a>
          </div>

        </div>
      </div>
        </footer>
    )
  }