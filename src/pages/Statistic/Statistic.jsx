import React, {useEffect, useState} from 'react';
import SimpleBar from 'simplebar-react';
import styles from './Statistic.module.scss';
import {observer} from 'mobx-react-lite';
import ProjectsStore from 'store/ProjectsStore';

// Components:
import SelectProject from './SelectProject/SelectProject';
import DatePicker from './DatePicker/DatePicker';
import Preloader from 'components/Preloader/Preloader';

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
