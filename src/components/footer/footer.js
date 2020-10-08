import React, {Component} from 'react';
import styles from './footer.module.scss'
import logo from '../header/logo.png'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className={styles.container}>
                    <img className={styles.logo} src={logo} alt="logo"/>
                    <p className={styles.copyright}>
                        ©2020 IXPACE Company.  I EXPAND SPACE.
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;