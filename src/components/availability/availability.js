import React from 'react';
import { useMediaQuery } from 'react-responsive'
import styles from './availability.module.scss'

function importAll(r) {
    let images = {};
    r.keys().map((item) =>{ return images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default function Availability() {
    const isMobile = useMediaQuery({ query: '(max-width: 575.98px)' })
    return (
        <section className={styles.bg + " section"}>
            <div className="container">
                <h1 className={styles.title}>ЕЩЕ НИКОГДА ONLINE-БИЗНЕС НЕ БЫЛ ТАК ПРОСТ И ДОСТУПЕН, ОСОБЕННО ДЛЯ:</h1>
                <div className={styles.row + " row"}>
                    <div className={styles.item}>
                        <div className={styles.item_box}>
                            <img className={styles.item_box_icon} src={images['mother.png']} alt="mother"/>
                        </div>
                        {isMobile ?
                            <p className={styles.item_text}>Молодых мамочек</p>
                            :
                            <p className={styles.item_text}>
                                Молодых мамочек, которые
                                хотят уделять больше времени
                                ребенку без потери в доходах
                            </p>
                        }
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item_box}>
                            <img className={styles.item_box_icon} src={images['student.png']} alt="student"/>
                        </div>
                        {isMobile ?
                            <p className={styles.item_text}>Студентов</p>
                            :
                            <p className={styles.item_text}>
                                Студентов, которые
                                не готовы
                                работать на дядю до пенсии
                            </p>
                        }
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item_box}>
                            <img className={styles.item_box_icon} src={images['offline.png']} alt="offline"/>
                        </div>
                        {isMobile ?
                            <p className={styles.item_text}>Сотрудников в найме</p>
                            :
                            <p className={styles.item_text}>
                                Сотрудников в найме,мечтающих
                                скорей уйти из офиса
                                и начать успешный бизнес
                            </p>
                        }
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item_box}>
                            <img className={styles.item_box_icon} src={images['skeptic.png']} alt="skeptic"/>
                        </div>
                        {isMobile ?
                            <p className={styles.item_text}>Скептиков</p>
                            :
                            <p className={styles.item_text}>
                                Скептиков, которые считают,
                                что в online-бизнесе
                                цифры с 6 нулями
                                просто невозможны
                            </p>
                        }
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item_box}>
                            <img className={styles.item_box_icon} src={images['business.png']} alt="business"/>
                        </div>
                        {isMobile ?
                            <p className={styles.item_text}>Любителей offline-бизнеса</p>
                            :
                            <p className={styles.item_text}>
                                "Любителей" offline-бизнеса,
                                который съедает все время
                                и не приносит желаемой прибыли
                            </p>
                        }
                    </div>
                    <div className={styles.item}>
                        <div className={styles.item_box}>
                            <img className={styles.item_box_icon} src={images['freelance.png']} alt="freelance"/>
                        </div>
                        {isMobile ?
                            <p className={styles.item_text}>Фрилансеров</p>
                            :
                            <p className={styles.item_text}>
                            Фрилансеров, которые
                            не знают как пробить
                            свой финансовый потолок
                            </p>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

