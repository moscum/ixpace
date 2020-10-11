import React from 'react';
import styles from './platform.module.scss'
import earth from './earth.png'
import Slick from "../slick/slick";

export default function Platform() {
    return (
        <section className="section">
            <div className="container">
                <div className={styles.content +" col"}>
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
                    <p className={styles.result}>
                        Через 5 дней - вы проснетесь с новыми навыками, ощущением перспектив
                        от полученной информации и пошаговым планом запуска своего online-бизнеса
                    </p>
                    <div className={styles.country}>
                        <img className={styles.country_img} src={earth} alt="earth"/>

                        <h1 className={styles.country_title}>
                            ПЛАТФОРМУ УЖЕ ИСПОЛЬЗУЮТ 2375 ЧЕЛОВЕК
                            В 12 СТРАНАХ МИРА
                        </h1>
                        <div className={styles.country_col}>
                            <p className={styles.country_item}>РОССИЯ</p>
                            <p className={styles.country_item}>КАЗАХСТАН</p>
                            <p className={styles.country_item}>УКРАИНА</p>
                            <p className={styles.country_item}>МОЛДОВА</p>
                            <p className={styles.country_item}>БЕЛАРУСЬ</p>
                            <p className={styles.country_note}>
                                *в этот список входят все страны СНГ
                                Азербайджан, Армения, Беларусь, Казахстан, Киргизия,
                                Молдавия, Россия, Таджикистан, Туркменистан, Узбекистан,
                                Украина, Грузия.
                            </p>
                        </div>
                    </div>
                    <h1 className={styles.title_slider}>ВОТ ЧТО ГОВОРЯТ ПОЛЬЗОВАТЕЛИ</h1>
                    <Slick/>
                </div>
            </div>
        </section>
    );
}