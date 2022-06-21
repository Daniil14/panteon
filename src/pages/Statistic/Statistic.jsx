import React, {useEffect, useState} from 'react';
import SimpleBar from 'simplebar-react';
import styles from './Statistic.module.scss';
import {observer} from 'mobx-react-lite';
import ProjectsStore from 'store/ProjectsStore';

// Components:
import SelectProject from './SelectProject/SelectProject';
import DatePicker from './DatePicker/DatePicker';
import Schedule from './Schedule/Schedule';

const cities = [
    {
        id: 0,
        name: 'Москва'
    },
    {
        id: 1,
        name: 'Санкт-Петербург'
    },
    {
        id: 2,
        name: 'Тольятти'
    },
    {
        id: 3,
        name: 'Воронеж'
    },
    {
        id: 4,
        name: 'Самара'
    }
];

const landing_page = [
    {
        id: 0,
        name: '???1'
    },
    {
        id: 1,
        name: '???2'
    },
    {
        id: 2,
        name: '???3'
    },
    {
        id: 3,
        name: '???4'
    },
    {
        id: 4,
        name: '???5'
    }
];

const Statistic = () => {
    const {projects, fetchProjects} = ProjectsStore;
    const [isSelected, setIsSelected] = useState(0);
    const [selectedCity, setSelectedCity] = useState(0);
    const [selectedPage, setSelectedPage] = useState(0);

    useEffect(fetchProjects, [fetchProjects]);

    return (<>
        {projects.length
            ? (<>
                <div className={styles.container}>
                    <div className={styles.filters}>
                        <SelectProject
                            label={'Проект'}
                            projects={projects}
                            isSelected={isSelected}
                            showIcon={true}
                            setIsSelected={setIsSelected}
                        />
                        <SelectProject
                            label={'Город'}
                            projects={cities}
                            isSelected={selectedCity}
                            setIsSelected={setSelectedCity}
                        />
                        <SelectProject
                            label={'Посадочная страница'}
                            projects={landing_page}
                            isSelected={selectedPage}
                            setIsSelected={setSelectedPage}
                        />
                    </div>
                    <div className={styles.range}>
                        <div className={styles.title}>Статистика ботов</div>
                        <DatePicker/>
                    </div>
                    <Schedule/>

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
                </div>
            </>)
            : <div/>
        }
    </>);
}

export default observer(Statistic);
