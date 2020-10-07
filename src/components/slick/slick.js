import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './slick.module.scss'
import play from './play.png'

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " " + styles.arrow}
            style={{ ...style,
                display: "block",
            }}
            onClick={onClick}
        >
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + " " + styles.arrow_p}
            style={{ ...style, display: "block"}}
            onClick={onClick}
        >
        </div>
    );
}

export default class PauseOnHover extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            className: styles.container,
            centerMode: true,
            centerPadding: '0px',
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }
            ],
            appendDots: dots => (
                <div style={{bottom: '-45px'}}>
                    <ul className={styles.dots_container}> {dots} </ul>
                </div>
            ),
            customPaging: i => (<></>)
        };
        return (
            <Slider {...settings} >
                <div>
                    <div className={styles.item}>
                        <img className={styles.item_play} src={play} alt="play"/>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <img className={styles.item_play} src={play} alt="play"/>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <img className={styles.item_play} src={play} alt="play"/>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <img className={styles.item_play} src={play} alt="play"/>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <img className={styles.item_play} src={play} alt="play"/>
                    </div>
                </div>
                <div>
                    <div className={styles.item}>
                        <img className={styles.item_play} src={play} alt="play"/>
                    </div>
                </div>
            </Slider>
        );
    }
}