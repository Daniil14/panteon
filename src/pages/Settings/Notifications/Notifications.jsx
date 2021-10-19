import React from 'react';
import styles from './Notifications.module.scss';

// Components:
import Notification from 'pages/Settings/Notification/Notification';

const Notifications = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Уведомления</div>
            <ul>
                <Notification props={props}/>
            </ul>
        </div>
    );
};

export default Notifications;
