import React from 'react';
import { Formik, Field, Form } from 'formik';
import styles from './BadgeModal.module.scss';

// SVG:
import {ReactComponent as CheckSvg} from 'assets/svg/check.svg';
import {ReactComponent as CloseSvg} from 'assets/svg/close.svg';

const BadgeModal = ({initialBadge ,setFieldValue, setIsOpen}) => {
    const badgesList = [
        '/images/badge-2.svg',
        '/images/badge-3.svg',
        '/images/badge-4.svg',
        '/images/badge-5.svg',
        '/images/badge-6.svg',
        '/images/badge-7.svg',
        '/images/badge-8.svg',
    ];

    return (
        <div className={styles.container}>
            <button className={styles.close} type='button' onClick={() => setIsOpen(false)}>
                <CloseSvg width={24} height={24}/>
            </button>
            <header className={styles.header}>
                <div className={styles.title}>Выбрать значок проекта</div>
                <div className={styles.subtitle}>
                    Придайте вашим проектам индивидуальность и неповтормиую особенность
                </div>
            </header>
            <Formik initialValues={{badge: initialBadge}}
                    onSubmit={(values) => {
                        setFieldValue('badge', values.badge);
                        setIsOpen(false);
                    }}
            >
                {({values}) => (
                    <Form>
                        <div className={styles.badges}>
                            {badgesList.map((badge,index) => (
                                <label className={styles.badge} key={`badge-${index}`}>
                                    <Field type="radio" name="badge" value={badge}/>
                                    <img src={`${process.env.PUBLIC_URL}${badge}`} alt="badge"/>
                                    {values.badge === badge && (
                                        <CheckSvg className={styles.check} width={24} height={24}/>
                                    )}
                                </label>
                            ))}
                        </div>
                        <button className={styles.save} type="submit">Сохранить</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BadgeModal;
