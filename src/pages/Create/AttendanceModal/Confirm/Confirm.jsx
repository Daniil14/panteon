import React from 'react';
import styles from './Confirm.module.scss';
import {ReactComponent as CloseSvg} from 'assets/svg/close.svg';

// SVG:
import {ReactComponent as WarnSvg} from 'assets/svg/warn.svg';

const Confirm = ({setIsOpen, setIsConfirm}) => {
    return (
        <div className={styles.container}>
            <button className={styles.close} type='button' onClick={() => setIsOpen(false)}>
                <CloseSvg width={24} height={24}/>
            </button>
            <header className={styles.header}>
                <WarnSvg width={60} height={60}/>
                <div className={styles.title}>Принять изменения посещаемости<br/>в городах</div>
                <div className={styles.subtitle}>Вы всегда можете изменить количество посещаемости в городах, в
                    настройках проекта
                </div>
            </header>
            <div className={styles.actions}>
                <button className={styles.proceed}
                        onClick={() => setIsOpen(false)}
                        type="button">
                    Продолжить
                </button>
                <button className={styles.cancel}
                        onClick={() => setIsConfirm(false)}
                        type="button">
                    Отмена
                </button>
            </div>
        </div>
    );
};

export default Confirm;
