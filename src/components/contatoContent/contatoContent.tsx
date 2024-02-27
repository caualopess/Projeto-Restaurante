import styles from './contatoContent.module.scss'
import instagramLogo from '../../assets/icons/instagramLogo.png'
import facebookLogo from '../../assets/icons/facebookLogo.png'
import ifoodLogo from '../../assets/icons/ifoodLogo.png'
import deliverydiretoLogo from '../../assets/icons/deliverydiretoLogo.png'
import email from '../../assets/icons/email.png'
import support from '../../assets/icons/support.png'

export function ContatoContent() {
    return (
        <div className={styles.contatoContentDiv}>
            <div className={styles.informationsDiv}>
                <div className={styles.contatosDiv}>
                    <div>
                        <h2>Contatos:</h2>
                    </div>

                    <ul>
                        <li>
                            <img src={support} alt="imagem fone de centro de atendimento" />
                            <p>(00) 1234-5678</p>
                        </li>
                        <li>
                            <img src={email} alt="imagem email" />
                            <p>CONTATOPIZZARIA765@GMAIL.COM</p>

                        </li>
                        <li>
                            <img src={facebookLogo} alt="logo facebook" />
                            <a href='https://www.facebook.com/' target='_blank'>PIZZARIA</a>
                        </li>
                        <li>
                            <img src={instagramLogo} alt="logo instagram" />
                            <a href='https://www.instagram.com/' target='_blank'>@PIZZARIA</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.deliveryDiv}>
                    <div>
                        <h2>Delivery:</h2>
                    </div>

                    <ul>
                        <li>
                            <img src={deliverydiretoLogo} alt="logo delivery direto" />
                            <a href='https://deliverydireto.com.br/' target='_blank'>DELIVERY DIRETO</a>
                        </li>
                        <li>
                            <img src={ifoodLogo} alt="logo do ifood" />
                            <a href='https://www.ifood.com.br/' target='_blank'>IFOOD</a>
                        </li>
                    </ul>
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4348.293468300596!2d-46.66039324937377!3d-23.587672643531302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1069d11d1%3A0xcb936109af9ce541!2sParque%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1692050413682!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}