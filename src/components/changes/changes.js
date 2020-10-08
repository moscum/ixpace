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
                                Все останется на своих местах.<br/>
                                Каждый день вы будете больше понимать, что ничего не меняется.
                            </p>
                            <p>Вы ходите в офис на автомате и ваше дело не приносит удовольствие.</p>
                            <p>
                                Свой бизнес отнимает больше времени, а прибыли приходит
                                меньше и меньше.
                            </p>
                            <p>Потребности  растут, а доход не увеличивается.</p>
                            <p>Что сделать ?</p>
                            <p>
                                Позвольте себе выделить время сейчас для изучения информации
                                и найдите финансовую точку роста.
                            </p>
                            <p>
                                Наша платформа покажет вам, как создать стабильный источник
                                дохода в ближайшем будущем.
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