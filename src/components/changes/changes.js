import React, {Component} from 'react';
import styles from './changes.module.scss'

class Changes extends Component {
    render() {
        return (
            <section className={styles.bg + " section"}>
                <div className="container">
                    <div className={styles.content + " col"}>
                        <h1 className={styles.title}>ЧТО БУДЕТ, ЕСЛИ Я НЕ ЗАРЕГИСТРИРУЮСЬ<br/>НА ПЛАТФОРМЕ?</h1>
                        <div className={styles.box}>
                            <p>Каждый день вы будете больше понимать, что ничего не меняется.</p>
                            <p>Вы ходите в офис на автомате и ваше дело не приносит удовольствие.</p>
                            <p>
                                Свой бизнес отнимает больше времени, а прибыли приходит
                                меньше и меньше.
                            </p>
                            <p>Потребности  растут, а доход не увеличивается.</p>
                            <p>Что сделать ?</p>
                            <p>
                                Позвольте себе выделить врем сейчас для изучения информации
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
            </section>
        );
    }
}

export default Changes;