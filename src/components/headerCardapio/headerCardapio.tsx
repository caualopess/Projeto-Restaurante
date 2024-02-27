import styles from './headerCardapio.module.scss'
import { useCardapio } from '../../hooks/useCardapio'
import { useEffect, useState } from 'react'
import Menu from '../../assets/icons/menu.hamburguer.svg'

export function HeaderCardapio() {
    const { navOption, setNavOption } = useCardapio()
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
    const [showVerticalMenu, setShowVerticalMenu] = useState(false)

    function headerSelection(headerOption: string) {
        setNavOption(headerOption)
    }

    function handleShowVerticalMenu() {
        setShowVerticalMenu(!showVerticalMenu)
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
            <header className={styles.headerCardapio}>
                <nav>
                    {
                        windowSize < 1220
                            ? <img className={styles.menuHamburguerImg} src={Menu} alt="botão menu hamburguer" onClick={handleShowVerticalMenu} />
                            :
                            <ul>
                                <ul>
                                    <li onClick={() => headerSelection('entradas')}><span className={navOption == 'entradas' ? styles.active : ''}>ENTRADAS</span></li>
                                    <li onClick={() => headerSelection('vinhos')}><span className={navOption == 'vinhos' ? styles.active : ''}>VINHOS</span></li>
                                    <li onClick={() => headerSelection('bebidas')}><span className={navOption == 'bebidas' ? styles.active : ''}>BEBIDAS</span></li>
                                    <li onClick={() => headerSelection('pizzas')}><span className={navOption == 'pizzas' ? styles.active : ''}>PIZZAS</span></li>
                                    <li onClick={() => headerSelection('massas')}><span className={navOption == 'massas' ? styles.active : ''}>MASSAS</span></li>
                                    <li onClick={() => headerSelection('sobremesas')}><span className={navOption == 'sobremesas' ? styles.active : ''}>SOBREMESAS</span></li>
                                </ul>
                            </ul>
                    }
                </nav>
            </header>

            {
                showVerticalMenu === true
                    ? <nav className={styles.menuHamburguer}>
                        <ul className={styles.verticalMenu}>
                            <li onClick={() => headerSelection('entradas')}><span className={navOption == 'entradas' ? styles.active : ''}>ENTRADAS</span></li>
                            <li onClick={() => headerSelection('vinhos')}><span className={navOption == 'vinhos' ? styles.active : ''}>VINHOS</span></li>
                            <li onClick={() => headerSelection('bebidas')}><span className={navOption == 'bebidas' ? styles.active : ''}>BEBIDAS</span></li>
                            <li onClick={() => headerSelection('pizzas')}><span className={navOption == 'pizzas' ? styles.active : ''}>PIZZAS</span></li>
                            <li onClick={() => headerSelection('massas')}><span className={navOption == 'massas' ? styles.active : ''}>MASSAS</span></li>
                            <li onClick={() => headerSelection('sobremesas')}><span className={navOption == 'sobremesas' ? styles.active : ''}>SOBREMESAS</span></li>
                        </ul>
                    </nav>
                    : <></>
            }
        </>
    )
}
