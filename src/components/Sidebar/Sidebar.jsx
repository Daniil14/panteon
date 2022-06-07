import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Sidebar.module.scss';

// SVG:
// import {ReactComponent as SettingsSvg} from 'assets/svg/settings.svg';
// import {ReactComponent as AddSvg} from 'assets/svg/add.svg';
import {ReactComponent as ProjectsSvg} from 'assets/svg/projects.svg';
import {ReactComponent as StatisticSvg} from 'assets/svg/statistic.svg';

const Sidebar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.user}>
                <div className={styles.userInfo}>
                    <img src={`${process.env.PUBLIC_URL}/images/avatar.svg`} width={24} height={24} alt="user"/>
                    <div>Екатерина</div>
                </div>
                <div className={styles.userBalance}>Баланс 0 руб.</div>
            </div>
            <ul className={styles.list}>
                {/*<li className={styles.item}>*/}
                {/*    <NavLink to="/settings">*/}
                {/*        <SettingsSvg width={24} height={24}/>*/}
                {/*        Настройки профиля*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                <li className={styles.group}>
                    <h3>Проекты</h3>
                    <ul>
                        {/*<li className={styles.item}>*/}
                        {/*    <NavLink to="/create">*/}
                        {/*        <AddSvg width={24} height={24}/>*/}
                        {/*        Создать проект*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        <li className={styles.item}>
                            <NavLink exact={true} to="/">
                                <ProjectsSvg width={24} height={24}/>
                                Проекты
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li className={styles.group}>
                    <h3>Статистика</h3>
                    <ul>
                        <li className={styles.item}>
                            <NavLink to="/statistic">
                                <StatisticSvg width={24} height={24}/>
                                Статистика и отчёты
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar;
