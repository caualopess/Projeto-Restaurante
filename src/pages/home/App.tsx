import { AdegaContent } from '../../components/adegaContent/adegaContent'
import { EspecialidadesDaCasa } from '../../components/especialidadesDaCasa/especialidadesDaCasa'
import { Footer } from '../../components/footer/footer'
import { FornoLenhaContent } from '../../components/fornoLenhaContent/fornoLenhaContent'
import { Header } from '../../components/header/header'
import { HomeBanner } from '../../components/homeBanner/homeBanner'
import { SobreContent } from '../../components/sobreContent/sobreContent'
import styles from './app.module.scss'
import video from '../../assets/video/coverr-homemade-pizza-2472-1080p.mp4'
import { ModalImg } from '../../components/modalImg/modalImg'
import { useModal } from '../../hooks/useModal'

function App() {
  const { isOpen } = useModal()
  return (
    <>
      <section className={styles.homeBannerSection}>
        <Header />
        <video autoPlay muted loop>
          <source src={video} />
        </video>
        <HomeBanner />
      </section>

      <section className={styles.sobreContentSection}>
        <SobreContent />
      </section>

      <section className={styles.fornoLenhaSection}>
        <FornoLenhaContent />
      </section>

      <section className={styles.especialidadesDaCasaSection}>
        <EspecialidadesDaCasa />
      </section>

      <section className={styles.adegaContentSection}>
        <AdegaContent />
      </section>

      <Footer />
      {isOpen ? <ModalImg /> : null}
    </>
  )
}

export default App
