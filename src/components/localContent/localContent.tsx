import styles from './localContent.module.scss'
import border from '../../assets/images/border-red.png'
import { Link } from 'react-router-dom'

export function LocalContent() {
    return (
        <div className={styles.localContentDiv}>
            <div>
                <h2>Endereço</h2>
                <p>AV. EDSON ARANTES DO NASCIMENTO, 10</p>
                <p>VILA BELMIRO, SANTOS/SP</p>
                <img src={border} alt="borda vermelha"></img>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4348.293468300596!2d-46.66039324937377!3d-23.587672643531302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1069d11d1%3A0xcb936109af9ce541!2sParque%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1692050413682!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <Link to="/cardapio"><button>ACESSE O CARDÁPIO</button></Link>
        </div>
    )
}