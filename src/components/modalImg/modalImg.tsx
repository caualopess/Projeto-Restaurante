import { useModal } from '../../hooks/useModal'
import styles from './modalImg.module.scss'
import closeButton from '../../assets/icons/close-button.svg'

export function ModalImg() {
    const { setIsOpen, nameImg } = useModal()

    return (
        <>
            <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
            <div className={styles.modal}>
                <img src={nameImg} alt="Imagem em tela cheia" />
            </div>
            <img onClick={() => setIsOpen(false)} src={closeButton} alt="Botão para fechar o modal" className={styles.closeButton} />
        </>
    )
}