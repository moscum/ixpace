import React, {Component} from 'react';
import styles from './about.module.scss'
import logo from "../header/logo.png";
import laptop from "./laptop.png"

class About extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className={styles.title}>
                        <img src={logo} alt="logo"/>
                        <h1>- ПЛАТФОРМА ДЛЯ ЛЮДЕЙ</h1>
                    </div>
                    <h2 className={styles.subtitle}>
                        Она ломает привычные вам шаблоны о получении прибыли online
                        и включает в себя:
                    </h2>
                    <div className={styles.col}>
                        <div className={styles.row}>
                            <img className={styles.img} src={laptop} alt="laptop"/>
                            <div className={styles.col__text}>
                                <p className={styles.text}>Систему обучения</p>
                                <p className={styles.text}>Сайты и посадочные страницы для привлечения клиентов </p>
                                <p className={styles.text}>Встроенную СRM-систему
                                    и систему аналитики</p>
                                <p className={styles.text}>Сопровождение куратора
                                    до получения прибыли</p>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <p className={styles.text__c}>
                                ОКРУЖЕНИЕ ЕДИНОМЫШЛЕННИКОВ
                            </p>
                            <p className={styles.text__c}>Готовую масштабируемую бизнес-модель
                                для запуска своего online-бизнеса
                                в любой точке мира</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;