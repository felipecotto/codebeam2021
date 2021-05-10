import styles from './Header.module.scss';
import Image from 'next/image'

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="https://codesync.global/" target="_blank" className="logo">
                <Image alt="Logo - Code Sync Global" 
                src="/code-sync-logo.svg" 
                height={44}
                width={33}/> <span>Code Sync</span>
            </a>
            {/* <nav className={styles.mainNav, styles.desktop}>
                <a href="#investment" className={styles.neutralLink}>Patrocínio</a>
            </nav> */}
        </header>
    )
  }