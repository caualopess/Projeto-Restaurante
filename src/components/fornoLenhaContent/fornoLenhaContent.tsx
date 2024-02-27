import styles from './fornoLenhaContent.module.scss'
import border from '../../assets/images/border-red.png'
import { Link } from 'react-router-dom'

export function FornoLenhaContent() {
    return (
            <div className={styles.fornoLenhaContentDiv}>
                <div>
                    <h2>O TRADICIONAL FORNO A LENHA</h2>
                    <img src={border} alt="borda vermelha" />
                </div>

                <p>Na Pizzaria, a tradição ganha vida. Conheça o segredo por trás das nossas pizzas irresistíveis: o forno a lenha. Uma antiga técnica de preparo que volta às origens da pizza na Itália.</p>

                <button><Link to="/contato">FAÇA SEU PEDIDO</Link></button>
            </div>
    )
}