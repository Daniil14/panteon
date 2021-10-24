import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import styles from './Settings.module.scss';
import Notifications from 'pages/Settings/Notifications/Notifications';

// SVG:
import {ReactComponent as PassShowSvg} from 'assets/svg/pass-show.svg';
import {ReactComponent as PassNotShowSvg} from 'assets/svg/pass-not-show.svg';

const Settings = () => {
    const [showPassword, setShowPassword] = useState(false);
    const initialValues = {
        name: 'Екатерина',
        phone: '+7 (999) 999-99-99',
        email: 'test@test.ru',
        pass: '1111',
        notification: false
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Обязательно для заполнения'),
        phone: Yup.string().test('phone', 'Введите корректный номер', (val = '') => {
            return val === '' ? true : val.replace(/[-_]/g, '').length === 16;
        }).required('Обязательно для заполнения'),
        email: Yup.string().email('Введите корректный email').required('Обязательно для заполнения'),
        pass: Yup.string().required('Обязательно для заполнения'),
    });
    const onSubmit = (values) => {
        console.log('values', values);
    };

    return (<>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({errors, touched}) => (
                <Form className={styles.form}>
                    <h1 className={styles.name}>Екатерина</h1>
                    <label className={`${styles.field}${errors.name && touched.name ? ` ${styles.error}` : ''}`}>
                        <span>Имя</span>
                        <Field id="name" name="name" placeholder="Введите имя"/>
                        {errors.name && touched.name && <div className={styles.errorMessage}>{errors.name}</div>}
                    </label>
                    <label className={`${styles.field}${errors.phone && touched.phone ? ` ${styles.error}` : ''}`}>
                        <span>Телефон</span>
                        <Field id="phone" name="phone">
                            {({field}) => (<>
                                <MaskedInput
                                    {...field}
                                    type="text"
                                    placeholder="Введите номер"
                                    mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                                    maskchar="-"
                                />
                                {errors.phone && touched.phone &&
                                <div className={styles.errorMessage}>{errors.phone}</div>}
                            </>)}
                        </Field>
                    </label>
                    <label className={`${styles.field}${errors.email && touched.email ? ` ${styles.error}` : ''}`}>
                        <span>E-Mail</span>
                        <Field id="email" name="email" placeholder="Введите email"/>
                        {errors.email && touched.email && <div className={styles.errorMessage}>{errors.email}</div>}
                    </label>
                    <label className={`${styles.field}${errors.pass && touched.pass ? ` ${styles.error}` : ''}`}>
                        <span>Пароль</span>
                        <div className={styles.password}>
                            <Field id="pass" name="pass" placeholder="Введите пароль"
                                   type={showPassword ? 'text' : 'password'}/>
                            <button className={styles.show}
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={(event) => event.preventDefault()}
                                    onMouseUp={(event => event.preventDefault())}
                            >
                                {showPassword
                                    ? <PassNotShowSvg width={24} height={24}/>
                                    : <PassShowSvg width={24} height={24}/>
                                }
                            </button>
                        </div>
                        {errors.pass && touched.pass && <div className={styles.errorMessage}>{errors.pass}</div>}
                    </label>
                    <button className={styles.submit} type="submit">Подтвердить</button>
                    <Field name="notification" component={Notifications}/>
                </Form>
            )}
        </Formik>
    </>);
}

export default Settings;
