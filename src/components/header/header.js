import React, { Component } from 'react';
import styles from './header.module.scss'
import logo from "./images/logo.png";

class Header extends Component {
    render() {
        return (
            <header className={"header"}>
                <div className={styles.container}>
                    <img className={styles.logo} src={logo} alt={'logo'}/>
                </div>
                <div className="container">
                    <div className="col">
                        <h1 className={styles.title}>
                            Получите доступ к online-платформе<br/>и уже через 5 дней запустите свой online-бизнес
                        </h1>
                        <h2 className={styles.subtitle}>
                            Пройдите бесплатную регистрацию за 17 секунд и получите обучение и пошаговый план для создания своего online-бизнеса с гарантией результата
                        </h2>
                        <div className={styles.registration_block}>
                            <h3 className={styles.registration_block_title}>Для регистрации и доступа к платформе введите номер телефона</h3>
                            <form className={styles.registration_block_form+" row"}>
                                    <input className={styles.registration_block_input} placeholder="+7 (999) 999-99-99"
                                           maxLength="12"/>
                                    <button className={styles.registration_block_button + " btn_autoflash"}><div className="btn_flash btn_lighting"/>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                            </form>
                            <p className={styles.registration_block_login}>У Вас уже есть аккаунт?
                                <a className={styles.registration_block_login__link} href="https://google.com">Войдите!</a>
                            </p>
                            <p className={styles.registration_block_login_note}>*Нажимая кнопку, вы даете согласие на обработку персональных данных и соглашаетесь<br/>с правилами платформы.</p>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;