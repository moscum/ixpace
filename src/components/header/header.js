import React, {Component} from 'react';
import styles from "./header.module.scss";
import logo from "./logo.png";

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <img className={styles.header_logo} src={logo} alt={'logo'}/>
            </header>
        );
    }
}

export default Header;