import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import styles from './Attendance.module.scss';

// SVG:
import {ReactComponent as CloseSvg} from 'assets/svg/close.svg';

// Components:
import Select from '../Select/Select';

const Attendance = ({setIsOpen, setIsConfirm}) => {
    const cities = [
        {
            name: 'Абакан',
            value: 2398,
        },
        {
            name: 'Архангельск',
            value: 231,
        },
        {
            name: 'Астрахань',
            value: 2398,
        },
        {
            name: 'Барнаул',
            value: 231,
        },
        {
            name: 'Белгород',
            value: 2398,
        },
        {
            name: 'Абакан',
            value: 2398,
        },
        {
            name: 'Архангельск',
            value: 231,
        },
        {
            name: 'Астрахань',
            value: 2398,
        },
        {
            name: 'Барнаул',
            value: 231,
        },
        {
            name: 'Белгород',
            value: 2398,
        },
        {
            name: 'Абакан',
            value: 2398,
        },
        {
            name: 'Архангельск',
            value: 231,
        },
        {
            name: 'Астрахань',
            value: 2398,
        },
        {
            name: 'Барнаул',
            value: 231,
        },
        {
            name: 'Белгород',
            value: 2398,
        },
    ];

    return (
        <div className={styles.container}>
            <button className={styles.close} type='button' onClick={() => setIsOpen(false)}>
                <CloseSvg width={24} height={24}/>
            </button>
            <header className={styles.header}>
                <div className={styles.title}>Посещаемость сайта в каждом городе</div>
                <div className={styles.subtitle}>
                    В этом окне вы можете изменить количество посещений сайта, отсортировать по посещаемости и по
                    городу.
                </div>
            </header>
            <Select cities={cities}/>
            <div className={styles.sort}>Сортировать: <span>По посещаемости</span></div>
            <SimpleBar style={{maxHeight: 350}} autoHide={false}>
                <ul className={styles.cities}>
                    {cities.map((city, index) => (
                        <li className={styles.city} key={`city-${index}`}>
                            <span>{city.name}</span>
                            <span>{city.value}</span>
                        </li>
                    ))}
                </ul>
            </SimpleBar>
            <div className={styles.actions}>
                <button className={styles.save} onClick={() => setIsConfirm(true)} type="button">Сохранить</button>
                <button className={styles.reset} type="button">Сбросить посещаемость</button>
            </div>
        </div>
    );
};

export default Attendance;
