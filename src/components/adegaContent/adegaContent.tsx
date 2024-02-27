import styles from './adegaContent.module.scss'
import border from '../../assets/images/border-red.png'
import { Link } from 'react-router-dom'

export function AdegaContent() {
    return (
        <div className={styles.adegaContentDiv}>
            <div>
                <h2>A ADEGA MAIS COMPLETA</h2>
                <img src={border} alt="borda vermelha" />
            </div>
            <p>Aqui, a excelência gastronômica vai além das nossas pizzas. A nossa adega oferece vinhos de alta qualidade para harmonizar com cada sabor. Dos tintos encorpados aos brancos refrescantes.</p>

            <button><Link to="/cardapio">CONHEÇA NOSSA CARTA</Link></button>
        </div>
    )
}