import React from 'react';
import styles from './Preloader.module.scss';

// SVG:
import {ReactComponent as PreloaderSvg} from 'assets/svg/preloader.svg';

const Preloader = () => {
    return (<div className={styles.container}>
        <PreloaderSvg/>
    </div>);
};

export default Preloader;
