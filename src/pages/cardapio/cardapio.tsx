import { CardapioBanner } from '../../components/cardapioBanner/cardapioBanner'
import { CardapioContent } from '../../components/cardapioContent/cardapioContent'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { HeaderCardapio } from '../../components/headerCardapio/headerCardapio'
import styles from './cardapio.module.scss'

export function Cardapio() {
    return (
        <>
            <section className={styles.cardapioBanner}>
                <Header />
                <CardapioBanner />
            </section>
            <section className={styles.cardapioContent}>
                <HeaderCardapio />
                <CardapioContent />
            </section>
            <Footer />
        </>
    )
}

