import { Link } from 'react-router-dom'
import styles from './sobreContent.module.scss'
import restaurante from '../../assets/images/restauranteParteInterna.jpg'
import salao from '../../assets/images/salaoInterno.jpg'
import { customObserver, disposeObserver } from '../../utils/CustomObserver'
import { useEffect } from 'react'

export function SobreContent() {
  useEffect(() => {
    const observerFadeInFwd = customObserver(styles.fadeInFwd, document.querySelectorAll('.fadeInFwdOff'))
    const observerSlideInLeft = customObserver(styles.slideInLeft, document.querySelectorAll('.slideInLeftOff'))
    const observerSlideInRight = customObserver(styles.slideInRight, document.querySelectorAll('.slideInRightOff'))

    return () => {
        disposeObserver([observerFadeInFwd, observerSlideInLeft, observerSlideInRight])
    }
})
  return (
    <>
      <div className={styles.sobreContentDiv}>
        <div className={styles.divImg}>
          <img className='fadeInFwdOff' src={restaurante} alt="Imagens da pizzaria VanGogh" />
        </div>
        <div className={`${styles.textDiv} slideInRightOff`}>
          <h2>Referência há mais de 20 anos.</h2>
          <div>
            <p>Desde 2000, nossa missão tem sido encantar o paladar dos brasileiros com a melhor gastrônomia do país. A pizzaria se tornou um ponto de encontro para amantes da boa gastronômia.</p>
            <p>Receitas clássicas, ingredientes de alta qualidade e excelência no atendimento nos orgulhamos de ser referência no Brasil.</p>

          </div>
          <Link to="/local">Conheça o local &gt;</Link>
        </div>
      </div>

      <div className={styles.sobreContentDivD}>
        <div className={styles.divImg}>
          <img className='fadeInFwdOff' src={salao} alt="Imagens da pizzaria VanGogh" />
        </div>
        <div className={`${styles.textDivD} slideInLeftOff`}>
          <h2>Tradição no Brasil.</h2>
          <div>
            <p>Pizzaria é o destino perfeito para os amantes de uma refeição saborosa. O cuidado em oferecer um espaço aconchegante garante que os clientes se sintam à vontade para desfrutar sua experiência gastronômica.</p>
            <p>Nossa equipe está pronta para recebê-lo e garantir que sua visita seja memorável. Do momento em que você chega até o momento em que sai, será tratado com cordialidade, garantindo uma experiência de atendimento.</p>
          </div>
          <Link to="/local">Onde estamos &gt;</Link>
        </div>
      </div>
    </>
  )
}

