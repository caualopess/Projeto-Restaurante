import { Header } from '../../components/header/header'
import './tour360.scss'
import { TourBanner } from '../../components/tourBanner/tourBanner'
import { TourContent } from '../../components/tourContent/tourContent'
import { Footer } from '../../components/footer/footer'

export function Tour360() {
    return (
        <>
            <section id='tourBannerSection'>
                <Header />
                <TourBanner />
            </section>
            <section id='tourContentSection'>
                <TourContent />
            </section>
            <Footer />
        </>
    )
}