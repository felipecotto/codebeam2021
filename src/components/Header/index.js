import styles from './Header.module.scss';
import React, { useState } from "react";
import Image from 'next/image'

export default function Header() {
    return (
        <header className={styles.header}>
            <a href="https://codesync.global/" target="_blank" className="logo">
                <Image alt="Logo - Code Sync Global"
                    src="/code-sync-logo.svg"
                    height={44}
                    width={33} /> <span>Code Sync</span>
            </a>
            <nav className={styles.navbar
                    ? "navbar fixed-top navbar-expand-xl navbar-dark active"
                    : "navbar fixed-top navbar-expand-xl navbar-dark"}>

                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">menu</span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav position-absolute top-50 start-50 translate-middle">
                            <li className="nav-item">
                                <a href="#keynotes">
                                    Key notes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#talks">
                                    Palestras
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#panels">
                                    Painel
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#tickets">
                                    Ingressos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#schedule">
                                    Agenda
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </header >
    )
}