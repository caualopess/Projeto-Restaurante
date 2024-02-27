import { useCardapio } from '../../hooks/useCardapio'
import styles from './cardapioContent.module.scss'

export function CardapioContent() {
    const { navOption } = useCardapio()
    const entradas = [{
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur adipisicing.'
    }]

    const vinhos = [{
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet consectetur.'
    }]

    const bebidas = [{
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit amet.'
    }]

    const pizzas = [{
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor sit.'
    }]

    const massas = [{
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum dolor.'
    }]

    const sobremesas = [{
        nome: 'lorem',
        descrição: 'Lorem ipsum.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum.'
    },
    {
        nome: 'lorem',
        descrição: 'Lorem ipsum.'
    }]

    if (navOption == 'entradas') {
        return (
            <div className={styles.contentDiv}>
                {entradas.map(entrada => {
                    return (
                        <div className={styles.itensDiv}>
                            <h3>{entrada.nome}</h3>
                            <p>{entrada.descrição}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    else if (navOption == 'vinhos') {
        return (
            <div className={styles.contentDiv}>
                {vinhos.map(vinho => {
                    return (
                        <div className={styles.itensDiv}>
                            <h3>{vinho.nome}</h3>
                            <p>{vinho.descrição}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    else if (navOption == 'bebidas') {
        return (
            <div className={styles.contentDiv}>
                {bebidas.map(bebida => {
                    return (
                        <div className={styles.itensDiv}>
                            <h3>{bebida.nome}</h3>
                            <p>{bebida.descrição}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    else if (navOption == 'pizzas') {
        return (
            <div className={styles.contentDiv}>
                {pizzas.map(pizza => {
                    return (
                        <div className={styles.itensDiv}>
                            <h3>{pizza.nome}</h3>
                            <p>{pizza.descrição}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    else if (navOption == 'massas') {
        return (
            <div className={styles.contentDiv}>
                {massas.map(massa => {
                    return (
                        <div className={styles.itensDiv}>
                            <h3>{massa.nome}</h3>
                            <p>{massa.descrição}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    else {
        return (
            <div className={styles.contentDiv}>
                {sobremesas.map(sobremesa => {
                    return (
                        <div className={styles.itensDiv}>
                            <h3>{sobremesa.nome}</h3>
                            <p>{sobremesa.descrição}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}