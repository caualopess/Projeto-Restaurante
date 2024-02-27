import { Link } from 'react-router-dom'
import styles from './horarioFuncionamento.module.scss'

export function HorarioFuncionamento() {
    return (
        <div className={styles.horarioFuncionamentoDiv}>
            <div>
                <h2>HORÁRIO DE FUNCIONAMENTO</h2>
            </div>

            <div className={styles.salaoHoursDiv}>
                <h3>Salão</h3>
                <p>Segunda à Quinta - 17H ÀS 22H30</p>
                <p>Sexta - 12H À 00H</p>
                <p>Sábado - 12H À 00H</p>
                <p>Domingo - 12H À 00H</p>
            </div>

            <div className={styles.deliveryHoursDiv}>
                <h3>Delivery</h3>
                <p>Todos os dias <br />das 16h à 01h</p>
            </div>

            <Link to="/contato"><button>FAÇA SEU PEDIDO</button></Link>
        </div>
    )
}