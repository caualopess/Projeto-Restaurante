import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Menu from '../../assets/icons/menu.hamburguer.svg'
import styles from './header.module.scss'

export function Header() {
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
    const [showVerticalMenu, setShowVerticalMenu] = useState(false)

    function handleShowVerticalMenu() {
        if (showVerticalMenu === true) {
            setShowVerticalMenu(false)
        }

        else {
            setShowVerticalMenu(true)
        }
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <>
            <header className={styles.header}>
                    <Link to="/"><p>LOGO</p></Link>
                    <nav>
                        {
                            windowSize < 768
                                ? <img className={styles.menuHamburguerImg} src={Menu} alt="a" onClick={handleShowVerticalMenu} />
                                :
                                <ul>
                                    <li><Link to="/">HOME</Link></li>
                                    <li><Link to="/contato">CONTATO</Link></li>
                                    <li><Link to="/tour360">TOUR 360°</Link></li>
                                    <li><Link to="/local">LOCAL</Link></li>
                                    <li><Link to="/cardapio">CARDÁPIO</Link></li>
                                </ul>
                        }
                    </nav>
            </header>
            <div className={styles.menuHamburguer}>
                {
                    showVerticalMenu === true
                        ? <ul className={styles.verticalMenu}>
                            <li><Link to="/">INÍCIO</Link></li>
                            <li><Link to="/contato">CONTATO</Link></li>
                            <li><Link to="/tour360">TOUR 360°</Link></li>
                            <li><Link to="/local">LOCAL</Link></li>
                            <li><Link to="/cardapio">CARDÁPIO</Link></li>
                        </ul>
                        : <></>
                }

            </div>
        </>
    )
}