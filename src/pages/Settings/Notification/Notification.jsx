import React from 'react';
import styles from './Notification.module.scss';

const Notification = ({props}) => {
    const {field} = props;

    return (
        <li className={styles.container}>
            <div>
                <div className={styles.label}>Уведомления в Telegram</div>
                <div className={styles.text}>
                    Получайте в Telegram обновления упоминаний, комментариев отчетов и отличных предложений
                </div>
            </div>
            <label className={styles.checkbox}>
                <input type="checkbox" {...field}/>
                <div/>
            </label>
        </li>
    );
};

export default Notification;
