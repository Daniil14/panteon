import React from 'react';
import {observer} from 'mobx-react-lite';
import styles from './Project.module.scss';
import ProjectsStore from 'store/ProjectsStore';

// SVG:
import {ReactComponent as EditSvg} from 'assets/svg/settings.svg';
import {ReactComponent as StatisticSvg} from 'assets/svg/statistic.svg';
import {ReactComponent as FreezeSvg} from 'assets/svg/snowflake.svg';
import {ReactComponent as TrashSvg} from 'assets/svg/trash.svg';
import {ReactComponent as DesktopSvg} from 'assets/svg/desktop.svg';
import {ReactComponent as PhoneSvg} from 'assets/svg/phone.svg';
import {ReactComponent as FemaleSvg} from 'assets/svg/female.svg';
import {ReactComponent as MaleSvg} from 'assets/svg/male.svg';

const Project = ({project}) => {
    const {deleteProject} = ProjectsStore;

    return (
        <li className={styles.container}>
            <div className={styles.image}>
                <img src={`${process.env.PUBLIC_URL}${project.image}`} alt="placeholder"/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.name}>{project.name}</div>
                    <a className={styles.url} href={project.external} target="_blank" rel="noreferrer">{project.url}</a>
                </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <span>Посещаемость в день из Яндекса (среднее за последние 30 дней)</span>
                        <span>{project.attendance}</span>
                    </li>
                    <li className={styles.item}>
                        <span>Среднее время на сайте</span>
                        <span>{project.timeOnSite}</span>
                    </li>
                    <li className={styles.item}>
                        <span>Глубина просмотра</span>
                        <span>{project.viewingDepth}</span>
                    </li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.devices}>
                        <div className={styles.title}>Устройсва</div>
                        <div className={styles.mobile}>
                            <DesktopSvg width={24} height={24}/>
                            {project.mobile}%
                        </div>
                        <div className={styles.desktop}>
                            <PhoneSvg width={24} height={24}/>
                            {project.desktop}%
                        </div>
                    </li>
                    <li className={styles.audience}>
                        <div className={styles.title}>Аудитория</div>
                        <div className={styles.female}>
                            <FemaleSvg width={24} height={24}/>
                            {project.female}%
                        </div>
                        <div className={styles.male}>
                            <MaleSvg width={24} height={24}/>
                            {project.male}%
                        </div>
                    </li>
                </ul>
                <ul className={styles.actions}>
                    <li className={styles.action}>
                        <button type="button">
                            <EditSvg width={24} height={24}/>
                            Редактировать
                        </button>
                    </li>
                    <li className={styles.action}>
                        <button type="button">
                            <StatisticSvg width={24} height={24}/>
                            Статистика
                        </button>
                    </li>
                    <li className={styles.action}>
                        <button type="button">
                            <FreezeSvg width={24} height={24}/>
                            Заморозить
                        </button>
                    </li>
                    <li className={styles.action}>
                        <button type="button" onClick={() => deleteProject(project.id)}>
                            <TrashSvg width={24} height={24}/>
                            Удалить
                        </button>
                    </li>
                </ul>
            </div>
        </li>
    );
}

export default observer(Project);
