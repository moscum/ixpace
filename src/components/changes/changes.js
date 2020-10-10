import React, {Component} from 'react';
import styles from './changes.module.scss'
import Footer from "../footer/footer";
import earth from "./earth.png";

class Changes extends Component {
    render() {
        return (
            <section className={styles.bg + " section"}>
                <img className={styles.img} src={earth} alt="earth"/>
                <div className="container">
                    <div className={styles.content + " col"}>
                        <h1 className={styles.title}>ЧТО БУДЕТ, ЕСЛИ Я НЕ ЗАРЕГИСТРИРУЮСЬ<br/>НА ПЛАТФОРМЕ?</h1>
                        <div className={styles.box}>
                            <p>
                                На самом деле - ничего. Все останется на своих местах...
                            </p>
                            <p>
                                Вы продолжите ходить на работу, напоминающую «день сурка» и забыв о том, когда вы последний раз полноценно отдыхали.
                            </p>
                            <p>
                                Или «тянуть» свой бизнес, который как чемодан без ручки:тащить тяжело, а бросить жалко.
                            </p>
                            <p>
                                Позвольте себе выделить 5 дней на обучение и запустить свой online-бизнес по проверенной моделе, который обеспечит вам стабильный источник дохода.
                            </p>
                            <p>
                                Что выбрать? Решать только вам!
                            </p>
                            <button className={styles.btn + " btn_autoflash"}><div className="btn_flash btn_lighting"/>Я ГОТОВ К ИЗМЕНЕНИЯМ</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
        );
    }
}

export default Changes;