import { Link } from 'react-router-dom'
import styles from './tourContent.module.scss'

export function TourContent() {
    return (
        <div className={styles.tourContent}>
            <h2>NAVEGUE ABAIXO PARA CONHECER A CASA</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!4v1682725890252!6m8!1m7!1sXWXFMOkKQGEOVrvucl5W2A!2m2!1d-23.95578602453566!2d-46.33147886165201!3f329.8717749669209!4f-16.914321590700865!5f0.7820865974627469" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <button><Link to="/cardapio">VEJA NOSSO CARDÁPIO</Link></button>
        </div>
    )
}