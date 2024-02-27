import styles from './footer.module.scss'
import instagramIcon from '../../assets/icons/instagramIcon.png'
import facebookIcon from '../../assets/icons/facebookIcon.png'
import rightArrow from '../../assets/icons/right-arrow.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Footer() {
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <footer>
            {
                windowSize > 768 ?
                    <>
                        <div className={styles.column}>
                            <div className={styles.nossosHorarios}>
                                <h2>NOSSOS HORÁRIOS:</h2>

                                <div>
                                    <h3>SALÃO</h3>
                                    <p>SEG A QUI - 17H ÀS 22H30</p>
                                    <p>SEX - 12H À 00H</p>
                                    <p>SÁB - 12H À 00H</p>
                                    <p>DOM - 12H À 00H</p>
                                </div>

                                <div>
                                    <h3>DELIVERY</h3>
                                    <p>TODOS OS DIAS</p>
                                    <p>DAS 16H À 01H</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.column}>
                            <div className={styles.faleConosco}>
                                <h2>FALE CONOSCO</h2>

                                <p>CONTATOPIZZARIA765@GMAIL.COM</p>

                                <div>
                                    <p>AV. EDSON ARANTES DO NASCIMENTO, 10</p>
                                    <p>VILA BELMIRO, SANTOS/SP</p>
                                    <p>(00) 1234-5678</p>
                                </div>
                            </div>

                            <div className={styles.links}>
                                <h2>LINKS</h2>

                                <ul>
                                    <li><Link to="/contato">CONTATO</Link></li>
                                    <li><Link to="/tour360">TOUR 360°</Link></li>
                                    <li><Link to="/local">LOCAL</Link></li>
                                    <li><Link to="/cardapio">CARDÁPIO</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.column}>
                            <h2>ACOMPANHE-NOS NAS</h2>
                            <h2>REDES SOCIAIS</h2>

                            <div className={styles.logos}>
                                <a href="https://www.instagram.com/" target='_blank'><img src={instagramIcon} alt="logo instagram" /></a>
                                <a href="https://www.facebook.com/" target='_blank'><img src={facebookIcon} alt="logo facebook" /></a>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className={styles.column}>
                            <div className={styles.nossosHorarios}>
                                <Link to='/local'>NOSSOS HORÁRIOS <img src={rightArrow} alt="Seta para a direita" /></Link>
                            </div>

                            <div className={styles.faleConosco}>
                                <Link to='/contato'>FALE CONOSCO <img src={rightArrow} alt="Seta para a direita" /></Link>
                            </div>
                        </div>

                        <div className={styles.column}>
                            <div className={styles.links}>
                                <h2>LINKS</h2>

                                <ul>
                                    <li><Link to="/contato">CONTATO</Link></li>
                                    <li><Link to="/tour360">TOUR 360°</Link></li>
                                    <li><Link to="/local">LOCAL</Link></li>
                                    <li><Link to="/cardapio">CARDÁPIO</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.column}>
                            <h2>ACOMPANHE-NOS NAS</h2>
                            <h2>REDES SOCIAIS</h2>

                            <div className={styles.logos}>
                                <a href="https://www.instagram.com/" target='_blank'><img src={instagramIcon} alt="logo instagram" /></a>
                                <a href="https://www.facebook.com/" target='_blank'><img src={facebookIcon} alt="logo facebook" /></a>
                            </div>
                        </div>
                    </>
            }
        </footer>
    )
}