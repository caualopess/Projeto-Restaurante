import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { HorarioFuncionamento } from '../../components/horarioFuncionamento/horarioFuncionamento'
import { LocalBanner } from '../../components/localBanner/localBanner'
import { LocalContent } from '../../components/localContent/localContent'
import styles from './local.module.scss'

export function Local() {
    return (
        <>
            <section className={styles.localBannerSection}>
                <Header />
                <LocalBanner />
            </section>
            <section className={styles.localContentSection}>
                <LocalContent />
            </section>
            <section className={styles.horarioFuncionamentoSection}>
                <HorarioFuncionamento />
            </section>
            <Footer />
        </>

    )

}