import React from 'react';
import styles from './Tooltip.module.scss';

// SVG:
import {ReactComponent as TooltipSvg} from 'assets/svg/tooltip.svg';

const Tooltip = ({title, text}) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <TooltipSvg width={24} height={24}/>
            </div>
            <div className={styles.content}>
                <div className={styles.image}/>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
            </div>
        </div>
    );
};

export default Tooltip;
