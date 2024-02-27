import styles from './especialidadesDaCasa.module.scss'
import backgroundHorarioImg from '../../assets/images/backgroundHorario.jpg'
import pizzaImg from '../../assets/images/pizzaImg.jpg'
import pizzaImg2 from '../../assets/images/pizzaImg2.jpg'
import vinhoImg from '../../assets/images/vinhoImg.jpg'
import massasImg from '../../assets/images/massasImg.jpg'
import pudimImg from '../../assets/images/pudimImg.jpg'
import pratoFeitoImg from '../../assets/images/pratoFeitoImg.jpg'
import carneImg from '../../assets/images/carneImg.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { customObserver, disposeObserver } from '../../utils/CustomObserver'
import { useModal } from '../../hooks/useModal'

export function EspecialidadesDaCasa() {
    const { setIsOpen, setNameImg } = useModal()

    function handleOpenModal(nameImg: string) {
        setIsOpen(true)
        setNameImg(nameImg)
    }

    useEffect(() => {
        const observerSlideInBottom = customObserver(styles.slideInBottom, document.querySelectorAll('.slideInBottomOff'))

        return () => {
            disposeObserver([observerSlideInBottom])
        }
    })

    return (
        <div className={styles.especialidadesDaCasaDiv}>

            <div className={`${styles.textEspecialidadesDiv} slideInBottomOff`} >
                <h2 className={styles.slideInBottom}>Especialidades da Casa.</h2>
                <p className={styles.textP1}>
                    Além das melhoras pizzas do Brasil, a pizzaria é conhecida pela sua grande diversidade de pratos, como as entradas, massas, saladas, camarão, bacalhau, carnes nobres e muito mais.
                </p>
                <p>
                    Combinando receitas clássicas, ingredientes de alta qualidade, uma pitada de personalidade e excelência no atendimento nos orgulhamos de ser referência no Brasil.
                </p>
                <Link to="/cardapio">Confira o cardápio digital &gt;</Link>
            </div>

            <div className={`${styles.gallery} slideInBottomOff`}>
                <figure className={styles.galleryItem1}>
                    <img onClick={() => handleOpenModal(backgroundHorarioImg)} className={styles.galleryImg} src={backgroundHorarioImg} alt="imagem background horário" />
                </figure>

                <figure className={styles.galleryItem2}>
                    <img onClick={() => handleOpenModal(pizzaImg)}
                        className={styles.galleryImg}
                        src={pizzaImg}
                        alt="Imagem pizza"
                    />
                </figure>

                <figure className={styles.galleryItem3}>
                    <img onClick={() => handleOpenModal(pizzaImg2)}
                        className={styles.galleryImg}
                        src={pizzaImg2}
                        alt="Imagem pizza2"
                    />
                </figure>

                <figure className={styles.galleryItem4}>
                    <img onClick={() => handleOpenModal(vinhoImg)}
                        className={styles.galleryImg}
                        src={vinhoImg}
                        alt="Imagem vinho"
                    />
                </figure>

                <figure className={styles.galleryItem5}>
                    <img onClick={() => handleOpenModal(massasImg)}
                        className={styles.galleryImg}
                        src={massasImg}
                        alt="Imagem massas"
                    />
                </figure>

                <figure className={styles.galleryItem6}>
                    <img onClick={() => handleOpenModal(pudimImg)}
                        className={styles.galleryImg}
                        src={pudimImg}
                        alt="Imagem pudim"
                    />
                </figure>

                <figure className={styles.galleryItem7}>
                    <img onClick={() => handleOpenModal(pratoFeitoImg)}
                        className={styles.galleryImg}
                        src={pratoFeitoImg}
                        alt="Imagem prato feito"
                    />
                </figure>

                <figure className={styles.galleryItem8}>
                    <img onClick={() => handleOpenModal(carneImg)}
                        className={styles.galleryImg}
                        src={carneImg}
                        alt="Imagem carne" />
                </figure>
            </div>
        </div>
    )
}