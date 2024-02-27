import styles from './homeBanner.module.scss'
import { useEffect } from 'react'
import { customObserver, disposeObserver } from '../../utils/CustomObserver'


export function HomeBanner() {
    useEffect(() => {
        const observerslideInBottom = customObserver(styles.slideInBottom, document.querySelectorAll('.slideInBottomOff'))

        return () => {
            disposeObserver([observerslideInBottom])
        }
    })
    return (
        <div className={styles.homeBannerDiv}>
                <h1 className='slideInBottomOff'>A melhor experiência grastronômica</h1>
        </div>
    )
}   