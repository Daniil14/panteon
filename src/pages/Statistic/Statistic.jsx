import React, {useEffect, useState} from 'react';
import SimpleBar from 'simplebar-react';
import styles from './Statistic.module.scss';
import {observer} from 'mobx-react-lite';
import ProjectsStore from 'store/ProjectsStore';
import ContentLoader from 'react-content-loader';

// Components:
import SelectProject from './SelectProject/SelectProject';
import DatePicker from './DatePicker/DatePicker';

const Preloader = () => (<ContentLoader
    speed={2}
    width={1074}
    height={659}
    viewBox="0 0 1074 659"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
>
    <rect y="28" width="628" height="36" rx="5" fill="#C4C4C4"/>
    <rect y="96" width="972" height="28" rx="5" fill="#C4C4C4"/>
    <rect width="156" height="24" rx="5" fill="#C4C4C4"/>
    <rect y="140" width="589" height="27" rx="5" fill="#C4C4C4"/>
    <rect y="183" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="323" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="253" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="393" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="463" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="533" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="218" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="358" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="288" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="428" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="498" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="568" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="183" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="323" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="253" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="393" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="463" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="533" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="218" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="358" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="288" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="428" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="498" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect x="539" y="568" width="535" height="31" rx="5" fill="#C4C4C4"/>
    <rect y="623" width="194" height="36" rx="5" fill="#C4C4C4"/>
</ContentLoader>);

const Statistic = () => {
    const {projects, fetchProjects} = ProjectsStore;
    const [isSelected, setIsSelected] = useState(0);

    useEffect(fetchProjects, [fetchProjects]);

    return (<>
        {projects.length
            ? (<div className={styles.container}>
                <SelectProject projects={projects}
                               isSelected={isSelected}
                               setIsSelected={setIsSelected}
                />
                <div className={styles.range}>
                    <div className={styles.title}>Статистика ботов</div>
                    <DatePicker/>
                </div>
                <div className={styles.sort}>
                    Сортировать: <span>По посещаемости</span>
                </div>
                <SimpleBar className={styles.wrapper} style={{maxHeight: 410}} autoHide={false}>
                    <ul className={styles.list}>
                        <li className={styles.header}>
                            <div>Ключевые слова</div>
                            <div>Заходы ботов</div>
                        </li>
                        {projects[isSelected].statistic.map((item, index) => (
                            <li className={styles.item} key={`key-${index}`}>
                                <div>{item.key}</div>
                                <div>{item.value}</div>
                            </li>
                        ))}
                    </ul>
                </SimpleBar>
                <button className={styles.save} type='button'>Сохранить отчет в pdf</button>
            </div>)
            : <Preloader/>
        }
    </>);
}

export default observer(Statistic);
