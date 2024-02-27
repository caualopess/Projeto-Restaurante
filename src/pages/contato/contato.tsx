import { ContatoBanner } from '../../components/contatoBanner/contatoBanner'
import { ContatoContent } from '../../components/contatoContent/contatoContent'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import styles from './contato.module.scss'

export function Contato() {
    return (
        <>
            <section className={styles.contatoBannerSection}>
                <Header />
                <ContatoBanner />
            </section>
            <section className={styles.contatoContentSection}>
                <ContatoContent />
            </section>
            <Footer />
        </>
    )
}