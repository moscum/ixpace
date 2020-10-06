import React from 'react';
import styles from "./platform.module.scss"

export default function Platform() {
    return (
        <section className={styles.bg + " section"}>
            <div className="container">
                <h1 className={styles.title}>ЭТО БЕСПЛАТНО? ДА!</h1>
                <h2 className={styles.subtitle}>Все что от вас требуется:</h2>
                <div className={styles.require + " row"}>
                    <p className={styles.require_text}>
                        зарегистрироваться, <br/>
                        найти свободное время <br/>
                        и внимательно изучить информацию
                    </p>
                    <div className={styles.reg}>
                        <button className={styles.reg_button + " btn_autoflash"}><div className="btn_flash btn_lighting"/>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                        <p className={styles.reg_note}>*Нажимая кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с правилами платформы.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}