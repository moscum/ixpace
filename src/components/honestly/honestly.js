import React, {Component} from 'react';
import styles from './honestly.module.scss'


function importAll(r) {
    let images = {};
    r.keys().map((item) =>{ return images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

class Honestly extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="col" style={{alignItems: 'center'}}>
                        <h1 className={styles.title}>ДАВАТЕ ПО-ЧЕСТНОМУ</h1>
                        <h2 className={styles.subtitle}>Сколько "волшебных" инструментов в получение прибыли online<br/>вы уже перепробовали?</h2>
                        <div className={styles.content + " row"}>
                            <div className={styles.result_block + " col"}>
                                <h1 className={styles.result_block_title}>РЕЗУЛЬТАТ КАК ПРАВИЛО ОДИН<br/>- ЭТО ПОТЕРЯ:</h1>
                                <div className={styles.result_block_row + " row"}>
                                    <div className={styles.result_item}>
                                        <img src={images['time.png']} alt="time" className={styles.result_item_img}/>
                                        <p className={styles.result_item_text}>ВРЕМЕНИ</p>
                                    </div>
                                    <div className={styles.result_item}>
                                        <img src={images['money.png']} alt="time" className={styles.result_item_img}/>
                                        <p className={styles.result_item_text}>ДЕНЕГ</p>
                                    </div>
                                    <div className={styles.result_item}>
                                        <img src={images['smile.png']} alt="time" className={styles.result_item_img}/>
                                        <p className={styles.result_item_text}>ЖИЗНЕННОЙ ЭНЕРГИИ И МОТИВАЦИИ ДВИГАТЬСЯ ДАЛЬШЕ</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.planet_block + " col"}>
                                <div className={styles.planet_item}>
                                    <p className={styles.planet_item_text}>ХАЙПЫ И ПИРАМИДЫ</p>
                                    <img src={images['planet_1.png']} alt="planet" className={styles.planet_item_img}/>
                                </div>
                                <div className={styles.planet_item}>
                                    <p className={styles.planet_item_text}>НОВЕЙШАЯ<br/>КРИПТОВАЛЮТА</p>
                                    <img src={images['planet_2.png']} alt="planet" className={styles.planet_item_img}/>
                                </div>
                                <div className={styles.planet_item}>
                                    <p className={styles.planet_item_text}>Марафоны "как поднять миллион"</p>
                                    <img src={images['planet_3.png']} alt="planet" className={styles.planet_item_img}/>
                                </div>
                                <div className={styles.planet_item}>
                                    <p className={styles.planet_item_text}>КОМПАНИИ<br/>С ПОРОШКАМИ И БАНОЧКАМИ</p>
                                    <img src={images['planet_4.png']} alt="planet" className={styles.planet_item_img}/>
                                </div>
                                <div className={styles.planet_item}>
                                    <p className={styles.planet_item_text}>ТУТ ПОДСТАВЬТЕ СВОЙ ВАРИАНТ</p>
                                    <img src={images['planet_5.png']} alt="planet" className={styles.planet_item_img}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Honestly;