import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import ProjectsStore from 'store/ProjectsStore';
import {Formik, Form, Field} from 'formik';
import styles from './CreateForm.module.scss';

// Components:
import BadgeModal from '../BadgeModal/BadgeModal';
import AttendanceModal from '../AttendanceModal/AttendanceModal';
import Modal from 'components/Modal/Modal';
import LaptopSvg from 'components/LaptopSvg';
import MobileSvg from 'components/MobileSvg';
import Tooltip from 'components/Tooltip/Tooltip';

const CreateForm = () => {
    const initialValues = {
        image: '/images/badge-2.svg',
        name: '',
        url: '',
        attendance: '',
        timeOnSite: '',
        viewingDepth: '',
        desktop: '',
        mobile: '',
        female: '',
        male: '',
        semanticCore: '',
    };
    const onSubmit = (values) => {
        ProjectsStore.addProject(values);
    };

    // Модальные окна:
    const [isOpenBadgeModal, setIsOpenBadgeModal] = useState(false);
    const [isOpenAttendanceModal, setIsOpenAttendanceModal] = useState(false);

    return (<>
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {({values, setFieldValue}) => (
                <Form className={styles.container}>
                    <Field className={styles.name}
                           id="name"
                           name="name"
                           placeholder="Введите название проекта"
                    />
                    <div className={styles.logo}>
                        <div className={styles.badge}>
                            <Field as={'img'}
                                   src={`${process.env.PUBLIC_URL}${values.image}`}
                                   id="image"
                                   name="image"
                            />
                        </div>
                        <div className={styles.logoActions}>
                            <button className={styles.logoChange}
                                    type="button"
                                    onClick={() => setIsOpenBadgeModal(true)}
                            >
                                Выбрать существующую
                            </button>
                            {isOpenBadgeModal && (
                                <Modal setIsOpen={setIsOpenBadgeModal}>
                                    <BadgeModal setFieldValue={setFieldValue}
                                                setIsOpen={setIsOpenBadgeModal}
                                                initialBadge={values.image}
                                    />
                                </Modal>
                            )}
                            <button className={styles.logoUpload} type="button">Загрузить фото проекта</button>
                        </div>
                    </div>
                    <label className={styles.field}>
                        <span>Ссылка на проект</span>
                        <Field id="url" name="url"/>
                    </label>
                    <div className={styles.city}>
                        <div className={styles.title}>
                            <span>Список городов для продвижения<br/>и посещаемость сайта в каждом городе</span>
                            <Tooltip title="Средняя посещяемость"
                                     text="Каждому оформленному на сайте заказу устанавливается статус, который зависит от того, на каком этапе находится заказ и какие действия были совершены"
                            />
                        </div>
                        <button className={styles.cityChange}
                                type="button"
                                onClick={() => setIsOpenAttendanceModal(true)}
                        >
                            Смотреть список городов
                        </button>
                        {isOpenAttendanceModal && (
                            <Modal setIsOpen={setIsOpenAttendanceModal}>
                                <AttendanceModal setIsOpen={setIsOpenAttendanceModal}/>
                            </Modal>
                        )}
                    </div>
                    <div className={styles.field}>
                        <div className={styles.title}>
                            <span>Посещаемость в день из Яндекса<br/>(среднее за последние 30 дней)</span>
                            <Tooltip title="Средняя посещяемость"
                                     text="Каждому оформленному на сайте заказу устанавливается статус, который зависит от того, на каком этапе находится заказ и какие действия были совершены"
                            />
                        </div>
                        <label>
                            <span>Посещаемость</span>
                            <Field id="attendance" name="attendance"/>
                        </label>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.title}>
                            <span>Среднее время на сайте</span>
                            <Tooltip title="Средняя посещяемость"
                                     text="Каждому оформленному на сайте заказу устанавливается статус, который зависит от того, на каком этапе находится заказ и какие действия были совершены"
                            />
                        </div>
                        <label>
                            <span>Среднее время</span>
                            <Field id="timeOnSite" name="timeOnSite"/>
                        </label>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.title}>
                            <span>Глубина просмотра</span>
                            <Tooltip title="Средняя посещяемость"
                                     text="Каждому оформленному на сайте заказу устанавливается статус, который зависит от того, на каком этапе находится заказ и какие действия были совершены"
                            />
                        </div>
                        <label>
                            <span>Глубина</span>
                            <Field id="viewingDepth" name="viewingDepth"/>
                        </label>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.title}>
                            <span>Девайсы</span>
                            <Tooltip title="Средняя посещяемость"
                                     text="Каждому оформленному на сайте заказу устанавливается статус, который зависит от того, на каком этапе находится заказ и какие действия были совершены"
                            />
                        </div>
                        <div className={styles.field}>
                            <div className={styles.svg}>
                                <LaptopSvg percent={values.desktop === '' ? 0 : values.desktop}/>
                            </div>
                            <label>
                                <span>Десктоп (%)</span>
                                <Field id="desktop" name="desktop"/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <div className={styles.svg}>
                                <MobileSvg percent={values.mobile === '' ? 0 : values.mobile}/>
                            </div>
                            <label>
                                <span>Мобильные (%)</span>
                                <Field id="mobile" name="mobile"/>
                            </label>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.title}>
                            <span>Аудитория (Пол)</span>
                            <Tooltip title="Средняя посещяемость"
                                     text="Каждому оформленному на сайте заказу устанавливается статус, который зависит от того, на каком этапе находится заказ и какие действия были совершены"
                            />
                        </div>
                        <div className={styles.field}>
                            <label>
                                <span>Женщины (%)</span>
                                <Field id="female" name="female"/>
                            </label>
                        </div>
                        <div className={styles.field}>
                            <label>
                                <span>Мужчины (%)</span>
                                <Field id="male" name="male"/>
                            </label>
                        </div>
                    </div>
                    <div className={styles.semanticCore}>
                        <div className={styles.title}>
                            <span>Семантическое ядро</span>
                            <Tooltip title="Средняя посещяемость"
                                     text="Каждому оформленному на сайте заказу устанавливается статус, который зависит от того, на каком этапе находится заказ и какие действия были совершены"
                            />
                        </div>
                        <Field as="textarea" id="semanticCore" name="semanticCore" rows={4}/>
                    </div>
                    <button className={styles.submit} type="submit">Сохранить</button>
                </Form>
            )}
        </Formik>
    </>);
};

export default observer(CreateForm);
