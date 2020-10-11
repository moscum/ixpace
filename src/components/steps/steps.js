import React, {Component} from 'react';
import styles from './steps.module.scss'

class Steps extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className={styles.content +" col"}>
                        <h1 className={styles.title}>КАКИЕ МОИ ДАЛЬНЕЙШИЕ ШАГИ?</h1>
                        <div className={styles.row + " row"}>
                            <div className={styles.item + " col"}>
                                <h1 className={styles.item_num}>1</h1>
                                <p className={styles.item_text}>
                                    Вы бесплатно регистрируетесь
                                    на платформе
                                </p>
                            </div>
                            <div className={styles.item + " col"}>
                                <h1 className={styles.item_num}>2</h1>
                                <p className={styles.item_text}>
                                    Получаете доступ к обучающим
                                    материалам
                                </p>
                            </div>
                            <div className={styles.item + " col"}>
                                <h1 className={styles.item_num}>3</h1>
                                <p className={styles.item_text}>
                                    После прохождения обучения
                                    начинаете получать прибыль <p style={{display: 'inline-block'}}>с&nbsp;&nbsp;&nbsp;I X P A C E</p>
                                </p>
                            </div>
                            <div className={styles.item + " col"}>
                                <h1 className={styles.item_num}>4</h1>
                                <p className={styles.item_text}>
                                    Масштабируйте бизнес
                                </p>
                            </div>
                        </div>
                        <button className={styles.btn + " btn_autoflash"}><div className="btn_flash btn_lighting"/>ПРОЙТИ ОБУЧЕНИЕ</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Steps;