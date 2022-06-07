import React from 'react';
import {NavLink} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import styles from './Project.module.scss';

// SVG:
import {ReactComponent as StatisticSvg} from 'assets/svg/statistic.svg';

const Project = ({project}) => {
    return (
        <li className={styles.container}>
            <div className={styles.header}>
                <div className={styles.name}>{project.name}</div>
                <a className={styles.url} href={project.external} target="_blank" rel="noreferrer">{project.url}</a>
            </div>
            <ul>
                <li className={styles.action}>
                    <NavLink to="/statistic">
                        <StatisticSvg width={24} height={24}/>
                        Статистика
                    </NavLink>
                </li>
            </ul>
        </li>
    );
}

export default observer(Project);
